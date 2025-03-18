import { useTime } from "../hooks/use-time";
import { CustomCounter } from "./custom-counter";

export function InfoComponent() {
	const time = useTime();
	return (
		<CustomCounter value={time} size='lg' />
	)
}
