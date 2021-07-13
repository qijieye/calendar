import { Component, Element, Event, EventEmitter, h, Prop, Watch } from "@stencil/core"
import { Date } from "isoly"

@Component({
	tag: "month-button",
	styleUrl: "style.css",
	scoped: true,
})
export class MonthButton {
	@Prop({ mutable: true }) date: Date = Date.now()
	private set month(value: string) {
		const date = Date.parse(this.date)
		date.setMonth(MonthButton.months.indexOf(value))
		this.date = Date.create(date)
	}
	@Element() element: HTMLElement
	@Event() monthChanged: EventEmitter<Date>
	@Watch("date")
	dateChanged(selectedMonth: Date) {
		this.monthChanged.emit(selectedMonth)
	}

	render() {
		return (
			<div>
				{MonthButton.months.map(m => (
					<li>
						<button onClick={() => (this.month = m)}>{m}</button>
					</li>
				))}
			</div>
		)
	}
	private static readonly months: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
}
