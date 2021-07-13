import { generateMonth } from "./generateMonth"

describe("p2p-calendar.generateMonth", () => {
	it("2020 Jan", () => {
		const data = generateMonth("2021-07-01")
		expect(data).toEqual([
			["", "", "", "1", "2", "3", "4"],
			["5", "6", "7", "8", "9", "10", "11"],
			["12", "13", "14", "15", "16", "17", "18"],
			["19", "20", "21", "22", "23", "24", "25"],
			["26", "27", "28", "29", "30", "31", "1"],
			["2", "3", "4", "5", "6", "7", "8"],
		])
	})
})
