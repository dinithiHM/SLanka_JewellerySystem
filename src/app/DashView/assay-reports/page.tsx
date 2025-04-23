"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2, Search, Filter, Plus, Download, RefreshCw, Calendar } from 'lucide-react';
import { formatDate } from '@/utils/formatters';

interface AssayReport {
  report_id: number;
  certificate_no: string;
  report_date: string;
  customer_name: string;
  weight: number;
  gold_percentage: number;
  gold_concentration: number;
  gold_carat: number;
  sample_type: string;
  remarks: string;
  branch_id: number;
  branch_name: string;
  item_id?: number;
}

interface MetalComposition {
  composition_id: number;
  report_id: number;
  element_name: string;
  element_symbol: string;
  concentration: number;
}

interface Branch {
  branch_id: number;
  branch_name: string;
}

interface JewelleryItem {
  item_id: number;
  product_title: string;
  category: string;
  in_stock: number;
  buying_price: number;
  selling_price: number;
  branch_id: number;
  branch_name?: string;
  gold_carat?: number;
  weight?: number;
}

const AssayReportsPage = () => {
  const router = useRouter();
  const [assayReports, setAssayReports] = useState<AssayReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [branches, setBranches] = useState<Branch[]>([]);
  const [branchFilter, setBranchFilter] = useState<string>('All Branches');
  const [userBranchId, setUserBranchId] = useState<number | null>(null);
  const [userRole, setUserRole] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentReport, setCurrentReport] = useState<AssayReport | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jewelleryItems, setJewelleryItems] = useState<JewelleryItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [loadingItems, setLoadingItems] = useState<boolean>(false);

  // Form state
  const [certificateNo, setCertificateNo] = useState<string>('');
  const [reportDate, setReportDate] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [goldPercentage, setGoldPercentage] = useState<number>(0);
  const [goldConcentration, setGoldConcentration] = useState<number>(0);
  const [goldCarat, setGoldCarat] = useState<number>(0);
  const [sampleType, setSampleType] = useState<string>('');
  const [remarks, setRemarks] = useState<string>('');
  const [branchId, setBranchId] = useState<number | null>(null);
  const [compositions, setCompositions] = useState<MetalComposition[]>([]);

  // Metadata for linking to jewellery item
  const [isHomogeneous, setIsHomogeneous] = useState<boolean>(true);
  const [hasSolder, setHasSolder] = useState<boolean>(false);
  const [solderQuality, setSolderQuality] = useState<string>('');

  // Check authentication and get user info from localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No authentication token found, redirecting to login');
      router.push('/login');
      return;
    }

    // Verify token with the server
    const verifyToken = async () => {
      try {
        const response = await fetch('http://localhost:3002/auth/verifyToken', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Invalid token');
        }

        setIsAuthenticated(true);

        // Get user info
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
          try {
            const parsedUserInfo = JSON.parse(userInfo);
            setUserBranchId(parsedUserInfo.branch_id || null);
            setUserRole(parsedUserInfo.role || '');
          } catch (err) {
            console.error('Error parsing user info:', err);
          }
        } else {
          // Fallback to individual items if userInfo is not available
          setUserRole(localStorage.getItem('role') || '');
          const branchId = localStorage.getItem('branchId');
          setUserBranchId(branchId ? parseInt(branchId) : null);
        }
      } catch (err) {
        console.error('Authentication error:', err);
        localStorage.removeItem('token');
        router.push('/login');
      }
    };

    verifyToken();
  }, [router]);

  // Fetch branches
  useEffect(() => {
    console.log('Branch fetch effect running, isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) return;

    const fetchBranches = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Set default branches in case the API call fails
        const defaultBranches = [
          { branch_id: 1, branch_name: 'Mahiyanganaya Branch' },
          { branch_id: 2, branch_name: 'Mahaoya Branch' }
        ];

        try {
          const response = await fetch('http://localhost:3002/branches', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Fetched branches:', data);
            setBranches(data);
          } else {
            console.warn(`Failed to fetch branches: ${response.status}, using default branches`);
            setBranches(defaultBranches);
          }
        } catch (fetchErr) {
          console.warn('Error fetching branches, using default branches:', fetchErr);
          setBranches(defaultBranches);
        }

        // Log the branches state after setting
        setTimeout(() => {
          console.log('Branches state:', branches);
        }, 100);
      } catch (err) {
        console.error('Error in branch fetch effect:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchBranches();
  }, [isAuthenticated]);

  // Fetch jewellery items
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchJewelleryItems = async () => {
      try {
        setLoadingItems(true);

        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Try fetching from the jewellery-items endpoint first
        try {
          // Construct URL with query parameters for branch filtering
          let url = 'http://localhost:3002/jewellery-items';
          const params = new URLSearchParams();

          if (userBranchId && (!userRole || userRole.toLowerCase() !== 'admin')) {
            params.append('branch_id', userBranchId.toString());
          }

          if (params.toString()) {
            url += `?${params.toString()}`;
          }

          console.log('Fetching jewellery items from:', url);
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Fetched jewellery items:', data.length);

            // Ensure numeric fields are properly parsed
            const parsedData = data.map((item: any) => ({
              ...item,
              weight: parseFloat(item.weight) || 0,
              gold_carat: parseFloat(item.gold_carat) || 0
            }));

            setJewelleryItems(parsedData);
            return; // Exit if successful
          }
          console.warn(`Failed to fetch from jewellery-items endpoint: ${response.status}, trying available-items endpoint`);
        } catch (err) {
          console.warn('Error fetching from jewellery-items endpoint, trying available-items endpoint:', err);
        }

        // Fallback to the assay-reports/available-items endpoint
        try {
          let url = 'http://localhost:3002/assay-reports/available-items';
          const params = new URLSearchParams();

          if (userBranchId && userRole !== 'admin') {
            params.append('branch_id', userBranchId.toString());
          }

          // Include all items, even those with assay reports
          params.append('includeAll', 'true');

          if (params.toString()) {
            url += `?${params.toString()}`;
          }

          console.log('Fetching jewellery items from fallback URL:', url);
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Fetched jewellery items from fallback:', data.length);

            // Ensure numeric fields are properly parsed
            const parsedData = data.map((item: any) => ({
              ...item,
              weight: parseFloat(item.weight) || 0,
              gold_carat: parseFloat(item.gold_carat) || 0
            }));

            setJewelleryItems(parsedData);
          } else {
            console.warn(`Failed to fetch from fallback endpoint: ${response.status}`);
            // Set empty array as fallback
            setJewelleryItems([]);
          }
        } catch (fallbackErr) {
          console.error('Error fetching jewellery items from fallback endpoint:', fallbackErr);
          // Set empty array as fallback
          setJewelleryItems([]);
        }
      } catch (err) {
        console.error('Error in jewellery items fetch effect:', err);
      } finally {
        setLoadingItems(false);
      }
    };

    fetchJewelleryItems();
  }, [isAuthenticated, userBranchId, userRole]);

  // Fetch assay reports
  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchAssayReports = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Construct URL with query parameters for branch filtering
        let url = 'http://localhost:3002/assay-reports';
        const params = new URLSearchParams();

        if (userBranchId && userRole !== 'admin') {
          params.append('branch_id', userBranchId.toString());
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        console.log('Fetching assay reports from:', url);
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched assay reports:', data.length);

          // Ensure numeric fields are properly parsed
          const parsedData = data.map((report: any) => ({
            ...report,
            weight: parseFloat(report.weight) || 0,
            gold_percentage: parseFloat(report.gold_percentage) || 0,
            gold_concentration: parseFloat(report.gold_concentration) || 0,
            gold_carat: parseFloat(report.gold_carat) || 0
          }));

          setAssayReports(parsedData);
        } else {
          console.warn(`Failed to fetch assay reports: ${response.status}, setting empty array`);
          setAssayReports([]);
          if (response.status === 403) {
            setError('You do not have permission to view assay reports. Please contact your administrator.');
          } else {
            setError(`Failed to fetch assay reports: ${response.status}`);
          }
        }
      } catch (err) {
        console.error('Error fetching assay reports:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setAssayReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAssayReports();
  }, [isAuthenticated, userBranchId, userRole]);

  // Filter assay reports based on search term and branch filter
  const filteredReports = assayReports.filter(report => {
    const matchesSearch =
      report.certificate_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (report.customer_name && report.customer_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (report.sample_type && report.sample_type.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesBranch =
      branchFilter === 'All Branches' ||
      (report.branch_name && report.branch_name === branchFilter);

    return matchesSearch && matchesBranch;
  });

  // Handle item selection
  const handleItemSelection = (itemId: number | null) => {
    setSelectedItemId(itemId);

    if (!itemId) {
      // If no item selected, don't auto-populate fields
      return;
    }

    // Find the selected item
    const selectedItem = jewelleryItems.find(item => item.item_id === itemId);
    if (!selectedItem) return;

    // Auto-populate fields from the selected item
    if (selectedItem.weight) {
      setWeight(selectedItem.weight);
    }

    if (selectedItem.gold_carat) {
      setGoldCarat(selectedItem.gold_carat);
      // Approximate gold percentage based on carat (24K = 99.9%)
      const approximatePercentage = (selectedItem.gold_carat / 24) * 99.9;
      setGoldPercentage(parseFloat(approximatePercentage.toFixed(2)));
      setGoldConcentration(parseFloat(approximatePercentage.toFixed(2)));
    }

    // Set sample type based on category
    setSampleType(selectedItem.category);

    // Set branch ID
    if (selectedItem.branch_id) {
      setBranchId(selectedItem.branch_id);
    }
  };

  // Handle add new report
  const handleAddNewReport = () => {
    setCurrentReport(null);
    setCertificateNo('');
    setReportDate(new Date().toISOString().split('T')[0]);
    setCustomerName('');
    setWeight(0);
    setGoldPercentage(0);
    setGoldConcentration(0);
    setGoldCarat(0);
    setSampleType('');
    setRemarks('');
    setSelectedItemId(null);
    setIsHomogeneous(true);
    setHasSolder(false);
    setSolderQuality('');

    // Set branch ID based on user role and branch
    if (userRole !== 'admin') {
      // For non-admin users, set to their branch
      setBranchId(userBranchId);
      console.log('Setting branch ID to user branch:', userBranchId);
    } else {
      // For admin, default to branch 2 (Mahaoya Branch)
      setBranchId(2); // Default to Mahaoya Branch
      console.log('Admin user - setting default branch ID to 2 (Mahaoya Branch)');
    }
    setCompositions([
      { composition_id: 0, report_id: 0, element_name: 'SILVER', element_symbol: 'Ag', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'COPPER', element_symbol: 'Cu', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'ZINC', element_symbol: 'Zn', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'NICKEL', element_symbol: 'Ni', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'PALLADIUM', element_symbol: 'Pd', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'CADMIUM', element_symbol: 'Cd', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'IRIDIUM', element_symbol: 'Ir', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'INDIUM', element_symbol: 'In', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'RUTHENIUM', element_symbol: 'Ru', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'RHODIUM', element_symbol: 'Rh', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'TUNGSTEN', element_symbol: 'W', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'TIN', element_symbol: 'Sn', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'LEAD', element_symbol: 'Pb', concentration: 0 },
      { composition_id: 0, report_id: 0, element_name: 'PLATINUM', element_symbol: 'Pt', concentration: 0 }
    ]);
    setFormMode('add');
    setShowForm(true);
  };

  // Handle edit report
  const handleEditReport = async (reportId: number) => {
    try {
      setLoading(true);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`http://localhost:3002/assay-reports/${reportId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch report details: ${response.status}`);
      }

      const data = await response.json();

      // Ensure numeric fields are properly parsed
      const parsedData = {
        ...data,
        weight: parseFloat(data.weight) || 0,
        gold_percentage: parseFloat(data.gold_percentage) || 0,
        gold_concentration: parseFloat(data.gold_concentration) || 0,
        gold_carat: parseFloat(data.gold_carat) || 0
      };

      setCurrentReport(parsedData);
      setCertificateNo(parsedData.certificate_no);
      setReportDate(parsedData.report_date.split('T')[0]);
      setCustomerName(parsedData.customer_name || '');
      setWeight(parsedData.weight);
      setGoldPercentage(parsedData.gold_percentage);
      setGoldConcentration(parsedData.gold_concentration);
      setGoldCarat(parsedData.gold_carat);
      setSampleType(data.sample_type || '');
      setRemarks(data.remarks || '');
      setBranchId(data.branch_id);

      // If compositions are available, use them
      if (data.compositions && data.compositions.length > 0) {
        setCompositions(data.compositions);
      } else {
        // Fetch compositions separately
        const compResponse = await fetch(`http://localhost:3002/assay-reports/${reportId}/compositions`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (compResponse.ok) {
          const compData = await compResponse.json();

          // Ensure concentration is properly parsed as a number
          const parsedCompData = compData.map((comp: any) => ({
            ...comp,
            concentration: parseFloat(comp.concentration) || 0
          }));

          setCompositions(parsedCompData);
        }
      }

      setFormMode('edit');
      setShowForm(true);
    } catch (err) {
      console.error('Error fetching report details:', err);
      alert('Failed to load report details');
    } finally {
      setLoading(false);
    }
  };

  // Handle delete report
  const handleDeleteReport = async (reportId: number) => {
    if (!window.confirm('Are you sure you want to delete this assay report?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`http://localhost:3002/assay-reports/delete/${reportId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete report');
      }

      // Refresh the list
      let url = 'http://localhost:3002/assay-reports';
      if (userRole !== 'admin' && userBranchId) {
        url += `?branch_id=${userBranchId}`;
      }
      console.log('Refreshing assay reports from:', url);
      const refreshResponse = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();

        // Ensure numeric fields are properly parsed
        const parsedData = data.map((report: any) => ({
          ...report,
          weight: parseFloat(report.weight) || 0,
          gold_percentage: parseFloat(report.gold_percentage) || 0,
          gold_concentration: parseFloat(report.gold_concentration) || 0,
          gold_carat: parseFloat(report.gold_carat) || 0
        }));

        setAssayReports(parsedData);
      } else {
        // Fallback to client-side filtering if refresh fails
        setAssayReports(assayReports.filter(report => report.report_id !== reportId));
      }

      alert('Assay report deleted successfully');
    } catch (err) {
      console.error('Error deleting report:', err);
      alert('Failed to delete report');
    }
  };

  // Handle form submission
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if ((formMode === 'edit' && !certificateNo) || !reportDate || weight <= 0 || goldPercentage <= 0 || goldCarat <= 0) {
      alert('Please fill all required fields with valid values');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No authentication token found. Please log in again.');
      return;
    }

    // Ensure branch_id is properly set
    console.log('Submitting with branch_id:', branchId);

    // Make sure branch_id is set to a valid value
    let finalBranchId = branchId;
    if (!finalBranchId) {
      if (userRole !== 'admin') {
        finalBranchId = userBranchId;
      } else {
        finalBranchId = 2; // Default to Mahaoya Branch
      }
    }

    console.log('Final branch_id:', finalBranchId);

    const reportData = {
      ...(formMode === 'edit' && { certificate_no: certificateNo }),
      report_date: reportDate,
      customer_name: customerName,
      weight,
      gold_percentage: goldPercentage,
      gold_concentration: goldConcentration || goldPercentage,
      gold_carat: goldCarat,
      sample_type: sampleType,
      remarks,
      branch_id: finalBranchId,
      compositions: compositions.filter(comp => comp.concentration > 0),
      // Include jewellery item ID if selected
      item_id: selectedItemId,
      // Include metadata for linking
      is_homogeneous: isHomogeneous,
      has_solder: hasSolder,
      solder_quality: hasSolder ? solderQuality : null
    };

    console.log('Final report data:', reportData);

    console.log('Submitting assay report data:', reportData);

    try {
      let response;

      if (formMode === 'add') {
        // Create new report
        response = await fetch('http://localhost:3002/assay-reports/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(reportData)
        });
      } else {
        // Update existing report
        response = await fetch(`http://localhost:3002/assay-reports/update/${currentReport?.report_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(reportData)
        });
      }

      if (!response.ok) {
        throw new Error(`Failed to ${formMode} report`);
      }

      // Refresh the list
      let url = 'http://localhost:3002/assay-reports';
      if (userRole !== 'admin' && userBranchId) {
        url += `?branch_id=${userBranchId}`;
      }
      console.log('Refreshing assay reports from:', url);
      const refreshResponse = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();

        // Ensure numeric fields are properly parsed
        const parsedData = data.map((report: any) => ({
          ...report,
          weight: parseFloat(report.weight) || 0,
          gold_percentage: parseFloat(report.gold_percentage) || 0,
          gold_concentration: parseFloat(report.gold_concentration) || 0,
          gold_carat: parseFloat(report.gold_carat) || 0
        }));

        setAssayReports(parsedData);
      }

      alert(`Assay report ${formMode === 'add' ? 'added' : 'updated'} successfully`);
      setShowForm(false);
    } catch (err) {
      console.error(`Error ${formMode === 'add' ? 'adding' : 'updating'} report:`, err);
      alert(`Failed to ${formMode} report`);
    }
  };

  // Handle composition change
  const handleCompositionChange = (index: number, value: number) => {
    const updatedCompositions = [...compositions];
    updatedCompositions[index].concentration = value;
    setCompositions(updatedCompositions);
  };

  // Calculate total composition percentage
  const totalComposition = compositions.reduce((sum, comp) => sum + comp.concentration, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Assay Reports</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-8 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Only show branch filter for admin users */}
          {userRole && userRole.toLowerCase() === 'admin' && (
            <div className="relative">
              <select
                className="pl-8 pr-4 py-2 border rounded-md appearance-none"
                value={branchFilter}
                onChange={async (e) => {
                  const selectedBranchName = e.target.value;
                  setBranchFilter(selectedBranchName);

                  // If admin user, fetch data with branch filter
                  if (userRole && userRole.toLowerCase() === 'admin' && isAuthenticated) {
                    try {
                      setLoading(true);

                      const token = localStorage.getItem('token');
                      if (!token) {
                        throw new Error('No authentication token found');
                      }

                      // Construct URL with query parameters for branch filtering
                      let url = 'http://localhost:3002/assay-reports';
                      const params = new URLSearchParams();

                      // Only add branch filter if not 'All Branches'
                      if (selectedBranchName !== 'All Branches') {
                        // Find the branch_id for the selected branch name
                        const selectedBranch = branches.find(branch => branch.branch_name === selectedBranchName);
                        if (selectedBranch) {
                          params.append('branch_id', selectedBranch.branch_id.toString());
                          console.log('Setting branch ID from filter:', selectedBranch.branch_id);
                          setUserBranchId(selectedBranch.branch_id);
                        }
                      } else {
                        // Reset to user's original branch ID if selecting All Branches
                        const originalBranchId = localStorage.getItem('branchId');
                        setUserBranchId(originalBranchId ? parseInt(originalBranchId) : null);
                      }

                      if (params.toString()) {
                        url += `?${params.toString()}`;
                      }

                      console.log('Fetching assay reports with branch filter from:', url);
                      const response = await fetch(url, {
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                      });

                      if (response.ok) {
                        const data = await response.json();
                        console.log('Fetched assay reports with branch filter:', data.length);

                        // Ensure numeric fields are properly parsed
                        const parsedData = data.map((report: any) => ({
                          ...report,
                          weight: parseFloat(report.weight) || 0,
                          gold_percentage: parseFloat(report.gold_percentage) || 0,
                          gold_concentration: parseFloat(report.gold_concentration) || 0,
                          gold_carat: parseFloat(report.gold_carat) || 0
                        }));

                        setAssayReports(parsedData);
                      }
                    } catch (err) {
                      console.error('Error fetching assay reports with branch filter:', err);
                    } finally {
                      setLoading(false);
                    }
                  }
                }}
              >
                <option value="All Branches">All Branches</option>
                {branches.map((branch) => (
                  <option key={branch.branch_id} value={branch.branch_name}>
                    {branch.branch_name}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddNewReport}
          >
            <Plus className="h-4 w-4" />
            Add New Report
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {filteredReports.length === 0 ? (
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p>No assay reports found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Certificate No</th>
                    <th className="py-2 px-4 border-b text-left">Date</th>
                    <th className="py-2 px-4 border-b text-left">Customer</th>
                    <th className="py-2 px-4 border-b text-left">Sample Type</th>
                    <th className="py-2 px-4 border-b text-left">Weight (g)</th>
                    <th className="py-2 px-4 border-b text-left">Gold %</th>
                    <th className="py-2 px-4 border-b text-left">Carat</th>
                    <th className="py-2 px-4 border-b text-left">Branch</th>
                    <th className="py-2 px-4 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report.report_id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{report.certificate_no}</td>
                      <td className="py-2 px-4 border-b">{formatDate(report.report_date)}</td>
                      <td className="py-2 px-4 border-b">{report.customer_name || '-'}</td>
                      <td className="py-2 px-4 border-b">{report.sample_type || '-'}</td>
                      <td className="py-2 px-4 border-b">{typeof report.weight === 'number' ? report.weight.toFixed(3) : (parseFloat(report.weight) || 0).toFixed(3)}</td>
                      <td className="py-2 px-4 border-b">{typeof report.gold_percentage === 'number' ? report.gold_percentage.toFixed(2) : (parseFloat(report.gold_percentage) || 0).toFixed(2)}%</td>
                      <td className="py-2 px-4 border-b">{typeof report.gold_carat === 'number' ? report.gold_carat.toFixed(2) : (parseFloat(report.gold_carat) || 0).toFixed(2)}K</td>
                      <td className="py-2 px-4 border-b">{report.branch_name || '-'}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex gap-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => handleEditReport(report.report_id)}
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeleteReport(report.report_id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {formMode === 'add' ? 'Add New Assay Report' : 'Edit Assay Report'}
            </h2>

            <form onSubmit={handleSubmitForm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {formMode === 'add' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Select Jewellery Item
                    </label>
                    <div className="flex gap-2">
                      <select
                        className="w-full p-2 border rounded-md"
                        value={selectedItemId || ''}
                        onChange={(e) => handleItemSelection(e.target.value ? parseInt(e.target.value) : null)}
                      >
                        <option value="">-- Select an item --</option>
                        {jewelleryItems.map((item) => (
                          <option key={item.item_id} value={item.item_id}>
                            {item.product_title} - {item.category} {item.weight ? `(${item.weight}g)` : ''}
                          </option>
                        ))}
                      </select>
                      {loadingItems && (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Selecting an item will auto-populate weight, carat, and other details
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Certificate No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-gray-100"
                    value={formMode === 'add' ? 'Will be generated automatically (AC-X)' : certificateNo}
                    onChange={(e) => setCertificateNo(e.target.value)}
                    disabled={formMode === 'add'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Report Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Sample Type
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    value={sampleType}
                    onChange={(e) => setSampleType(e.target.value)}
                    placeholder="e.g., BRACELET, NECKLACE"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Weight (g) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    className="w-full p-2 border rounded-md"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    required
                    min="0.001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gold Percentage (%) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full p-2 border rounded-md"
                    value={goldPercentage}
                    onChange={(e) => setGoldPercentage(parseFloat(e.target.value))}
                    required
                    min="0.01"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gold Concentration (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full p-2 border rounded-md"
                    value={goldConcentration}
                    onChange={(e) => setGoldConcentration(parseFloat(e.target.value))}
                    min="0"
                    max="100"
                    placeholder="Same as Gold Percentage if not specified"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gold Carat (K) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full p-2 border rounded-md"
                    value={goldCarat}
                    onChange={(e) => setGoldCarat(parseFloat(e.target.value))}
                    required
                    min="0.01"
                    max="24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Branch
                  </label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={branchId || ''}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBranchId(e.target.value ? parseInt(e.target.value) : null)}
                    disabled={userRole !== 'admin'}
                  >
                    <option value="">Select Branch</option>
                    <option value="1">Mahiyanganaya Branch</option>
                    <option value="2">Mahaoya Branch</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Remarks
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Metadata section for linking to jewellery item */}
              {selectedItemId && (
                <div className="md:col-span-2 border-t pt-4 mt-2">
                  <h3 className="text-lg font-medium mb-2">Item Metadata</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="is_homogeneous"
                        className="mr-2 h-4 w-4"
                        checked={isHomogeneous}
                        onChange={(e) => setIsHomogeneous(e.target.checked)}
                      />
                      <label htmlFor="is_homogeneous" className="text-sm font-medium">
                        Is Homogeneous
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="has_solder"
                        className="mr-2 h-4 w-4"
                        checked={hasSolder}
                        onChange={(e) => setHasSolder(e.target.checked)}
                      />
                      <label htmlFor="has_solder" className="text-sm font-medium">
                        Has Solder
                      </label>
                    </div>

                    {hasSolder && (
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Solder Quality
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md"
                          value={solderQuality}
                          onChange={(e) => setSolderQuality(e.target.value)}
                          placeholder="e.g., Good, Fair, Poor"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-4 md:col-span-2 border-t pt-4 mt-2">
                <h3 className="text-lg font-medium mb-2">Metal Composition</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Enter the percentage concentration of each metal element. Total: {totalComposition.toFixed(2)}%
                  {totalComposition > 100 && (
                    <span className="text-red-500 ml-2">Total exceeds 100%!</span>
                  )}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {compositions.map((comp, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium mb-1">
                        {comp.element_name} ({comp.element_symbol})
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full p-2 border rounded-md"
                        value={comp.concentration}
                        onChange={(e) => handleCompositionChange(index, parseFloat(e.target.value) || 0)}
                        min="0"
                        max="100"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {formMode === 'add' ? 'Add Report' : 'Update Report'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssayReportsPage;
