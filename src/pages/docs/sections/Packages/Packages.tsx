import { Mapper } from "@dev-waren/react-form-kit";
import { ArrowUpRight } from "lucide-react";
import { usePackagesGSAP } from "./hooks";

const packages = [
	{
		name: "react-form-kit",
		description: "Reusable form utilities for modern React applications.",
		version: "v1.5.7",
		category: "React",
		includes: ["form kits", "Zod", "Zustand"],
	},
	{
		name: "mongodb",
		description: "Typed MongoDB utilities for Server Only applications.",
		version: "v1.0.38",
		category: "Database",
		includes: ["Mongodb"],
	},
];

export default function Packages() {
	const { sectionRef, headerRef, descriptionRef, listRef } = usePackagesGSAP();

	return (
		<section
			ref={sectionRef}
			id="packages"
			className="py-16 dark:border-neutral-800 dark:bg-neutral-950"
		>
			<div>
				<div
					ref={headerRef}
					className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
				>
					<div>
						<p className="package-header mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
							Open Source
						</p>

						<h2 className="package-header text-5xl font-medium tracking-tighter text-neutral-950 dark:text-white">
							Packages
						</h2>
					</div>

					<p
						ref={descriptionRef}
						className="max-w-sm text-sm leading-6 text-neutral-500"
					>
						Reusable tools and libraries built to support modern development
						workflows.
					</p>
				</div>

				<div ref={listRef}>
					<Mapper
						listFor="packages"
						items={packages}
						className="divide-y divide-neutral-100 dark:divide-neutral-800 dark:border-neutral-800"
					>
						{(pkg, i) => (
							<a
								key={pkg.name}
								href={`docs/package=${pkg.name}`}
								className="package-row group flex flex-col gap-6 py-8 transition md:flex-row md:items-center md:justify-between"
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
												<span
													key={item}
													className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-400 dark:border-neutral-800"
												>
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
			</div>
		</section>
	);
}
