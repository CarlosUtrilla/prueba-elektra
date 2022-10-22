import { useEffect } from "react";

export default function createInputChange({
	ref,
	onChange
}) {
	useEffect(() => {
		ref &&
			ref.current &&
			ref.current.addEventListener("handleChange", onChange);
		return () => {
			ref.current.removeEventListener("handleChange", onChange);
		};
	});
	const handleOnChange = (value, isCheck) => {
		if (isCheck) {
			ref.current.checked = value;
		}
		ref.current.value = value;
		const event = new Event("handleChange");
		ref.current.dispatchEvent(event);
	};
	return {
		handleOnChange
	};
}
