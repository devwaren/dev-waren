import type { z } from "@dev-waren/react-form-kit";
import { useFormikFormSettings } from "@dev-waren/react-form-kit/formik";
import { useRef, useState } from "react";
import { schema } from "./validations";

const useLoginForm = () => {
	const [output, setOutput] = useState<z.infer<typeof schema.login>>();

	const clearTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const form = useFormikFormSettings({
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
