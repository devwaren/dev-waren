import { cn } from "@dev-waren/react-form-kit";
import type React from "react";

type InfiniteSliderProps = React.ComponentProps<"div"> & {
	children: React.ReactNode;
	gap?: number;
	speed?: number;
	speedOnHover?: number;
	reverse?: boolean;
};

export function InfiniteSlider({
	children,
	className,
	gap = 32,
	speed = 60,
	speedOnHover,
	reverse = false,
	...props
}: InfiniteSliderProps) {
	const duration = 1000 / speed;
	const hoverDuration = speedOnHover ? 1000 / speedOnHover : duration;

	return (
		<div
			{...props}
			className={cn("group relative flex w-full overflow-hidden", className)}
		>
			<div
				className={cn(
					"flex w-max shrink-0 animate-infinite-slider",
					reverse && "shimmer-reverse",
				)}
				style={
					{
						"--gap": `${gap}px`,
						"--duration": `${duration}s`,
						"--hover-duration": `${hoverDuration}s`,
					} as React.CSSProperties
				}
			>
				<div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
					{children}
				</div>

				<div
					aria-hidden="true"
					className="flex shrink-0 items-center"
					style={{ gap: `${gap}px` }}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
