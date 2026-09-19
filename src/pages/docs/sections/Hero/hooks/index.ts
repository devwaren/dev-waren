import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroGSAP = () => {
	const heroRef = useRef<HTMLElement>(null);

	const identityRef = useRef<HTMLDivElement>(null);
	const labelRef = useRef<HTMLParagraphElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const actionsRef = useRef<HTMLDivElement>(null);

	const ringLargeRef = useRef<HTMLDivElement>(null);
	const ringSmallRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const hero = heroRef.current;

		if (!hero) return;

		const ctx = gsap.context(() => {
			const identity = identityRef.current;
			const label = labelRef.current;
			const title = titleRef.current;
			const description = descriptionRef.current;
			const actions = actionsRef.current;
			const ringLarge = ringLargeRef.current;
			const ringSmall = ringSmallRef.current;

			if (
				!identity ||
				!label ||
				!title ||
				!description ||
				!actions ||
				!ringLarge ||
				!ringSmall
			) {
				return;
			}

			/*
			 * Initial states
			 */
			gsap.set(identity, {
				opacity: 0,
				y: 25,
			});

			gsap.set(label, {
				opacity: 0,
				y: 25,
			});

			gsap.set(title, {
				opacity: 0,
				y: 60,
			});

			gsap.set(description, {
				opacity: 0,
				y: 35,
			});

			gsap.set(actions, {
				opacity: 0,
				y: 25,
			});

			gsap.set([ringLarge, ringSmall], {
				opacity: 0,
				scale: 0.8,
			});

			/*
			 * Entrance animation
			 */
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: hero,
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
			});

			timeline
				.to(identity, {
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power3.out",
				})
				.to(
					label,
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						ease: "power3.out",
					},
					"-=0.3",
				)
				.to(
					title,
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
						ease: "power3.out",
					},
					"-=0.25",
				)
				.to(
					description,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					"-=0.5",
				)
				.to(
					actions,
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.4",
				)
				.to(
					ringLarge,
					{
						opacity: 1,
						scale: 1,
						duration: 1.2,
						ease: "power2.out",
					},
					"-=1",
				)
				.to(
					ringSmall,
					{
						opacity: 1,
						scale: 1,
						duration: 1,
						ease: "power2.out",
					},
					"-=1",
				);
		}, hero);

		return () => ctx.revert();
	}, []);

	return {
		heroRef,
		identityRef,
		labelRef,
		titleRef,
		descriptionRef,
		actionsRef,
		ringLargeRef,
		ringSmallRef,
	};
};
