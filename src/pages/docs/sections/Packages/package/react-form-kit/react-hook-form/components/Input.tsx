import { useInput } from "@dev-waren/react-form-kit/hook-form";
import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
	name: string;
};

export function Input(props: InputProps) {
	const { showError, error, register } = useInput(props.name);

	return (
		<div className="py-1">
			<input
				className="text-sm border w-full px-4 py-2 rounded-md"
				{...register}
				{...props}
			/>
			{showError && (
				<p className="text-red-600 text-xs px-4 py-2 border border-red-400 bg-red-100 mt-2 rounded-md">
					{error}
				</p>
			)}
		</div>
	);
}
