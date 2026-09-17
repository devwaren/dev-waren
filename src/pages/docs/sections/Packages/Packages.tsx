import { Mapper } from "@dev-waren/react-form-kit";
import { ArrowUpRight } from "lucide-react";

const packages = [
	{
		name: "@dev-waren/react-form-kit",
		description: "Reusable form utilities for modern React applications.",
		version: "v1.4.19",
		category: "React",
		includes: ["form kits", "Zod", "Zustand"],
	},
	{
		name: "@dev-waren/mongodb",
		description: "Typed MongoDB utilities for Server Only applications.",
		version: "v1.0.0",
		category: "Database",
		includes: ["Mongodb"],
	},
	{
		name: "@dev-waren/vanilla-ts",
		description: "Single Page application for vanilla typescript",
		version: "v1.0.0",
		category: "Framework",
		includes: ["Typescript", "Tailwindcss"],
	},
];

export default function Packages() {
	return (
		<section
			id="packages"
			className="border-t border-neutral-200 bg-neutral-50 px-6 py-32 dark:border-neutral-800 dark:bg-neutral-950"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
					<div>
						<p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
							Open Source
						</p>

						<h2 className="text-5xl font-medium tracking-tighter text-neutral-950 dark:text-white">
							Packages
						</h2>
					</div>

					<p className="max-w-sm text-sm leading-6 text-neutral-500">
						Reusable tools and libraries built to support modern development
						workflows.
					</p>
				</div>

				<Mapper
					listFor="packages"
					items={packages}
					className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800"
				>
					{(pkg, i) => (
						<a
							key={pkg.name}
							href={`https://www.npmjs.com/package/${pkg.name}`}
							className="group flex flex-col gap-6 py-8 transition md:flex-row md:items-center md:justify-between"
						>
							<div className="flex items-start gap-6">
								<span className="pt-1 font-mono text-xs text-neutral-400">
									0{i + 1}
								</span>

								<div>
									<div className="flex flex-wrap items-center gap-3">
										<h3 className="font-mono text-base font-medium text-neutral-900 transition group-hover:text-neutral-500 dark:text-neutral-100">
											{pkg.name}
										</h3>

										<span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-400 dark:border-neutral-800">
											{pkg.category}
										</span>
									</div>

									<p className="mt-2 text-sm text-neutral-500">
										{pkg.description}
									</p>

									<Mapper
										listFor="package includes"
										items={pkg.includes}
										className="space-x-4 py-2"
									>
										{(item) => (
											<span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-400 dark:border-neutral-800">
												{item}
											</span>
										)}
									</Mapper>
								</div>
							</div>

							<div className="flex items-center gap-6 pl-10 md:pl-0">
								<span className="font-mono text-xs text-neutral-400">
									{pkg.version}
								</span>

								<ArrowUpRight
									size={18}
									className="text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
								/>
							</div>
						</a>
					)}
				</Mapper>
			</div>
		</section>
	);
}
