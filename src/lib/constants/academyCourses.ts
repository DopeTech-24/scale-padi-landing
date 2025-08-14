// // lib/constants/academyCourses.ts
// export interface AcademyCourse {
//   id: number;
//   slug: string;
//   title: string;
//   image: string;
//   category: string;
//   duration: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   description: string;
//   rating: number;
//   issuedCertificates: number;
// }

// export const academyCourses: AcademyCourse[] = [
//   {
//     id: 1,
//     slug: "sales-mastery",
//     title: "Sales Mastery",
//     image: "/images/academy1.svg",
//     category: "Sales Mastery",
//     duration: "1hr:30min",
//     author: {
//       name: "David Eze Peters",
//       avatar: "/images/author-dp.svg",
//     },
//     description:
//       "For professionals who want to transition into growth and help businesses scale as experts or consultants. This is a 3-month intensive training followed by 3 months of internship working with real businesses.",
//     rating: 5,
//     issuedCertificates: 35,
//   },
//   {
//     id: 2,
//     slug: "entrepreneurship",
//     title: "Entrepreneurship",
//     image: "/images/academy2.svg",
//     category: "Entrepreneurship",
//     duration: "1hr:30min",
//     author: {
//       name: "Jane Doe",
//       avatar: "/images/author-dp.svg",
//     },
//     description:
//       "Learn how to build, validate, and scale a startup idea with real-world case studies, mentorship, and go-to-market frameworks.",
//     rating: 5,
//     issuedCertificates: 20,
//   },
// ];



// academyData.ts
export const academyCourses = [
  {
    id: 1,
    title: "Sales Mastery",
    duration: "1hr:30min",
    image: "/academy/academy1.png",
    category: "Sales Mastery",
    description:
      "Learn how to market your business effectively with our marketing courses",
    instructor: {
      name: "David Eze Peters",
      avatar: "/images/author-dp.svg",
    },
    previewImage: "/images/course-preview.svg",
    previewDuration: "3hrs, 30min",
    curriculumLink: "https://drive.google.com/file/d/1tuXS_yBCnxVSm4cFjVspx8Rpce-Kr37q/view?usp=sharing",
    rating: 5,
    participants: 35,
  },
  {
    id: 2,
    title: "Leadership",
    duration: "1hr:30min",
    image: "/academy/academy2.png",
    category: "Leadership",
    description: "Leadership for growth talents",
    instructor: {
      name: "Jane Doe",
      avatar: "/images/author-dp.svg",
    },
    previewImage: "/images/course-preview.svg",
    previewDuration: "3hrs, 30min",
    curriculumLink: "https://drive.google.com/file/d/1suPWMS5CzLG_TpTmgQMOVPtb2_ncOYPf/view?usp=sharing",
    rating: 5,
    participants: 38,
  },
  {
    id: 3,
    title: "Growth Strategy",
    duration: "2hr:30min",
    image: "/academy/academy3.png",
    category: "Growth Strategy",
    description: "Growth Startegy Essentials",
    instructor: {
      name: "Jane Doe",
      avatar: "/images/author-dp.svg",
    },
    previewImage: "/images/course-preview.svg",
    previewDuration: "3hrs, 30min",
    curriculumLink: "#",
    rating: 4.5,
    participants: 25,
  },

  // Add more courses here as needed
];
