import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroGSAP = () => {
	const heroRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const portraitRef = useRef<HTMLDivElement>(null);
	const grayscaleRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const hero = heroRef.current;
		const content = contentRef.current;
		const portrait = portraitRef.current;
		const grayscale = grayscaleRef.current;
		const line = lineRef.current;

		if (!hero || !content || !portrait || !grayscale || !line) {
			return;
		}

		const ctx = gsap.context(() => {
			/*
			 * Hero entrance animation
			 */
			const heroItems = gsap.utils.toArray<HTMLElement>(".hero-item");

			gsap.fromTo(
				heroItems,
				{
					opacity: 0,
					y: 40,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: hero,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				},
			);

			/*
			 * Portrait entrance
			 */
			gsap.fromTo(
				portrait,
				{
					opacity: 0,
					x: 50,
					scale: 0.96,
				},
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: hero,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				},
			);

			/*
			 * Existing rotating split animation
			 */
			const state = {
				angle: 225,
			};

			gsap.to(state, {
				angle: 585,
				duration: 8,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
				onUpdate: () => {
					grayscale.style.setProperty("--split-angle", `${state.angle}deg`);

					gsap.set(line, {
						rotation: state.angle,
					});
				},
			});
		}, hero);

		return () => ctx.revert();
	}, []);

	return {
		heroRef,
		contentRef,
		portraitRef,
		grayscaleRef,
		lineRef,
	};
};
