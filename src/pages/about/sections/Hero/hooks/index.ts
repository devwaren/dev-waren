import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const useHeroGSAP = () => {
	const portraitRef = useRef<HTMLDivElement>(null);
	const grayscaleRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const portrait = portraitRef.current;
		const grayscale = grayscaleRef.current;
		const line = lineRef.current;

		if (!portrait || !grayscale || !line) return;

		const ctx = gsap.context(() => {
			const state = { angle: 225 };

			gsap.to(state, {
				angle: 585, // 225 + 360°
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
		}, portrait);

		return () => ctx.revert();
	}, []);

	return { portraitRef, grayscaleRef, lineRef };
};
