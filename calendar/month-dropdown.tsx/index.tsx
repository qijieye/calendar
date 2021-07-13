import { Component, h, Listen, Prop } from "@stencil/core"
import { Date } from "isoly"

@Component({
	tag: "p2p-calendar-month-dropdown",
	styleUrl: "style.css",
	scoped: true,
})
export class monthDropdown {
	@Prop({ mutable: true }) date: Date = Date.now()
	@Prop({ mutable: true }) dropdown = true
	@Listen("monthChanged")
	onMonthChanged(event: CustomEvent<Date>) {
		this.date = event.detail
		this.dropdown = !this.dropdown
	}
	@Listen("monthSelected")
	onMonthSelected(event: CustomEvent<Date>) {
		this.date = event.detail
	}

	render() {
		return [
			<div>{this.date.substring(0, 4)}</div>,
			<button onClick={() => (this.dropdown = !this.dropdown)}>
				{Date.parse(this.date).toLocaleString("default", { month: "long" })}
			</button>,
			<ul class={this.dropdown ? "dropdown" : ""}>
				<month-button></month-button>
			</ul>,
		]
	}
}
