import type { z } from "@dev-waren/react-form-kit";
import { useFormSettings } from "@dev-waren/react-form-kit/hook-form";
import { useRef, useState } from "react";
import { schema } from "./validations";

const useLoginForm = () => {
	const [output, setOutput] = useState<z.infer<typeof schema.login>>();

	const clearTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const form = useFormSettings({
		schema: schema.login,

		defaultValues: {
			email: "",
			password: "",
		},

		clearFields: ["email", "password"],

		onSubmit: (data) => {
			setOutput({
				...data,
				password: "***",
			});

			if (clearTimeoutRef.current) {
				clearTimeout(clearTimeoutRef.current);
			}

			clearTimeoutRef.current = setTimeout(() => {
				setOutput(undefined);
			}, 5000);
		},
	});

	return { form, output };
};

export { useLoginForm };
