module.exports = {

"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
}}),
"[project]/src/components/Menu.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)"); // Ensure this is correctly fetching the role
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as Home>"); // Importing corrected icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-rsc] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-rsc] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-rsc] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-rsc] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-rsc] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-rsc] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-rsc] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-rsc] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-rsc] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-rsc] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-rsc] (ecmascript) <export default as Boxes>");
;
;
;
;
const ROLES = {
    ADMIN: "admin",
    STORE_MANAGER: "storeManager",
    SALES_ASSOCIATE: "salesAssociate",
    PARENT: "parent"
};
const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                label: "Home",
                href: "/",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                label: "Store Managers",
                href: "/DashView/list/StoreManager",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                label: "Sales Associates",
                href: "/list/students",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                label: "Cashiers",
                href: "/list/parents",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                label: "Suppliers",
                href: "/DashView/list/Supplier",
                visible: [
                    ROLES.ADMIN
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                label: "Orders",
                href: "/list/classes",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"],
                label: "Jewellery Stock",
                href: "/list/lessons",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"],
                label: "Gold Stock",
                href: "/list/exams",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
                label: "Categories",
                href: "/list/assignments",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                label: "Sales",
                href: "/list/results",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"],
                label: "Reports",
                href: "/list/attendance",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"],
                label: "Events",
                href: "/list/events",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                label: "Advance Payment",
                href: "/list/messages",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                label: "Notifications",
                href: "/list/announcements",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"],
                label: "Profile",
                href: "/profile",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                label: "Settings",
                href: "/settings",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"],
                label: "Logout",
                href: "/logout",
                visible: [
                    ROLES.ADMIN,
                    ROLES.STORE_MANAGER,
                    ROLES.SALES_ASSOCIATE,
                    ROLES.PARENT
                ]
            }
        ]
    }
];
const Menu = ()=>{
    // Ensure the role is correct, check in the console if necessary
    console.log("Current role:", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["role"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 text-sm bg-[#FFF6BD] p-4 rounded-md w-64",
        children: menuItems.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden lg:block text-black font-semibold my-4",
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Menu.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    section.items.map((item)=>{
                        // Ensure the role is valid and visible for the current item
                        if (item.visible.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["role"])) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "flex items-center justify-start gap-4 text-black py-2 px-4 rounded-md hover:bg-[#F0A500] hover:text-white transition duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 20,
                                        className: "text-black"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Menu.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden lg:block",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Menu.tsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/components/Menu.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this);
                        }
                        return null;
                    })
                ]
            }, section.title, true, {
                fileName: "[project]/src/components/Menu.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Menu.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Menu;
}}),
"[project]/src/app/DashView/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4 bg-[#FFE569] h-screen overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center justify-center lg:justify-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "logo",
                                width: 32,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/layout.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden lg:block font-bold text-black",
                                children: "S Lanka Jewellery"
                            }, void 0, false, {
                                fileName: "[project]/src/app/DashView/layout.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/DashView/layout.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/DashView/layout.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/DashView/layout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-white overflow-y-auto flex flex-col p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/DashView/layout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/DashView/layout.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_df33930f._.js.map