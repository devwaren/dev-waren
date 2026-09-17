import { Mapper } from "@dev-waren/react-form-kit";
import { MoveRight, Package, PersonStandingIcon } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";

const details = [
	{
		icon: BiBulb,
		label: "Problem Solver",
		desc: "I enjoy solving complex problems and building practical solutions.",
	},
	{
		icon: BsSpeedometer,
		label: "Fast Learner",
		desc: "I Always exploring new ideas and tools for better workflows, and modern practices.",
	},
	{
		icon: Package,
		label: "Product Mindset",
		desc: "I build with end-users and business ideology.",
	},
	{
		icon: PersonStandingIcon,
		label: "Open to Opportunities",
		desc: "Always excited to collaborate and shared meaningful projects",
	},
];

export default function About() {
	return (
		<div className="flex border-t py-8 items-end-safe gap-6">
			<div className="flex-1 space-y-4">
				<p className="text-gray-600 uppercase tracking-widest">About</p>
				<h2 className="text-4xl text-gray-500 max-w-[80%] leading-12">
					<span className="text-gray-800">A Developer</span> who cares about
					<span className="text-gray-800"> Security</span> and{" "}
					<span className="text-gray-800">Details</span>.
				</h2>
				<p className="text-gray-500 max-w-[90%] leading-7">
					I'm Full Stack Developer with 4 years of experience building web
					applications. I enjoy discover things and turn it to reality through
					clean design, solid security best practices and engineering.
				</p>

				<button
					type="button"
					className="px-4 py-3 border border-gray-400 text-gray-600 rounded-md flex items-center gap-2"
				>
					More about me
					<span>
						<MoveRight />
					</span>
				</button>
			</div>
			<div className="flex-1">
				<Mapper
					listFor="about-me"
					items={details}
					className="grid grid-cols-2 gap-4 min-h-[16em]"
				>
					{(item) => (
						<div className="flex gap-4">
							<div className="bg-gray-100 w-15 h-15 rounded-full grid place-items-center flex-1">
								<item.icon size={35} className="text-gray-600" />
							</div>
							<div className="flex-6 space-y-2">
								<h2>{item.label}</h2>
								<p className="text-gray-500 text-sm">{item.desc}</p>
							</div>
						</div>
					)}
				</Mapper>
			</div>
		</div>
	);
}
