import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-white">
      {/* LEFT - Scrollable Menu */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4 bg-[#FFE569] h-screen overflow-y-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={80} />
          <span className="hidden lg:block font-bold text-black">
            S Lanka Jewellery
          </span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT - Main Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-white overflow-y-auto flex flex-col p-6">
        {children}
      </div>
    </div>
  );
}
