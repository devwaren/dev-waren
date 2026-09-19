import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import moment from "moment-timezone";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Docs", href: "/docs" },
	{ name: "Get in Touch", href: "/get-in-touch" },
];

const socials = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/waren-g-18505b1b7/",
	},
	{
		name: "GitHub",
		href: "https://github.com/devwaren",
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com/rens.34dev",
	},
];

export default function Footer() {
	const year = moment().tz("Asia/Manila").format("YYYY");

	return (
		<footer className="border-t border-gray-200">
			<div className="py-12 ">
				<div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
					<div className="space-y-2">
						<Link
							to="/"
							className="text-xl font-semibold tracking-tight text-gray-900"
						>
							Waren.dev
						</Link>

						<p className="text-sm text-gray-400">
							Building thoughtful digital experiences.
						</p>
					</div>

					<nav
						aria-label="Footer navigation"
						className="flex flex-wrap gap-x-6 gap-y-3"
					>
						{navigation.map(({ name, href }) => (
							<Link
								key={name}
								to={href}
								className="text-sm text-gray-500 transition-colors hover:text-gray-900"
							>
								{name}
							</Link>
						))}
					</nav>
				</div>

				<div className="mt-10 flex flex-col gap-6 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs text-gray-400">
						© {year} Waren.dev. All rights reserved.
					</p>

					<div className="flex items-center gap-5">
						{socials.map(({ name, href }) => (
							<a
								key={name}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-gray-900"
							>
								{name}

								<ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>
						))}

						<button
							type="button"
							onClick={() =>
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								})
							}
							aria-label="Back to top"
							className="ml-2 flex size-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all hover:border-gray-400 hover:text-gray-900"
						>
							<ArrowUp className="size-3.5" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
