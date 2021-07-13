import * as isoly from "isoly"

export function generateMonth(date: isoly.Date): isoly.Date[][] {
	const d = new Date(date)
	d.setDate(1)
	let day = -((d.getDay() + 6) % 7) + 1
	const result: string[][] = []
	for (let row = 0; row < 6; row++) {
		const r = []
		for (let column = 0; column < 7; column++) {
			const d = new Date(date)
			d.setDate(day++)
			r.push(isoly.Date.create(d))
		}
		result.push(r)
	}
	return result
}
