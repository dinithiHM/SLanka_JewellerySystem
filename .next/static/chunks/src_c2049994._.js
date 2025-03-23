(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c2049994._.js", {

"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// TEMPORARY DATA
__turbopack_context__.s({
    "StoreManagerData": (()=>StoreManagerData),
    "announcementsData": (()=>announcementsData),
    "assignmentsData": (()=>assignmentsData),
    "calendarEvents": (()=>calendarEvents),
    "classesData": (()=>classesData),
    "eventsData": (()=>eventsData),
    "examsData": (()=>examsData),
    "lessonsData": (()=>lessonsData),
    "parentsData": (()=>parentsData),
    "resultsData": (()=>resultsData),
    "role": (()=>role),
    "studentsData": (()=>studentsData),
    "subjectsData": (()=>subjectsData)
});
let role = "admin";
const StoreManagerData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "1B",
            "2A",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics",
            "Chemistry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Music",
            "History"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Physics"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "English",
            "Spanish"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Math",
            "Geometry"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Literature",
            "English"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: [
            "Biology"
        ],
        classes: [
            "5A",
            "4B",
            "3C"
        ],
        address: "123 Main St, Anytown, USA"
    }
];
const studentsData = [
    {
        id: 1,
        studentId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "1B",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        studentId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        studentId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        studentId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        studentId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        studentId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        studentId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        studentId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        studentId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        studentId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        grade: 5,
        class: "5A",
        address: "123 Main St, Anytown, USA"
    }
];
const parentsData = [
    {
        id: 1,
        name: "John Doe",
        students: [
            "Sarah Brewer"
        ],
        email: "john@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        name: "Jane Doe",
        students: [
            "Cecilia Bradley"
        ],
        email: "jane@doe.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 3,
        name: "Mike Geller",
        students: [
            "Fanny Caldwell"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 4,
        name: "Jay French",
        students: [
            "Mollie Fitzgerald",
            "Ian Bryant"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 5,
        name: "Jane Smith",
        students: [
            "Mable Harvey"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 6,
        name: "Anna Santiago",
        students: [
            "Joel Lambert"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 7,
        name: "Allen Black",
        students: [
            "Carrie Tucker",
            "Lilly Underwood"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 8,
        name: "Ophelia Castro",
        students: [
            "Alexander Blair"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 9,
        name: "Derek Briggs",
        students: [
            "Susan Webster",
            "Maude Stone"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 10,
        name: "John Glover",
        students: [
            "Stella Scott"
        ],
        email: "mike@geller.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA"
    }
];
const subjectsData = [
    {
        id: 1,
        name: "Math",
        StoreManager: [
            "Alice Phelps",
            "Russell Davidson"
        ]
    },
    {
        id: 2,
        name: "English",
        StoreManager: [
            "Manuel Becker",
            "Eddie Chavez"
        ]
    },
    {
        id: 3,
        name: "Physics",
        StoreManager: [
            "Lola Newman",
            "Darrell Delgado"
        ]
    },
    {
        id: 4,
        name: "Chemistry",
        StoreManager: [
            "Nathan Kelly",
            "Benjamin Snyder"
        ]
    },
    {
        id: 5,
        name: "Biology",
        StoreManager: [
            "Alma Benson",
            "Lina Collier"
        ]
    },
    {
        id: 6,
        name: "History",
        StoreManager: [
            "Hannah Bowman",
            "Betty Obrien"
        ]
    },
    {
        id: 7,
        name: "Geography",
        StoreManager: [
            "Lora French",
            "Sue Brady"
        ]
    },
    {
        id: 8,
        name: "Art",
        StoreManager: [
            "Harriet Alvarado",
            "Mayme Keller"
        ]
    },
    {
        id: 9,
        name: "Music",
        StoreManager: [
            "Gertrude Roy",
            "Rosa Singleton"
        ]
    },
    {
        id: 10,
        name: "Literature",
        StoreManager: [
            "Effie Lynch",
            "Brett Flowers"
        ]
    }
];
const classesData = [
    {
        id: 1,
        name: "1A",
        capacity: 20,
        grade: 1,
        supervisor: "Joseph Padilla"
    },
    {
        id: 2,
        name: "2B",
        capacity: 22,
        grade: 2,
        supervisor: "Blake Joseph"
    },
    {
        id: 3,
        name: "3C",
        capacity: 20,
        grade: 3,
        supervisor: "Tom Bennett"
    },
    {
        id: 4,
        name: "4B",
        capacity: 18,
        grade: 4,
        supervisor: "Aaron Collins"
    },
    {
        id: 5,
        name: "5A",
        capacity: 16,
        grade: 5,
        supervisor: "Iva Frank"
    },
    {
        id: 5,
        name: "5B",
        capacity: 20,
        grade: 5,
        supervisor: "Leila Santos"
    },
    {
        id: 7,
        name: "7A",
        capacity: 18,
        grade: 7,
        supervisor: "Carrie Walton"
    },
    {
        id: 8,
        name: "6B",
        capacity: 22,
        grade: 6,
        supervisor: "Christopher Butler"
    },
    {
        id: 9,
        name: "6C",
        capacity: 18,
        grade: 6,
        supervisor: "Marc Miller"
    },
    {
        id: 10,
        name: "6D",
        capacity: 20,
        grade: 6,
        supervisor: "Ophelia Marsh"
    }
];
const lessonsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Tommy Wise"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Rhoda Frank"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Della Dunn"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Bruce Rodriguez"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Birdie Butler"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Bettie Oliver"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Herman Howard"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Lucinda Thomas"
    },
    {
        id: 9,
        subject: "Physics",
        class: "6C",
        teacher: "Ronald Roberts"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "4B",
        teacher: "Julia Pittman"
    }
];
const examsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Martha Morris",
        date: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Randall Garcia",
        date: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Myrtie Scott",
        date: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Alvin Swanson",
        date: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Mabelle Wallace",
        date: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Dale Thompson",
        date: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Allie Conner",
        date: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Hunter Fuller",
        date: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "Lois Lindsey",
        date: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "Vera Soto",
        date: "2025-01-01"
    }
];
const assignmentsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "Anthony Boone",
        dueDate: "2025-01-01"
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "Clifford Bowen",
        dueDate: "2025-01-01"
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "Catherine Malone",
        dueDate: "2025-01-01"
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "Willie Medina",
        dueDate: "2025-01-01"
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "Jose Ruiz",
        dueDate: "2025-01-01"
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "Katharine Owens",
        dueDate: "2025-01-01"
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "Shawn Norman",
        dueDate: "2025-01-01"
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "Don Holloway",
        dueDate: "2025-01-01"
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "Franklin Gregory",
        dueDate: "2025-01-01"
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "Danny Nguyen",
        dueDate: "2025-01-01"
    }
];
const resultsData = [
    {
        id: 1,
        subject: "Math",
        class: "1A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 2,
        subject: "English",
        class: "2A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 3,
        subject: "Science",
        class: "3A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 4,
        subject: "Social Studies",
        class: "1B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 5,
        subject: "Art",
        class: "4A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 6,
        subject: "Music",
        class: "5A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 7,
        subject: "History",
        class: "6A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 8,
        subject: "Geography",
        class: "6B",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 9,
        subject: "Physics",
        class: "7A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    },
    {
        id: 10,
        subject: "Chemistry",
        class: "8A",
        teacher: "John Doe",
        student: "John Doe",
        date: "2025-01-01",
        type: "exam",
        score: 90
    }
];
const eventsData = [
    {
        id: 1,
        title: "Lake Trip",
        class: "1A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 2,
        title: "Picnic",
        class: "2A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 3,
        title: "Beach Trip",
        class: "3A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 4,
        title: "Museum Trip",
        class: "4A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 5,
        title: "Music Concert",
        class: "5A",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 6,
        title: "Magician Show",
        class: "1B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 7,
        title: "Lake Trip",
        class: "2B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 8,
        title: "Cycling Race",
        class: "3B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 9,
        title: "Art Exhibition",
        class: "4B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    },
    {
        id: 10,
        title: "Sports Tournament",
        class: "5B",
        date: "2025-01-01",
        startTime: "10:00",
        endTime: "11:00"
    }
];
const announcementsData = [
    {
        id: 1,
        title: "About 4A Math Test",
        class: "4A",
        date: "2025-01-01"
    },
    {
        id: 2,
        title: "About 3A Math Test",
        class: "3A",
        date: "2025-01-01"
    },
    {
        id: 3,
        title: "About 3B Math Test",
        class: "3B",
        date: "2025-01-01"
    },
    {
        id: 4,
        title: "About 6A Math Test",
        class: "6A",
        date: "2025-01-01"
    },
    {
        id: 5,
        title: "About 8C Math Test",
        class: "8C",
        date: "2025-01-01"
    },
    {
        id: 6,
        title: "About 2A Math Test",
        class: "2A",
        date: "2025-01-01"
    },
    {
        id: 7,
        title: "About 4C Math Test",
        class: "4C",
        date: "2025-01-01"
    },
    {
        id: 8,
        title: "About 4B Math Test",
        class: "4B",
        date: "2025-01-01"
    },
    {
        id: 9,
        title: "About 3C Math Test",
        class: "3C",
        date: "2025-01-01"
    },
    {
        id: 10,
        title: "About 1C Math Test",
        class: "1C",
        date: "2025-01-01"
    }
];
const calendarEvents = [
    {
        title: "Math",
        allDay: false,
        start: new Date(2024, 7, 12, 8, 0),
        end: new Date(2024, 7, 12, 8, 45)
    },
    {
        title: "English",
        allDay: false,
        start: new Date(2024, 7, 12, 9, 0),
        end: new Date(2024, 7, 12, 9, 45)
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(2024, 7, 12, 10, 0),
        end: new Date(2024, 7, 12, 10, 45)
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(2024, 7, 12, 11, 0),
        end: new Date(2024, 7, 12, 11, 45)
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(2024, 7, 12, 13, 0),
        end: new Date(2024, 7, 12, 13, 45)
    },
    {
        title: "History",
        allDay: false,
        start: new Date(2024, 7, 12, 14, 0),
        end: new Date(2024, 7, 12, 14, 45)
    },
    {
        title: "English",
        allDay: false,
        start: new Date(2024, 7, 13, 9, 0),
        end: new Date(2024, 7, 13, 9, 45)
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(2024, 7, 13, 10, 0),
        end: new Date(2024, 7, 13, 10, 45)
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(2024, 7, 13, 11, 0),
        end: new Date(2024, 7, 13, 11, 45)
    },
    {
        title: "History",
        allDay: false,
        start: new Date(2024, 7, 13, 14, 0),
        end: new Date(2024, 7, 13, 14, 45)
    },
    {
        title: "Math",
        allDay: false,
        start: new Date(2024, 7, 14, 8, 0),
        end: new Date(2024, 7, 14, 8, 45)
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(2024, 7, 14, 10, 0),
        end: new Date(2024, 7, 14, 10, 45)
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(2024, 7, 14, 13, 0),
        end: new Date(2024, 7, 14, 13, 45)
    },
    {
        title: "History",
        allDay: false,
        start: new Date(2024, 7, 14, 14, 0),
        end: new Date(2024, 7, 13, 14, 45)
    },
    {
        title: "English",
        allDay: false,
        start: new Date(2024, 7, 15, 9, 0),
        end: new Date(2024, 7, 15, 9, 45)
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(2024, 7, 15, 10, 0),
        end: new Date(2024, 7, 15, 10, 45)
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(2024, 7, 15, 11, 0),
        end: new Date(2024, 7, 15, 11, 45)
    },
    {
        title: "History",
        allDay: false,
        start: new Date(2024, 7, 15, 14, 0),
        end: new Date(2024, 7, 15, 14, 45)
    },
    {
        title: "Math",
        allDay: false,
        start: new Date(2024, 7, 16, 8, 0),
        end: new Date(2024, 7, 16, 8, 45)
    },
    {
        title: "English",
        allDay: false,
        start: new Date(2024, 7, 16, 9, 0),
        end: new Date(2024, 7, 16, 9, 45)
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(2024, 7, 16, 11, 0),
        end: new Date(2024, 7, 16, 11, 45)
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(2024, 7, 16, 13, 0),
        end: new Date(2024, 7, 16, 13, 45)
    },
    {
        title: "History",
        allDay: false,
        start: new Date(2024, 7, 16, 14, 0),
        end: new Date(2024, 7, 16, 14, 45)
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BigCalender.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["momentLocalizer"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const BigCalendar = ()=>{
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Views"].WORK_WEEK);
    const handleOnChangeView = (selectedView)=>{
        setView(selectedView);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#FFE569",
            height: "100%"
        },
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                localizer: localizer,
                events: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calendarEvents"],
                startAccessor: "start",
                endAccessor: "end",
                views: [
                    "work_week",
                    "day"
                ],
                view: view,
                style: {
                    height: "98%"
                },
                onView: handleOnChangeView,
                min: new Date(2025, 1, 0, 8, 0, 0),
                max: new Date(2025, 1, 0, 17, 0, 0)
            }, void 0, false, {
                fileName: "[project]/src/components/BigCalender.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BigCalender.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(BigCalendar, "UOErMMWTse6pjdrrl3N6SHCYnxI=");
_c = BigCalendar;
const __TURBOPACK__default__export__ = BigCalendar;
var _c;
__turbopack_context__.k.register(_c, "BigCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FormModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dynamic imports for forms
const TeacherForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/forms/TeacherForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/forms/TeacherForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 9,
            columnNumber: 18
        }, this)
});
_c = TeacherForm;
const StudentForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/forms/StudentForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/forms/StudentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, this)
});
_c1 = StudentForm;
// Add dynamic imports for other forms as needed
const StoreManagerForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/forms/TeacherForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/forms/TeacherForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 16,
            columnNumber: 18
        }, this)
});
_c2 = StoreManagerForm;
const ParentForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/forms/StudentForm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/forms/StudentForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 19,
            columnNumber: 18
        }, this)
});
_c3 = ParentForm;
// const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
//   loading: () => <h1>Loading...</h1>,
// });
// ... Add more dynamic imports for other table types
// Forms mapping object
const forms = {
    teacher: (type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeacherForm, {
            type: type,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 30,
            columnNumber: 28
        }, this),
    student: (type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentForm, {
            type: type,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 31,
            columnNumber: 28
        }, this),
    "store-manager": (type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreManagerForm, {
            type: type,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 32,
            columnNumber: 36
        }, this),
    parent: (type, data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentForm, {
            type: type,
            data: data
        }, void 0, false, {
            fileName: "[project]/src/components/FormModal.tsx",
            lineNumber: 33,
            columnNumber: 27
        }, this)
};
const FormModal = ({ table, type, data, id })=>{
    _s();
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-#FFF6BD";
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine the form to render based on the table value
    const Form = ()=>{
        if (type === "delete" && id) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: "",
                className: "p-4 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-center font-medium",
                        children: [
                            "All data will be lost. Are you sure you want to delete this ",
                            table,
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FormModal.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FormModal.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormModal.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        }
        // Check if the form exists for the given table
        const FormComponent = forms[table];
        if (!FormComponent) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Form for ",
                    table,
                    " not found!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FormModal.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
        }
        return type === "delete" ? null : FormComponent(type, data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${size} flex items-center justify-center rounded-full ${bgColor}`,
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: `/${type}.png`,
                    alt: "",
                    width: 16,
                    height: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/FormModal.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FormModal.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {}, void 0, false, {
                            fileName: "[project]/src/components/FormModal.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4 cursor-pointer",
                            onClick: ()=>setOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/close.png",
                                alt: "",
                                width: 14,
                                height: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/FormModal.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FormModal.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FormModal.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FormModal.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(FormModal, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c4 = FormModal;
const __TURBOPACK__default__export__ = FormModal;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TeacherForm");
__turbopack_context__.k.register(_c1, "StudentForm");
__turbopack_context__.k.register(_c2, "StoreManagerForm");
__turbopack_context__.k.register(_c3, "ParentForm");
__turbopack_context__.k.register(_c4, "FormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c2049994._.js.map