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

// Trigger

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
			"Become the sales professional businesses are actively searching for. Sales Mastery is a structured, hands-on program taught by professionals currently working in sales. You'll learn how to prospect, pitch, and close, the actual skills that get results, then graduate job ready, not just informed.",
		instructor: {
			name: "ScalePadi Academy",
			avatar: "/images/author-dp.svg",
		},
		previewImage: "/images/course-preview.svg",
		previewDuration: "8 Weeks",
		curriculumLink:
			"https://drive.google.com/file/d/1tuXS_yBCnxVSm4cFjVspx8Rpce-Kr37q/view?usp=sharing",
		rating: 5,
		link: "https://bit.ly/ScalePadiAcademyshop",
		// https://bit.ly/ScalePadiAcademyshop
		participants: 35,
		isComingSoon: false,
	},
	{
		id: 2,
		title: "Leadership",
		duration: "4 Weeks",
		image: "/academy/academy2.png",
		category: "Leadership",
		description:
			"Technical skill alone doesn't drive growth. Leadership, influence, and follow-through do. Leadership for Growth Talents builds the soft skills professionals in sales, marketing, business development, and operations need to lead and execute like true growth operators.",
		instructor: {
			name: "ScalePadi Academy",
			avatar: "/images/author-dp.svg",
		},
		previewImage: "/images/course-preview.svg",
		previewDuration: "3hrs, 30min",
		curriculumLink:
			"https://drive.google.com/file/d/1suPWMS5CzLG_TpTmgQMOVPtb2_ncOYPf/view?usp=sharing",
		rating: 5,
		link: "https://selar.com/19177dx70h",
		participants: 38,
		isComingSoon: false,
	},
	{
		id: 3,
		title: "PR and Brand Management",
		duration: "3 Months (Hands-On Implementation)",
		image: "/academy/academy3.png",
		category: "Growth Strategy",
		description:
			"How a business is seen often decides whether it grows. PR and Brand Management trains professionals in sales, marketing, and business development to shape public perception, manage reputation, and build brands that people trust and remember, the kind of skill that turns visibility into real business growth.",
		instructor: {
			name: "ScalePadi Academy",
			avatar: "/images/author-dp.svg",
		},
		previewImage: "/images/course-preview.svg",
		previewDuration: "3hrs, 30min",
		curriculumLink: "#",
		rating: 4.5,
		link: "https://selar.com/76v8z07h8y",
		participants: 25,
		isComingSoon: true,
	},

	// Add more courses here as needed
];
