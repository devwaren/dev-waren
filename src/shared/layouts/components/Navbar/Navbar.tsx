import { Mapper } from "@dev-waren/react-form-kit";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import moment from "moment-timezone";
import { assets } from "#/assets/index.ts";

const links = [
	{
		label: "Home",
		link: "/",
	},
	{
		label: "About",
		link: "/about",
	},
	{
		label: "Docs",
		link: "/docs",
	},
	{
		label: "Projects",
		link: "/projects",
	},
	{
		label: "Get in Touch",
		link: "/get-in-touch",
	},
];

export default function Navbar() {
	const manilaTime = moment().tz("Asia/Manila").format("D MMM — HH:mm z");

	return (
		<div className="border-b border-b-gray-200 p-4 flex items-center justify-between sticky top-0 bg-white z-90">
			<Link to="/" className="flex gap-4">
				<img src={assets.devlogo} alt="dev logo" className="w-8 h-8" />
				<div>
					<p className="text-gray-600 font-semibold lg:text-2xl">
						Waren<span className="text-gray-900">.dev</span>
					</p>
					<p className="text-gray-400 text-xs md:text-sm">{manilaTime}</p>
				</div>
			</Link>
			<Mapper
				listFor="nav-links"
				items={links}
				className="text-gray-500 space-x-4 transition-all duration-500 ease-in hidden md:block"
			>
				{(link) => (
					<Link
						to={link.link}
						className="hover:text-gray-600"
						activeProps={{
							className: "text-gray-900 font-semibold",
						}}
						inactiveProps={{
							className: "text-gray-400",
						}}
					>
						{link.label}
					</Link>
				)}
			</Mapper>

			<button type="button" className="md:hidden">
				<Menu />
			</button>
		</div>
	);
}
