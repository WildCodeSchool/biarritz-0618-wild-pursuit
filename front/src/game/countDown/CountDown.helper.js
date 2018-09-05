export function decomposeToMinutesAndSecs(secs) {
	let divisor_for_minutes = secs % (60 * 60);
	let minutes = Math.floor(divisor_for_minutes / 60);

	let seconds = Math.ceil(divisor_for_minutes % 60);

	let time = {
		minutes,
		seconds,
	};
	return time;
}
