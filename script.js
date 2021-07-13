var nav_data = [{
    name: "Home",
    has_drop_down: false,
    link: "http://me.iitr.ac.in/"
},
{
    name: "Academics",
    has_drop_down: true,
    link: "https://www.iitr.ac.in/departments/ME/pages/Academics.html",
    dropdown: [{
        name: "Courses Offered",
        link: "/departments/ME/pages/Academics+Courses_Offered.html"
    }, {
        name: "Course Structure",
        link: "/departments/ME/pages/Academics+_en_Course_Structure__en_.html"
    }, {
        name: "Placement Record",
        link: "/departments/ME/pages/Academics+Placement_Record.html"
    }, {
        name: "Downloads",
        link: "https://www.iitr.ac.in/departments/ME/pages/Downloads.html"
    },
    ]
}, {
    name: "Admission",
    has_drop_down: true,
    link: "https://www.iitr.ac.in/departments/ME/pages/admission.html",
    dropdown: [{
        name: "PhD",
        link: "https://iitr.ac.in/departments/ME/pages/PhD_Admission+PhD_Admission.html"
    }, {
        name: "Post Graduate Program",
        link: "https://iitr.ac.in/departments/ME/pages/PhD_Admission+Post_Graduate_Program_Admission.html"
    },
    ]
}, {
    name: "Research",
    has_drop_down: true,
    link: "https://www.iitr.ac.in/departments/ME/pages/Research.html",
    dropdown: [{
        name: "Consultancy &amp; Testing Projects",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Consultancy_and_Testing_Projects.html"
    }, {
        name: "Expertise In Research",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Expertise_in_Research.html"
    }, {
        name: "Facilities",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Expertise_in_Research.html"
    }, {
        name: "Honours And Awards",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Expertise_in_Research.html"
    }, {
        name: "Major Research",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Major_Research.html"
    }, {
        name: "Minor Consultancy",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Minor_Consultancy.html"
    }, {
        name: "PhD Awarded",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+_en_PhD_Awarded__en_.html"
    }, {
        name: "Publications",
        link: "https://www.iitr.ac.in/departments/ME/pages/Publication.html"
    }, {
        name: "Reports",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Reports.html"
    }, {
        name: "Specializations",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Specializations.html"
    }, {
        name: "Sponsered Research",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Sponsered_Research.html"
    }, {
        name: "Summary Consultancy",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research+Summary.html"
    },
    ]
}, {
    name: "Achievements",
    has_drop_down: false,
    link: "https://iitr.ac.in/departments/ME/pages/Achievements.html"
},
{
    name: "Events",
    has_drop_down: true,
    link: "https://www.iitr.ac.in/departments/ME/pages/Events.html",
    dropdown: [{
        name: "Faculty Participation",
        link: "https://www.iitr.ac.in/departments/ME/pages/Events+Faculty_Participation.html"
    }, {
        name: "Upcoming",
        link: "https://www.iitr.ac.in/departments/ME/pages/Events+Upcoming+Upcoming.html"
    }, {
        name: "Organised",
        link: "https://www.iitr.ac.in/departments/ME/pages/Events+Organised.html"
    }, {
        name: "Student Sections",
        link: "https://www.iitr.ac.in/departments/ME/pages/Events+Student_Sections.html"
    }, {
        name: "Visits",
        link: "https://www.iitr.ac.in/departments/ME/pages/Events+Visits.html"
    },
    ]
},
]

var event_data = [

    {
        title: "Research Scholar Day",
        link: "https://www.iitr.ac.in/departments/ME/pages/Research_Scholar_Day_March_2021.html",
        location: {
            title: "E Town Hall, MIED",
            link: "https://goo.gl/maps/ErkDB3nyXprMMyrp7"
        },

        date: "24 Mar 2021",
        disc: "Student Coordinators: Pushpendra Vishwakarma,Amit Kumar, Tejas Naik, Raushan K. Singh. Faculty Coordinators: Prof. Varun Sharma, Prof. Sneha Singh"
    },
    {
        title: "Inaugural Prof S. Lal Memorial Lecture",
        link: "https://www.youtube.com/watch?v=ePq9tAavzSM",
        location: false,
        date: "29 Oct 2020",
        disc: "Prof. R. Narasimhan, IISc Bangalore delivered the inaugural lecture on 'Mechanics and Mechanisms of Fracture of Magnesium'."
    },

]

var announcement_data = [
    {
        title: "Post Graduate Program on “Additive and Joining Technologies“",
        link: "https://www.iitr.ac.in/departments/ME/uploads/Brochure%20PG%20Prorgram%20on%20Additive%20_%20Joining%20Technologies%20%28MIED%29.pdf",
        disc: "The program encompasses additive manufacturing, solid state and fusion based joining technologies, material characterization and testing as program core courses and many industry oriented program elective courses. Further, many new courses designed in light futuristic requirement such as FEM for manufacturing processes, Dissimilar Metal Joining, Hybrid Joining Technologies, Reverse Engineering and Rapid Tool make the program attractive and futuristic. Therefore, program has great potential jobs and scope for undertaking doctoral research",
        date: "20 Mar 2021"
    },

]

