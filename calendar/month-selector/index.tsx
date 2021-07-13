import { Component, Event, EventEmitter, h, Prop, Watch } from "@stencil/core"
import { Date } from "isoly"

@Component({
	tag: "p2p-calendar-month-selector",
	styleUrl: "style.css",
	scoped: true,
})
export class MonthSelector {
	@Prop({ mutable: true }) date: Date = Date.now()
	@Event() monthSelected: EventEmitter<Date>
	@Watch("date")
	dateChanged(next: Date) {
		this.monthSelected.emit(next)
	}
	render() {
		return [
			<button onClick={() => this.adjustMonth(-1)}>
				<smoothly-icon name="chevron-back" size="small"></smoothly-icon>
			</button>,
			<p2p-calendar-month-dropdown date={this.date}></p2p-calendar-month-dropdown>,
			<button onClick={() => this.adjustMonth(1)}>
				<smoothly-icon name="chevron-forward" size="small"></smoothly-icon>
			</button>,
		]
	}

	private adjustMonth(delta: number) {
		const date = Date.parse(this.date)
		date.setMonth(date.getMonth() + delta)
		this.date = Date.create(date)
		console.log("adjustmonth calling")
	}
}
