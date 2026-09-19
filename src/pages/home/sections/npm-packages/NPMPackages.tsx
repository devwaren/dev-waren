import { Mapper } from "@dev-waren/react-form-kit";
import { ExternalLink, Form, Leaf } from "lucide-react";

const packages = [
	{
		name: "@dev-waren/react-form-kit",
		description:
			"A flexible form management and validation toolkit for React applications.",
		technologies: [
			"React",
			"TypeScript",
			"Zod",
			"@tanstack/react-form",
			"formik",
			"react-hook-form",
		],
		npm: "https://www.npmjs.com/package/@dev-waren/react-form-kit",
		github: "#",
		icon: Form,
	},
	{
		name: "@dev-waren/mongodb",
		description:
			"A server-only structured MongoDB utility layer for modern backend applications.",
		technologies: ["MongoDB", "Node.js", "TypeScript"],
		npm: "https://www.npmjs.com/package/@dev-waren/mongodb",
		github: "#",
		icon: Leaf,
	},
	// {
	// 	name: "@dev-waren/vanilla-ts",
	// 	description:
	// 		"A lightweight serverless single-page application built with TypeScript and a modern utility-first design system.",
	// 	technologies: ["TypeScript", "Tailwind CSS"],
	// 	npm: "#",
	// 	github: "#",
	// 	icon: IceCreamCone,
	// },
];

export default function NpmPackages() {
	return (
		<section className="border-t border-gray-200 pt-8">
			<div className="mb-12 flex items-end justify-between">
				<div>
					<p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
						Open Source
					</p>

					<h2 className="max-w-xl text-4xl font-medium tracking-tight text-gray-900">
						Tools built for developers.
					</h2>

					<p className="mt-4 max-w-lg text-gray-500">
						Reusable packages and utilities designed to simplify modern web
						application development.
					</p>
				</div>

				<a
					href="https://www.npmjs.com/~dev-waren"
					className="hidden items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900 md:flex"
				>
					View npm profile
					<ExternalLink size={15} />
				</a>
			</div>

			<Mapper
				listFor="packages"
				items={packages}
				className="divide-y divide-gray-200 border-y border-gray-200"
			>
				{(pkg) => (
					<div
						key={pkg.name}
						className="group grid gap-6 py-8 md:grid-cols-[1fr_1.5fr_auto] md:items-center"
					>
						<div className="flex items-center gap-3">
							<div className="flex size-10 items-center justify-center rounded-lg bg-gray-100">
								<pkg.icon size={18} className="text-gray-700" />
							</div>

							<h3 className="font-mono text-sm font-medium text-gray-900">
								{pkg.name}
							</h3>
						</div>

						<div>
							<p className="max-w-lg text-sm leading-6 text-gray-500">
								{pkg.description}
							</p>

							<div className="mt-3 flex flex-wrap gap-2">
								{pkg.technologies.map((technology) => (
									<span key={technology} className="text-xs text-gray-400">
										{technology}
									</span>
								))}
							</div>
						</div>

						<div className="flex gap-4 text-sm">
							<a
								href={pkg.npm}
								className="text-gray-500 transition hover:text-gray-900"
							>
								npm ↗
							</a>

							<a
								href={pkg.github}
								className="text-gray-500 transition hover:text-gray-900"
							>
								GitHub ↗
							</a>
						</div>
					</div>
				)}
			</Mapper>
		</section>
	);
}
