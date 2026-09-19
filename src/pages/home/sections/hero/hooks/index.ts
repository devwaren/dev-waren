import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroGSAP = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const actionsRef = useRef<HTMLDivElement>(null);
	const portraitRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const hero = heroRef.current;
		const content = contentRef.current;
		const description = descriptionRef.current;
		const actions = actionsRef.current;
		const portrait = portraitRef.current;

		if (!hero || !content || !description || !actions || !portrait) {
			return;
		}

		const ctx = gsap.context(() => {
			const heading = content.querySelector(".hero-heading");

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: hero,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});

			// Heading
			timeline.fromTo(
				heading,
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
				},
			);

			// Description
			timeline.fromTo(
				description,
				{
					opacity: 0,
					y: 30,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
				},
				"-=0.55",
			);

			// Buttons
			timeline.fromTo(
				actions,
				{
					opacity: 0,
					y: 25,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power3.out",
				},
				"-=0.4",
			);

			// Portrait
			timeline.fromTo(
				portrait,
				{
					opacity: 0,
					x: 80,
					scale: 1.05,
				},
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1.1,
					ease: "power3.out",
				},
				"-=0.8",
			);

			// Subtle floating effect after entrance
			gsap.to(portrait, {
				y: -8,
				duration: 3,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
			});
		}, hero);

		return () => ctx.revert();
	}, []);

	return {
		heroRef,
		contentRef,
		descriptionRef,
		actionsRef,
		portraitRef,
	};
};
