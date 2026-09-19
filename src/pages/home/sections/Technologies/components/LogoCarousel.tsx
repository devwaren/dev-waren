import { Mapper } from "@dev-waren/react-form-kit";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import {
	SiFramer,
	SiGo,
	SiGsap,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiTanstack,
	SiTypescript,
} from "react-icons/si";

const logos = [
	{ name: "React", icon: SiReact },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "TanStack", icon: SiTanstack },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "GSAP", icon: SiGsap },
	{ name: "Framer", icon: SiFramer },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Go", icon: SiGo },
];

export default function LogoCarousel() {
	const trackRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const track = trackRef.current;
		const wrapper = wrapperRef.current;

		if (!track || !wrapper) return;

		const ctx = gsap.context(() => {
			const items = gsap.utils.toArray<HTMLElement>(".marquee-item");

			const firstSet = items.slice(0, logos.length);

			const distance = firstSet.reduce(
				(total, item) => total + item.offsetWidth,
				0,
			);

			const tween = gsap.to(track, {
				x: -distance,
				duration: 32,
				ease: "none",
				repeat: -1,
				modifiers: {
					x: gsap.utils.unitize((value) => parseFloat(value) % distance),
				},
			});

			const pause = () => gsap.to(tween, { timeScale: 0.15, duration: 0.5 });
			const play = () => gsap.to(tween, { timeScale: 1, duration: 0.8 });

			wrapper.addEventListener("mouseenter", pause);
			wrapper.addEventListener("mouseleave", play);

			return () => {
				tween.kill();
				wrapper.removeEventListener("mouseenter", pause);
				wrapper.removeEventListener("mouseleave", play);
			};
		}, wrapper);

		return () => ctx.revert();
	}, []);

	return (
		<section className="relative w-full overflow-hidden py-16">
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

			<div className="relative mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-10 flex flex-col items-center text-center">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-px w-8 bg-border" />

						<span className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground">
							Technology Ecosystem
						</span>

						<div className="h-px w-8 bg-border" />
					</div>

					<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						Built with{" "}
						<span className="text-muted-foreground">modern technologies</span>
					</h2>

					<p className="mt-3 max-w-md text-sm text-muted-foreground">
						A carefully selected stack for building fast, scalable, and
						maintainable digital experiences.
					</p>
				</div>

				{/* Glass marquee container */}
				<div
					ref={wrapperRef}
					className="group relative overflow-hidden rounded-2xl  bg-background/40 py-8 shadow-[0_0_80px_-30px_hsl(var(--primary)/0.25)] backdrop-blur-xl"
				>
					{/* Inner highlight */}
					<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/4" />

					{/* Left edge fade */}
					<div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-linear-to-r from-background via-background/80 to-transparent" />

					{/* Right edge fade */}
					<div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-linear-to-l from-background via-background/80 to-transparent" />

					{/* Moving track */}
					<div ref={trackRef}>
						<Mapper
							listFor="logo"
							items={[...logos, ...logos]}
							className="flex w-max items-center gap-5"
							as="div"
						>
							{(item) => (
								<div className="marquee-item group/item flex shrink-0 items-center">
									<div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/50 px-5 py-3.5 text-muted-foreground/60 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/6 hover:text-foreground hover:shadow-[0_0_25px_-8px_hsl(var(--primary)/0.5)]">
										<item.icon className="size-6 transition-transform duration-300 group-hover/item:scale-110" />

										<span className="whitespace-nowrap text-sm font-semibold tracking-tight">
											{item.name}
										</span>
									</div>
								</div>
							)}
						</Mapper>
					</div>
				</div>

				{/* Bottom detail */}
				<div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
					<span className="size-1.5 rounded-full bg-emerald-500/70" />
					Modern stack · Production ready
				</div>
			</div>
		</section>
	);
}
