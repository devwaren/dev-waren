import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import {
	About,
	GetInTouch,
	Hero,
	NpmPackages,
	SelectedProjects,
	Technologies,
} from "./sections";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		const ctx = gsap.context(() => {
			const sections = gsap.utils.toArray<HTMLElement>("section");

			sections.forEach((section, index) => {
				gsap.fromTo(
					section,
					{
						opacity: 0,
						y: 60,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: section,
							start: "top 85%",
							end: "top 50%",
							toggleActions: "play none none reverse",
						},
						delay: index === 0 ? 0 : 0.05,
					},
				);
			});
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="space-y-8 pt-4">
			<Hero />
			<SelectedProjects />
			<NpmPackages />
			<Technologies />
			<About />
			<GetInTouch />
		</div>
	);
}
