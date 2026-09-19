import { ArrowUpRight, Terminal } from "lucide-react";
import { assets } from "#/assets/index.ts";
import { useHeroGSAP } from "./hooks";

export default function Hero() {
	const {
		heroRef,
		identityRef,
		labelRef,
		titleRef,
		descriptionRef,
		actionsRef,
		ringLargeRef,
		ringSmallRef,
	} = useHeroGSAP();

	return (
		<section
			ref={heroRef}
			className="relative flex min-h-168 items-center overflow-hidden border-b border-neutral-100 px-6 dark:border-neutral-800 dark:bg-neutral-950"
		>
			<div className="flex flex-col md:flex-row items-center space-y-8 justify-between py-8">
				<div className="flex-1">
					<div ref={identityRef} className="mb-8 flex items-center gap-3">
						<div className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
							<img
								src={assets.devlogo}
								alt="Developer logo"
								width={22}
								height={22}
							/>
						</div>

						<div>
							<p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
								@dev-waren
							</p>

							<p className="text-xs text-neutral-500">
								Developer tools & open-source packages
							</p>
						</div>
					</div>

					<p
						ref={labelRef}
						className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500"
					>
						Documentation
					</p>

					<h1
						ref={titleRef}
						className="text-3xl sm:text-5xl font-medium tracking-[-0.06em] text-neutral-950 md:text-7xl lg:text-8xl dark:text-white"
					>
						Tools for building
						<br />
						<span className="text-neutral-400">better software.</span>
					</h1>

					<p
						ref={descriptionRef}
						className="mt-8 max-w-xl text-sm md:text-lg leading-6 md:leading-8 text-neutral-500"
					>
						Explore a collection of reusable packages, utilities, and
						developer-focused tools built to make modern applications simpler
						and more reliable.
					</p>

					<div ref={actionsRef} className="mt-10 flex flex-wrap gap-3 text-sm">
						<a
							href="#packages"
							className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-5 py-3 font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950"
						>
							Explore packages
							<ArrowUpRight
								size={16}
								className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							/>
						</a>

						<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 font-mono text-xs text-neutral-500 dark:border-neutral-800">
							<Terminal size={14} />
							npm packages
						</div>
					</div>
				</div>

				<div className="flex-1">
					<img
						src={assets.box}
						alt="box"
						className="size-full object-contain drop-shadow-[0_24px_20px_rgba(0,0,0,0.18)]"
					/>
				</div>
			</div>

			<div
				ref={ringLargeRef}
				className="pointer-events-none absolute -bottom-32 -right-32 size-112 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 z-[-1]"
			/>

			<div
				ref={ringSmallRef}
				className="pointer-events-none absolute -bottom-20 -right-20 size-80 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 z-[-1]"
			/>

			<div
				ref={ringLargeRef}
				className="pointer-events-none absolute -top-32 -left-32 size-112 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 z-[-1]"
			/>

			<div
				ref={ringSmallRef}
				className="pointer-events-none absolute -top-20 -left-20 size-80 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 z-[-1]"
			/>
		</section>
	);
}
