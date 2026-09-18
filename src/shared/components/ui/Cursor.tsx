"use client";

import gsap from "gsap";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface CursorProps {
	size?: number;
	smallSize?: number;
	hoverScale?: number;
}

export const AnimatedCursor: React.FC<CursorProps> = ({
	size = 40,
	smallSize = 10,
	hoverScale = 2.2,
}) => {
	const bigCursorRef = useRef<HTMLDivElement>(null);
	const smallCursorRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const big = bigCursorRef.current;
		const small = smallCursorRef.current;

		if (!big || !small) return;

		gsap.set(big, {
			x: -100,
			y: -100,
			scale: 1,
		});

		gsap.set(small, {
			x: -100,
			y: -100,
		});

		const moveBigX = gsap.quickTo(big, "x", {
			duration: 0.45,
			ease: "power3.out",
		});

		const moveBigY = gsap.quickTo(big, "y", {
			duration: 0.45,
			ease: "power3.out",
		});

		const moveSmallX = gsap.quickTo(small, "x", {
			duration: 0.08,
			ease: "power2.out",
		});

		const moveSmallY = gsap.quickTo(small, "y", {
			duration: 0.08,
			ease: "power2.out",
		});

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			setVisible(true);

			moveSmallX(clientX - smallSize / 2);
			moveSmallY(clientY - smallSize / 2);

			moveBigX(clientX - size / 2);
			moveBigY(clientY - size / 2);
		};

		const handleMouseOver = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			const interactive = target.closest(
				"button, a, [role='button'], input, textarea, select, [data-cursor-hover]",
			);

			gsap.to(big, {
				scale: interactive ? hoverScale : 1,
				duration: 0.35,
				ease: "power3.out",
			});
		};

		const handleMouseLeave = () => {
			setVisible(false);

			gsap.to(big, {
				scale: 1,
				duration: 0.3,
				ease: "power3.out",
			});
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseover", handleMouseOver);
		document.documentElement.addEventListener("mouseleave", handleMouseLeave);

		document.body.classList.add("custom-cursor-active");

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseover", handleMouseOver);
			document.documentElement.removeEventListener(
				"mouseleave",
				handleMouseLeave,
			);

			document.body.classList.remove("custom-cursor-active");

			gsap.killTweensOf(big);
			gsap.killTweensOf(small);
		};
	}, [size, smallSize, hoverScale]);

	return (
		<>
			<div
				ref={bigCursorRef}
				className={`cursor-big ${visible ? "cursor-visible" : "cursor-hidden"}`}
				aria-hidden="true"
			/>

			<div
				ref={smallCursorRef}
				className={`cursor-small ${
					visible ? "cursor-visible" : "cursor-hidden"
				}`}
				aria-hidden="true"
			/>
		</>
	);
};
