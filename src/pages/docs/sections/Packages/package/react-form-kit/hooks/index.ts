import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const useFormHook = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const documentationRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			tl.from(headerRef.current, {
				opacity: 0,
				y: 35,
				duration: 0.8,
			}).from(
				contentRef.current,
				{
					opacity: 0,
					y: 25,
					duration: 0.7,
				},
				"-=0.45",
			);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		if (!documentationRef.current) return;

		gsap.fromTo(
			documentationRef.current,
			{
				opacity: 0,
				y: 18,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.45,
				ease: "power3.out",
			},
		);
	}, []);

	const animateDocumentation = () => {
		if (!documentationRef.current) return;

		gsap.fromTo(
			documentationRef.current,
			{
				opacity: 0,
				y: 18,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.45,
				ease: "power3.out",
			},
		);
	};

	return {
		sectionRef,
		headerRef,
		contentRef,
		documentationRef,
		animateDocumentation,
	};
};
