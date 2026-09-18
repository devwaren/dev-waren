import { Mapper } from "@dev-waren/react-form-kit";
import { ExternalLink, Heart, Star } from "lucide-react";
import { CodeBlock } from "#/shared/components/index.ts";
import { block } from "./code/index";

const references = [
	{
		name: "Node.js",
		description: "JavaScript runtime environment",
		href: "https://nodejs.org",
	},
	{
		name: "@tanstack/start",
		description: "Full-stack React framework for type-safe applications",
		href: "https://tanstack.com/start",
	},
	{
		name: "Next.js",
		description: "React framework for full-stack web applications",
		href: "https://nextjs.org",
	},
];

export default function Mongodb() {
	return (
		<section className="mx-auto max-w-4xl px-6 py-24">
			<p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
				Package Documentation
			</p>

			<h1 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] text-neutral-950 sm:text-5xl dark:text-white">
				Get Started with Mongodb
			</h1>

			<p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
				A server-only MongoDB utility for securely connecting to your database,
				managing collections, and running database operations without exposing
				server-side logic to the client.
			</p>

			<div className="mt-8 flex flex-wrap items-center gap-4">
				<span className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
					@dev-waren/mongodb
				</span>

				<a
					href="https://www.npmjs.com/package/@dev-waren/mongodb"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-950 dark:hover:text-white"
				>
					View on npm
					<ExternalLink size={13} />
				</a>
			</div>

			<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-200 pt-6 dark:border-neutral-800 mb-8">
				<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
					Built around
				</p>

				<span className="text-sm text-neutral-500">mongodb</span>
			</div>

			<Mapper listFor="terminals" items={block} className="space-y-14" as="ul">
				{(item) => (
					<li>
						<div className="mb-7">
							<div className="mb-3 flex items-center gap-3">
								<span className="font-mono text-xs text-neutral-400">
									{item.id}
								</span>

								<span className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
							</div>

							<h2 className="text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
								{item.label}
							</h2>

							<p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
								{item.desc}
							</p>
						</div>

						<CodeBlock file={item.file}>{item.code}</CodeBlock>
					</li>
				)}
			</Mapper>

			<section className="border-t border-neutral-200 pt-10 dark:border-neutral-800 space-y-4">
				<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
					<div>
						<p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
							Support the project
						</p>

						<h2 className="text-lg font-medium tracking-tight text-neutral-950 dark:text-white">
							Enjoying Mongodb utility?
						</h2>

						<p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
							A GitHub star helps the project gain visibility and reach more
							developers.
						</p>
					</div>

					<a
						href="https://github.com/devwaren/devwaren-mongodb"
						target="_blank"
						rel="noreferrer"
						className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
					>
						<Star size={15} />
						Star on GitHub
						<ExternalLink size={13} />
					</a>
				</div>
			</section>

			{/* References */}
			<footer className="border-t border-neutral-200 pt-10 dark:border-neutral-800 mt-8">
				<div className="mb-7">
					<p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
						References
					</p>

					<h2 className="text-lg font-medium tracking-tight text-neutral-950 dark:text-white">
						Built on established tools
					</h2>

					<p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
						React Form Kit builds upon reliable tools from the React and
						TypeScript ecosystem.
					</p>
				</div>

				<Mapper
					listFor="references"
					items={references}
					className="grid gap-3 sm:grid-cols-3 text-black"
					as="div"
				>
					{(reference) => (
						<a
							key={reference.name}
							href={reference.href}
							target="_blank"
							rel="noreferrer"
							className=" group flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-4 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900/50"
						>
							<div>
								<p className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
									{reference.name}
								</p>

								<p className="mt-1 text-xs text-neutral-500">
									{reference.description}
								</p>
							</div>

							<ExternalLink
								size={14}
								className="text-neutral-400 transition group-hover:text-neutral-900 dark:group-hover:text-white"
							/>
						</a>
					)}
				</Mapper>

				<div className="mt-8 flex items-center gap-2 text-xs text-neutral-400">
					mongodb utiliy kit is part of the open-source server utility
					ecosystem. made with <Heart size={14} />
				</div>
			</footer>
		</section>
	);
}
