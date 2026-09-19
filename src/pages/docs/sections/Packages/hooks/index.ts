import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const usePackagesGSAP = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const ctx = gsap.context(() => {
			const header = headerRef.current;
			const description = descriptionRef.current;
			const list = listRef.current;

			if (!header || !description || !list) return;

			const headerItems = header.querySelectorAll(".package-header");

			const rows = list.querySelectorAll(".package-row");

			/*
			 * Initial state
			 */
			gsap.set(headerItems, {
				opacity: 0,
				y: 35,
			});

			gsap.set(description, {
				opacity: 0,
				y: 25,
			});

			gsap.set(rows, {
				opacity: 0,
				y: 45,
			});

			/*
			 * Scroll animation
			 */
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			});

			timeline
				.to(headerItems, {
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.1,
					ease: "power3.out",
				})
				.to(
					description,
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.45",
				)
				.to(
					rows,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						stagger: 0.15,
						ease: "power3.out",
					},
					"-=0.25",
				);
		}, section);

		return () => ctx.revert();
	}, []);

	return {
		sectionRef,
		headerRef,
		descriptionRef,
		listRef,
	};
};
