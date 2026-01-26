// components/Contact.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, Pin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInquiryMutation } from "@/hooks/useInquiry";

const contactInfo = [
	{ icon: Phone, text: "+2349134138999" },
	{ icon: Mail, text: "support@scalepadi.com" },
	{
		icon: Pin,
		text: "13 Akinbola Close Surulere, Lagos, Nigeria",
	},
];

const formFields = [
	{
		name: "firstName",
		label: "First name",
		placeholder: "Enter your first name",
		type: "text",
	},
	{
		name: "lastName",
		label: "Last name",
		placeholder: "Enter your last name",
		type: "text",
	},
	{
		name: "email",
		label: "Email address",
		placeholder: "Enter your email",
		type: "email",
	},
	{
		name: "note",
		label: "I am looking for information about:",
		placeholder: "Enter your message",
		type: "textarea",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const inputVariants = {
	hidden: { height: 0, opacity: 0, overflow: "hidden" },
	visible: {
		height: "auto",
		opacity: 1,
		overflow: "visible",
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

export default function Contact() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		note: "",
	});

	const inquiryMutation = useInquiryMutation({
		onSuccess: (data) => {
			console.log(data);
			setFormData({ firstName: "", lastName: "", email: "", note: "" });
		},
		onError: (error) => {
			console.error("Inquiry submission error:", error);
		},
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		inquiryMutation.mutate(formData);
	};

	return (
		<div className="flex flex-col gap-4 lg:gap-8 px-4 lg:px-60 py-8">
			<div className="w-full lg:w-[534px]">
				<span className="text-[#1A1A1A] text-2xl lg:text-5xl lg:leading-[69.19px] font-bold">
					Have <span className="text-[#1746A2]">Inquiries</span> about
					our Product?
				</span>
			</div>

			<div className="flex gap-5 lg:gap-10 flex-col lg:flex-row">
				{/* Animated Contact Info */}
				<motion.div
					className="w-full lg:w-[470px] bg-[#1A1A1A] text-white h-[582px] rounded-4xl px-4 lg:px-14 pt-12 shadow-lg flex flex-col gap-9"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={inputVariants}>
						<span className="font-bold text-[32px] lg:leading-[100%]">
							Contact Information
						</span>
						<p className="text-[18px] text-[#C9C9C9] mt-1">
							Reach us, and we will get back to you within the
							next 24 hours.
						</p>
					</motion.div>

					{contactInfo.map(({ icon: Icon, text }, i) => (
						<motion.div
							key={i}
							className="flex items-center gap-2"
							variants={inputVariants}
						>
							<Icon aria-hidden="true" />
							<span>{text}</span>
						</motion.div>
					))}
				</motion.div>

				{/* Animated Form */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-6 w-full lg:w-[417px]"
				>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col gap-6"
					>
						{formFields.map(
							({ name, label, placeholder, type }) => (
								<div key={name} className="flex flex-col gap-2">
									<Label className="text-[#1A1A1A] font-normal text-base">
										{label}
									</Label>
									<motion.div
										variants={inputVariants}
										className="overflow-hidden"
									>
										{type === "textarea" ? (
											<Textarea
												name={name}
												placeholder={placeholder}
												value={
													formData[
														name as keyof typeof formData
													]
												}
												onChange={handleChange}
												className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-4 py-7 shadow-none w-full text-[#1A1A1A]"
												rows={4}
												required
												disabled={
													inquiryMutation.isPending
												}
											/>
										) : (
											<Input
												name={name}
												type={type}
												placeholder={placeholder}
												value={
													formData[
														name as keyof typeof formData
													]
												}
												onChange={handleChange}
												className="bg-[#F6F6F7] border border-[#D1DAEC75] rounded-2xl px-4 py-7 shadow-none w-full text-[#1A1A1A]"
												required
												disabled={
													inquiryMutation.isPending
												}
											/>
										)}
									</motion.div>
								</div>
							),
						)}
					</motion.div>

					<div className="flex justify-end mt-4">
						<Button
							type="submit"
							className="flex w-fit gap-2 text-white bg-[#1746A2] hover:bg-[#123c8d]"
							aria-label="Submit contact form"
							disabled={inquiryMutation.isPending}
						>
							{inquiryMutation.isPending
								? "Submitting..."
								: "Submit"}
							{!inquiryMutation.isPending && <ArrowRight />}
						</Button>
					</div>

					{/* Error Message */}
					{inquiryMutation.isError && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className="p-3 bg-red-50 border border-red-200 rounded-lg"
						>
							<p className="text-red-700 text-sm">
								Error: {inquiryMutation.error.message}
							</p>
						</motion.div>
					)}
				</form>
			</div>
		</div>
	);
}
