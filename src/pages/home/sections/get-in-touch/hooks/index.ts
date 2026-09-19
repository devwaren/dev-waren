import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGetInTouchGSAP = () => {
	const sectionRef = useRef<HTMLElement>(null);

	const labelRef = useRef<HTMLParagraphElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);

	const buttonRef = useRef<HTMLAnchorElement>(null);
	const planeRef = useRef<HTMLDivElement>(null);
	const glowRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const ctx = gsap.context(() => {
			const label = labelRef.current;
			const title = titleRef.current;
			const description = descriptionRef.current;
			const button = buttonRef.current;
			const plane = planeRef.current;
			const glow = glowRef.current;

			if (!label || !title || !description || !button || !plane || !glow) {
				return;
			}

			/*
			 * Set initial state explicitly.
			 * This prevents the elements from already being visible
			 * before ScrollTrigger starts.
			 */
			gsap.set([label, title, description, button], {
				opacity: 0,
				y: 40,
			});

			gsap.set(plane, {
				opacity: 0,
				x: 100,
				y: 80,
				rotation: -90,
				scale: 0.7,
			});

			gsap.set(glow, {
				opacity: 0,
				scale: 0.5,
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 85%",
					toggleActions: "play none none reverse",
					once: false,
				},
			});

			tl.to(label, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: "power3.out",
			})
				.to(
					title,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					"-=0.35",
				)
				.to(
					description,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					"-=0.4",
				)
				.to(
					button,
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.35",
				)
				.to(
					plane,
					{
						opacity: 1,
						x: 0,
						y: 0,
						rotation: -45,
						scale: 1,
						duration: 1,
						ease: "power3.out",
					},
					"-=0.6",
				)
				.to(
					glow,
					{
						opacity: 1,
						scale: 1,
						duration: 1,
						ease: "power2.out",
					},
					"-=0.8",
				);

			ScrollTrigger.refresh();
		}, section);

		return () => {
			ctx.revert();
		};
	}, []);

	return {
		sectionRef,
		labelRef,
		titleRef,
		descriptionRef,
		buttonRef,
		planeRef,
		glowRef,
	};
};
