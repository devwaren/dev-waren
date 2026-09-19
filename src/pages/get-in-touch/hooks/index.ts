import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGetInTouchGSAP = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const labelRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const socialsRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const ctx = gsap.context(() => {
			const label = labelRef.current;
			const title = titleRef.current;
			const description = descriptionRef.current;
			const socials = socialsRef.current;

			if (!label || !title || !description || !socials) {
				return;
			}

			const socialItems = socials.querySelectorAll("a");

			/*
			 * Initial state
			 */
			gsap.set(label, {
				opacity: 0,
				x: -30,
			});

			gsap.set(title, {
				opacity: 0,
				y: 70,
			});

			gsap.set(description, {
				opacity: 0,
				y: 35,
			});

			gsap.set(socialItems, {
				opacity: 0,
				y: 25,
			});

			/*
			 * Entrance timeline
			 */
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			});

			timeline
				.to(label, {
					opacity: 1,
					x: 0,
					duration: 0.6,
					ease: "power3.out",
				})
				.to(
					title,
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out",
					},
					"-=0.3",
				)
				.to(
					description,
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
					},
					"-=0.55",
				)
				.to(
					socialItems,
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						stagger: 0.1,
						ease: "power3.out",
					},
					"-=0.35",
				);
		}, section);

		return () => ctx.revert();
	}, []);

	return {
		sectionRef,
		labelRef,
		titleRef,
		descriptionRef,
		socialsRef,
	};
};
