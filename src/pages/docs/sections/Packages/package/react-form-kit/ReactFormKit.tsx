import { Mapper } from "@dev-waren/react-form-kit";
import { ExternalLink, Heart, Star } from "lucide-react";
import { useState } from "react";
import { Formik } from "./formik/Formik";
import { useFormHook } from "./hooks";
import { ReactHookForm } from "./react-hook-form/react-hook-form";

const references = [
	{
		name: "Zod",
		description: "TypeScript-first schema validation",
		href: "https://zod.dev",
	},
	{
		name: "React Hook Form",
		description: "Performant, flexible form state management",
		href: "https://react-hook-form.com",
	},
	{
		name: "Formik",
		description: "Build forms in React with ease",
		href: "https://formik.org",
	},
];

const stacks = {
	"react-hook-form": {
		label: "React Hook Form",
		Component: ReactHookForm,
		ecosystem: ["React Hook Form", "Zod", "TypeScript"],
	},
	formik: {
		label: "Formik",
		Component: Formik,
		ecosystem: ["Formik", "Zod", "TypeScript"],
	},
} as const;

type StackKey = keyof typeof stacks;

export default function ReactFormKit() {
	const [formStack, setFormStack] = useState<StackKey>("react-hook-form");

	const {
		sectionRef,
		headerRef,
		contentRef,
		documentationRef,
		animateDocumentation,
	} = useFormHook();

	const selectedStack = stacks[formStack];
	const Documentation = selectedStack.Component;

	const handleStackChange = (key: StackKey) => {
		setFormStack(key);

		requestAnimationFrame(() => {
			animateDocumentation();
		});
	};

	return (
		<section ref={sectionRef} className="mx-auto max-w-4xl px-6 py-24">
			<header ref={headerRef} className="mb-20">
				<p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
					Package Documentation
				</p>

				<h1 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] text-neutral-950 sm:text-5xl dark:text-white">
					Get Started with React Form Kit
				</h1>

				<p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
					Simple, reusable form utilities for building type-safe, maintainable
					React forms.
				</p>

				<div className="mt-8 flex flex-wrap items-center gap-4">
					<span className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
						@dev-waren/react-form-kit
					</span>

					<a
						href="https://www.npmjs.com/package/@dev-waren/react-form-kit"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-950 dark:hover:text-white"
					>
						View on npm
						<ExternalLink size={13} />
					</a>
				</div>

				<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
					<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
						Built around
					</p>

					{selectedStack.ecosystem.map((item) => (
						<span key={item} className="text-sm text-neutral-500">
							{item}
						</span>
					))}
				</div>
			</header>

			<div ref={contentRef} className="space-y-20">
				{/* Stack selector */}
				<div className="flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
							Integration
						</p>

						<p className="mt-2 text-sm text-neutral-500">
							Choose your form library
						</p>
					</div>

					<div className="flex gap-1 rounded-lg border border-neutral-200 p-1 dark:border-neutral-800">
						{(Object.keys(stacks) as StackKey[]).map((key) => {
							const isActive = formStack === key;

							return (
								<button
									key={key}
									type="button"
									onClick={() => handleStackChange(key)}
									aria-pressed={isActive}
									className={[
										"rounded-md px-3 py-2 text-sm transition hover:bg-gray-200 hover:text-black cursor-pointer",
										isActive
											? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
											: "text-neutral-500 hover:text-neutral-950 dark:hover:text-white",
									].join(" ")}
								>
									{stacks[key].label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Dynamic documentation */}
				<div ref={documentationRef}>
					<Documentation />
				</div>

				{/* Support */}
				<section className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
					<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
						<div>
							<p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
								Support the project
							</p>

							<h2 className="text-lg font-medium tracking-tight text-neutral-950 dark:text-white">
								Enjoying React Form Kit?
							</h2>

							<p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
								A GitHub star helps the project gain visibility and reach more
								developers.
							</p>
						</div>

						<a
							href="https://github.com/devwaren/devwaren-react-form-kit"
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
				<footer className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
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
						React Form Kit is part of the open-source React ecosystem. made with{" "}
						<Heart size={14} />
					</div>
				</footer>
			</div>
		</section>
	);
}
