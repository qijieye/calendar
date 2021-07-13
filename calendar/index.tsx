import { Component, Element, h, Listen, Prop } from "@stencil/core"
import { Date } from "isoly"
import { generateMonth } from "./generateMonth"

@Component({
	tag: "p2p-calendar",
	styleUrl: "style.css",
})
export class Calendar {
	@Element() element: HTMLTableRowElement
	@Prop({ mutable: true }) date: Date = Date.now()
	@Listen("monthSelected")
	onMonthSelected(event: CustomEvent<Date>) {
		this.date = event.detail //The detail readonly property of the CustomEvent interface returns any data passed when initializing the event.
	}
	@Listen("monthChanged")
	onMonthChanged(event: CustomEvent<Date>) {
		this.date = event.detail
	}
	render() {
		// eslint-disable-next-line prettierx/options
		return [
			<table>
				<thead>
					<tr>
						<td colSpan={7}>
							<p2p-calendar-month-selector date={this.date}></p2p-calendar-month-selector>
						</td>
					</tr>
				</thead>
				<thead>
					<tr>
						<th>M</th>
						<th>T</th>
						<th>W</th>
						<th>T</th>
						<th>F</th>
						<th>S</th>
						<th>S</th>
					</tr>
				</thead>
				<tbody>
					{generateMonth(this.date).map(week => (
						<tr>
							{week.map(date => (
								<td
									tabindex={1}
									onClick={() => (this.date = date)}
									class={(date == this.date ? ["selected"] : [])
										.concat(...(date == Date.now() ? ["today"] : []))
										.join(" ")}>
									{date.substring(8, 10)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>,
		]
	}
}