var facilities = [
    {
        title: "Advanced Manufacturing Processes Lab",
        img_link: "assets/images/facility/amplab/slider1.jpg",
        key_features: ["Ultrasonic Machine", "NC Spark Erosion Facility", "Surface Roughness Measuring Facility", "High Speed Video Camera", "Precision Weighing Facility"],
        brief: "The Advanced Manufacturing Processes (AMP) laboratory provides the state of the art facilities for realizing next-generation products and educating the next generation of engineers. This lab provides a multipurpose and interdisciplinary environment for both training and research related machining. The focus of the lab is on the development of efficient non-traditional processes as well as system-level manufacturing solutions.",
        view_more_link: "https://iitr.ac.in/mechanical/amplab/"
    },
    {
        title: "Intelligent Machinery Condition Monitoring Laboratory",
        img_link: "assets/images/facility/IMCM/slider1.jpg",
        key_features: ["Bearing Test Rig", "Bearing Diagnostics Test System",],
        brief: "IMCML is dedicated towards research in the field of fault diagnosis and prognosis for rotating element. The research work mainly focuses on bearing fault detection, isolation, diagnosis, prognosis etc. The lab is equipped with bearing prognostic test system and bearing diagnostic test system and various experimental facilities.",
        view_more_link: "https://iitr.ac.in/mechanical/IMCM/"
    }, {
        title: "Sustainable Power & Energy System Lab",
        img_link: "assets/images/facility/sustainablepower/slider1.png",
        key_features: ["Constant Temperature Heating Cooling Bath", "Fourier T Fourier-Transform Infrared Spectrometer", "Thermal Property Analyser Specification", "Probe Sonicator"],
        brief: "Sustainable Power and Energy System Lab (SPES Lab) is situated at the ground floor of east block in Mechanical & Industrial Engineering Department, IIT Roorkee. The aim of this laboratory is to train undergraduate, post graduate, and research scholar students in the area of sustainable power with the objective to research and study in this field.",
        view_more_link: "https://iitr.ac.in/mechanical/sustainablepower/"
    }, {
        title: "Advanced Manufacturing Processes Lab",
        img_link: "assets/images/facility/amplab/slider1.jpg",
        key_features: ["Ultrasonic Machine", "NC Spark Erosion Facility", "Surface Roughness Measuring Facility", "High Speed Video Camera", "Precision Weighing Facility"],
        brief: "The Advanced Manufacturing Processes (AMP) laboratory provides the state of the art facilities for realizing next-generation products and educating the next generation of engineers. This lab provides a multipurpose and interdisciplinary environment for both training and research related machining. The focus of the lab is on the development of efficient non-traditional processes as well as system-level manufacturing solutions.",
        view_more_link: "https://iitr.ac.in/mechanical/amplab/"
    },
    {
        title: "Intelligent Machinery Condition Monitoring Laboratory",
        img_link: "assets/images/facility/IMCM/slider1.jpg",
        key_features: ["Bearing Test Rig", "Bearing Diagnostics Test System",],
        brief: "IMCML is dedicated towards research in the field of fault diagnosis and prognosis for rotating element. The research work mainly focuses on bearing fault detection, isolation, diagnosis, prognosis etc. The lab is equipped with bearing prognostic test system and bearing diagnostic test system and various experimental facilities.",
        view_more_link: "https://iitr.ac.in/mechanical/IMCM/"
    }, {
        title: "Sustainable Power & Energy System Lab",
        img_link: "assets/images/facility/sustainablepower/slider1.png",
        key_features: ["Constant Temperature Heating Cooling Bath", "Fourier T Fourier-Transform Infrared Spectrometer", "Thermal Property Analyser Specification", "Probe Sonicator"],
        brief: "Sustainable Power and Energy System Lab (SPES Lab) is situated at the ground floor of east block in Mechanical & Industrial Engineering Department, IIT Roorkee. The aim of this laboratory is to train undergraduate, post graduate, and research scholar students in the area of sustainable power with the objective to research and study in this field.",
        view_more_link: "https://iitr.ac.in/mechanical/sustainablepower/"
    }, {
        title: "Advanced Manufacturing Processes Lab",
        img_link: "assets/images/facility/amplab/slider1.jpg",
        key_features: ["Ultrasonic Machine", "NC Spark Erosion Facility", "Surface Roughness Measuring Facility", "High Speed Video Camera", "Precision Weighing Facility"],
        brief: "The Advanced Manufacturing Processes (AMP) laboratory provides the state of the art facilities for realizing next-generation products and educating the next generation of engineers. This lab provides a multipurpose and interdisciplinary environment for both training and research related machining. The focus of the lab is on the development of efficient non-traditional processes as well as system-level manufacturing solutions.",
        view_more_link: "https://iitr.ac.in/mechanical/amplab/"
    },
    {
        title: "Intelligent Machinery Condition Monitoring Laboratory",
        img_link: "assets/images/facility/IMCM/slider1.jpg",
        key_features: ["Bearing Test Rig", "Bearing Diagnostics Test System",],
        brief: "IMCML is dedicated towards research in the field of fault diagnosis and prognosis for rotating element. The research work mainly focuses on bearing fault detection, isolation, diagnosis, prognosis etc. The lab is equipped with bearing prognostic test system and bearing diagnostic test system and various experimental facilities.",
        view_more_link: "https://iitr.ac.in/mechanical/IMCM/"
    },
]

facilities_select = 0

var app = new Vue({
    el: '#app',
    data: {
        nav_data,
        announcement_data,
        event_data,
        facilities,
        facilities_select
    },
    methods: {
        open_page: function (s) {
            window.open(s, "_blank");
        },
        change_facility_select: function (s) {
            this.facilities_select = s
            console.log(s)
        }
    },
    filters: {

    }

})
