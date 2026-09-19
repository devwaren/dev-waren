import { Mapper } from "@dev-waren/react-form-kit";
import { assets } from "#/assets";
import { useHeroGSAP } from "./hooks";

const stats = [
	{
		label: "4+",
		text: "Years experience",
	},
	{
		label: "Full Stack",
		text: "Development Focus",
	},
	{
		label: "PH",
		text: "Based in",
	},
];

export default function Hero() {
	const { heroRef, contentRef, portraitRef, grayscaleRef, lineRef } =
		useHeroGSAP();

	return (
		<section
			ref={heroRef}
			className="mx-auto flex min-h-[20em] items-center py-8"
		>
			<div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
				{/* Content */}
				<div ref={contentRef}>
					<p className="hero-item text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
						About me
					</p>

					<h2 className="hero-item mt-6 max-w-xl text-4xl font-medium leading-[1.15] tracking-tight text-gray-900 md:text-5xl">
						Building thoughtful experiences through design and engineering.
					</h2>

					<div className="hero-item mt-10 max-w-xl">
						<p className="text-lg leading-8 text-gray-600">
							I’m Waren, a full-stack developer focused on building thoughtful
							digital experiences, scalable web applications, and reliable
							client–server systems.
						</p>

						<p className="mt-6 leading-7 text-gray-500">
							My work sits between interface design and backend architecture,
							creating products that feel simple to use while remaining
							structured, maintainable, and performant underneath.
						</p>
					</div>

					<Mapper
						listFor="status"
						items={stats}
						className="hero-item mt-12 grid grid-cols-2 gap-8  pt-6 sm:grid-cols-3"
					>
						{(item) => (
							<div>
								<p className="text-2xl font-medium text-gray-900">
									{item.label}
								</p>
								<p className="mt-1 text-sm text-gray-400">{item.text}</p>
							</div>
						)}
					</Mapper>
				</div>

				{/* Portrait */}
				<div className="flex justify-center lg:justify-end">
					<div
						ref={portraitRef}
						className="relative w-full max-w-md overflow-hidden"
					>
						<img
							src={assets.devw}
							alt="Waren — Full-stack developer"
							className="block h-auto w-full object-contain"
						/>

						<div
							ref={grayscaleRef}
							className="grayscale-overlay pointer-events-none absolute inset-0"
						>
							<img
								src={assets.devw}
								alt="dev waren portrait"
								aria-hidden="true"
								className="block size-full object-contain grayscale"
								width={120}
								height={120}
								loading="lazy"
							/>
						</div>

						<div
							ref={lineRef}
							className="pointer-events-none absolute left-1/2 top-1/2 h-[145%] w-px origin-center -translate-x-1/2 -translate-y-1/2 bg-gray-400/60"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
