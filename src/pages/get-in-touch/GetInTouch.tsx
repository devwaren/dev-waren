import { ArrowUpRight } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { SiFacebook, SiGithub } from "react-icons/si";

const socials = [
	{
		name: "LinkedIn",
		href: "#",
		icon: LiaLinkedin,
	},
	{
		name: "GitHub",
		href: "#",
		icon: SiGithub,
	},
	{
		name: "Facebook",
		href: "#",
		icon: SiFacebook,
	},
];

export default function GetInTouch() {
	return (
		<section className="flex min-h-[40em] items-center">
			<div className="max-w-4xl space-y-6">
				<div className="flex items-center gap-3">
					<div className="h-px w-10 bg-gray-400" />

					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
						Get In Touch
					</p>
				</div>

				<h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
					Connect, Collaborate
					<br />
					or Just Say <span className="text-gray-400">&quot;Hello&quot;</span>
				</h2>

				<p className="max-w-2xl text-lg leading-relaxed text-gray-400">
					Have a project in mind or simply want to start a conversation?
					I&apos;d love to hear from you.
				</p>

				<nav aria-label="Social links" className="flex flex-wrap gap-3 pt-4">
					{socials.map(({ name, href, icon: Icon }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 rounded-full border border-gray-800 px-5 py-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-gray-600 hover:text-white"
						>
							<Icon className="size-4" />

							<span>{name}</span>

							<ArrowUpRight className="size-3.5 text-gray-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					))}
				</nav>
			</div>
		</section>
	);
}
