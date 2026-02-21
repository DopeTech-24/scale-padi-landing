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
		duration: "8 Weeks",
		image: "/academy/academy1.png",
		category: "Sales Mastery",
		description:
			"Become a High-Performance Sales Professional.Sales Mastery is a hands-on, practical program designed to turn you into a confident,results-driven sales professional. This is not just theory-heavy learning, it's implementation-focused, real-world sales training",
		instructor: {
			name: "GrowthPadi Team",
			avatar: "/images/author-dp.svg",
		},
		previewImage: "/images/course-preview.svg",
		previewDuration: "8 Weeks",
		curriculumLink:
			"https://drive.google.com/file/d/1tuXS_yBCnxVSm4cFjVspx8Rpce-Kr37q/view?usp=sharing",
		rating: 5,
		participants: 35,
	},
	{
		id: 2,
		title: "Leadership",
		duration: "4 Weeks",
		image: "/academy/academy2.png",
		category: "Leadership",
		description:
			"Master the Soft Skills That Drive Business Growth. Growth talent isn’t just about technical skill — it’s about leadership, influence, and execution. Leadership for Growth Talent equips professionals in sales, marketing, business development, and operations with the critical soft skills required to perform at a high level.",
		instructor: {
			name: "GrowthPadi Team",
			avatar: "/images/author-dp.svg",
		},
		previewImage: "/images/course-preview.svg",
		previewDuration: "3hrs, 30min",
		curriculumLink:
			"https://drive.google.com/file/d/1suPWMS5CzLG_TpTmgQMOVPtb2_ncOYPf/view?usp=sharing",
		rating: 5,
		participants: 38,
	},
	{
		id: 3,
		title: "Growth Strategy",
		duration: "3 Months (Hands-On Implementation)",
		image: "/academy/academy3.png",
		category: "Growth Strategy",
		description:
			"Structure Your Business. Unlock Sustainable Growth. Growth Essentials is a transformation program for founders and business owners who want clarity, structure, and scalable systems. You will work directly with our Growth Engineers to design, refine, and optimize your business foundation",
		instructor: {
			name: "GrowthPadi Team",
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
