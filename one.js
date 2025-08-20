import { Scale, DPI } from "./scale.js"
import { BENEDICTS,TOASTS, EGGS, JARS, SANDWICHES, BURGETS, SUPERBOWLS, MAIN_PLATTERS, PANCAKES, DESSERTS } from "./menu_items.js"
import * as Type from "./menu.js"

let fonts = {
	aktiv: "aktiv-grotesk",
	ouma: "ouma-devanagari"
}

let s = new Scale(DPI)

export let wood = {
	width: s.inch(5.5 * 2),
	height: s.inch(7),
}

export let tag_hooks = {
	"+:title": {
		font_weight: 200,
		font_family: "stolzl",
		font_size: s.point(16),
		leading: s.point(20)
	},
	"+:comment": {},
	"+:symbol": {
		font_weight: 100,
		font_family: "stolzl",
		font_size: s.point(9),
		leading: s.point(9.5)
	},

	"+:subtitle-big": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(15),
		leading: s.point(16),
		font_style: "ITALIC",
		color: "#222"
	},
	"+:subtitle": {
		font_weight: 600,
		font_family: "freight-macro-pro",
		font_size: s.point(10),
		leading: s.point(12),
		font_style: "ITALIC",
	},
	"+:additional": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(8),
		leading: s.point(8),
	},

	"+:additional-italic": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(9),
		leading: s.point(8),
		font_style: "ITALIC",
	},

	"+:price": {
		font_family: "aktiv-grotesk",
		font_weight: "500",
		leading: s.point(9)
	},

	"+:item": {
		font_family: "stolzl",
		font_weight: "400",
		font_size: s.point(8.5),
		leading: s.point(9.5)
	},

	"+:hide": {
		color: "#ffffff00",
	},

	"+:description": {
		font_family: "freight-micro-pro",
		font_size: s.point(7.5),
		color: "#444",
		leading: s.point(9.2)
	}

}


export let structure = {
	page_width: s.inch(8),
	page_height: s.inch(5.5),

	margin: {
		top: s.em(2),
		bottom: s.em(2),
		inside: s.em(1),
		outside: s.em(2),
	},

	columns: 8,
	gutter: s.point(6),
	hanglines: [
		s.em(.5),
		s.em(1),
		s.em(3),
		s.em(6),
		s.em(9),
		s.em(12),
		s.em(15),
		s.em(18),
		s.em(21),
		s.em(24),
		s.em(27),
		s.em(30),
		s.em(31),
		s.em(31.5),
	],
}

/**@type {Type.Offset[]}*/
export let offsets = [
	{
		size: s.em(6),
		axis: "horizontal",
		color: "#eee",
		direction: 1,
		page: 1
	},
	{
		size: s.em(-4.5),
		axis: "vertical",
		color: "#eee",
		direction: 1,
		page: 1
	},
	{
		size: s.em(2),
		axis: "horizontal",
		color: "#E4D1C3",
		direction: 1,
		page: 3
	},
	{
		size: s.em(-4.5),
		axis: "vertical",
		color: "#E4D1C3",
		direction: 1,
		page: 3
	},
	{
		size: s.em(2),
		axis: "horizontal",
		color: "#Eee",
		direction: 1,
		page: 5
	},
	{
		size: s.em(0),
		axis: "vertical",
		color: "#eee",
		direction: 1,
		page: 5
	},
	{
		size: s.em(6),
		axis: "horizontal",
		color: "#E4D1C3",
		direction: 1,
		page: 7
	},
	{
		size: s.em(4.5),
		axis: "vertical",
		color: "#E4D1C3",
		direction: 1,
		page: 7
	},
	{
		size: s.em(2),
		axis: "horizontal",
		color: "#eee",
		direction: 1,
		page: 9
	},
	{
		size: s.em(-4.5),
		axis: "vertical",
		color: "#eee",
		direction: 1,
		page: 9
	},
]

export let style = {
	title: [
		["font_family", fonts.ouma],
		["length", ["column_width", 7]],
		["font_size", ["point", 28]],
		["color", "#444"],
		["color", "#666"],
		["leading", ["point", 38]],
	],

	body: [
		["font_family", "Oracle"],
		["font_size", ["point", 9]],
		["leading", ["point", 12]],
		["font_weight", 500],
		["color", "black"],
	],

	metadata: [
		["font_family", "OracleTriple"],
		["font_size", ["point", 7]],
		["font_weight", 300],
		["leading", ["point", 12]],
		["color", "#ff00ff"],
	],

	label: [
		["font_family", "OracleTriple"],
		["font_size", ["point", 18]],
		["font_weight", 600],
		["leading", ["point", 12]],
		["color", "#00000066"],
	]
}
let introduction = ``

// x------------------x
// *Header: Cover
// x------------------x
let cover = {
	title: "",
	content: [

		["TextFrame",
		 ["text", "+:additional-italic 7am to 12pm"
		 ],
			["height", ["em", 12]],
			["length", ["em", 12]],
			["x", ["inch", 5.5]],
			["y", ["hangline", 6]],
		 ["rotation", 90],
		],

		["TextFrame",
		 ["text",
			"+:title Brickhaus Cafe "
			+ "+:subtitle-big breakfast menu"
		 ],
			["height", ["em", 12]],
			["length", ["em", 12]],
			["x", ["inch", 7.5]],
			["y", ["hangline", 6]],
		 ["rotation", 90],
			["color", "#444"]
		],
	]
}
let colophon = {
	title: "",
	content: [
		["TextFrame",
			["text", `COLOPHON`],
			["x", ["verso", 0, "x"]],
			["y", ["hangline", 1]],
			["length", ["column_width", 3]],
			["height", ["em", 25]],
			...style.metadata,
			["font_weight", 600],
			["font_size", ["point", 18]],
		],
		["TextFrame",
			["text", `This booklet was typeset using ABC Dinamo's Oracle Family and GapSans designed by GrandChaos9000. GapSans is a fork of Sani Trixie Sans Typeface.
The booklet was designed in a custom tool developed for an independent study conducted for reasons noted in the contents of the booklet. The tool was written in vanilla javascript.
`],
			["x", ["verso", 3, "x"]],
			["y", ["hangline", 1]],
			["length", ["column_width", 5]],
			["height", ["em", 25]],
			...style.body
		],
	]
}
let prices = [399, 599, 587, 289, 499]
let random_price = () => prices[Math.floor(Math.random() * prices.length)]

let page_number_spread = (num) => ({
	title: "",
	content: [
		// ["TextFrame",
		// 	["text", "P:" + num],
		// 	["x", ["verso", 0, "x"]],
		// 	["y", ["hangline", 1]],
		// 	["length", ["column_width", 3]],
		// 	["height", ["em", 25]],
		// 	...style.title,
		// 	["font_weight", 600],
		// 	["font_size", ["point", 18]],
		// ],

		["TextFrame",
			["font_family", fonts.ouma],
			["text", "" + (num)],
			["height", ["em", 12]],
			["x", ["em",  1]],
			["y", ["hangline", 1]],
		],

		["TextFrame",
			["font_family", fonts.ouma],
			["text", "" + (num+1)],
			["height", ["em", 12]],
			["x", ["recto",  7.7, "x"]],
			["y", ["hangline", 0]],
		],

		// ["TextFrame",
		// 	["text", "PAGE: " + (num + 1)],
		// 	["height", ["em", 12]],
		// 	["x", ["em", 12 * 4]],
		// 	["y", ["hangline", 3]],
		// 	["rotation", 90]
		// 	//["color", "#0000ffaa"]
		// ],

		// ["TextFrame",
		// 	["text", "P:" + (num + 1)],
		// 	["x", ["recto", 7, "x"]],
		// 	["y", ["hangline", 1]],
		// 	["length", ["column_width", 3]],
		// 	["height", ["em", 25]],
		// 	...style.title,
		// 	["font_weight", 600],
		// 	["font_size", ["point", 18]],
		// ],
	]
})
let format_item = (item) => "+:item " +
	item.title
	+
(item.symbols ?
			" +:symbol "
			+ item.symbols.map(e => "("+e+")").join(" ")
			+ "\n" 
			: " ")
	+ 
	(
		item.description ?
			"\n" +
			"+:description "
			+ item.description
			+ " "
			// + "\n"
			: " "
	)
	+ "+:price //" + random_price()
	+ "\n"

let jars = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Jars"],
			["height", ["em", 12]],
			["x", ["em", 12 * 4]],
			["y", ["hangline", 2]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
				"+:title " + JARS.title
				+ " "
				+ "+:hide >>>>>>> +:subtitle-big " + JARS.subtitle + "\n\n"
				+ "+:additional " + JARS.additional
			],
			["height", ["em", 24]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 6.5]],
			["length", ["column_width", 5]]
		],

		["TextFrame",
			["text", JARS.items.map(format_item).join("\n\n")],
			["height", ["em", 24]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 3]],
			["length", ["column_width", 5.5]]
		]
	]
})

let eggs = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Eggs"],
			["height", ["em", 12]],
			["x", ["em", 12 * 3]],
			["y", ["em", -.5]],
		],

		["TextFrame",
		 ["text", "+:title "+EGGS.title+ " +:hide >>>>>>>>>>>> +:subtitle-big " + EGGS.subtitle],
			["height", ["em", 38]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 2]],
			["length", ["column_width", 6]]
		],

		["TextFrame",
		 ["text", EGGS.items.slice(0,6).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 6]]
		],

		["TextFrame",
		 ["text", EGGS.items.slice(6).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", 2, 'x']],
			["y", ["hangline", 2.9]],
			["length", ["column_width", 6]]
		],


		["TextFrame",
			["text", "+:title " + BENEDICTS.title],
			["height", ["em", 24]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 5.5]],
			["length", ["column_width", 6.3]]
		],

		["TextFrame",
			["text", BENEDICTS.items.map(format_item).join("\n\n")],
			["height", ["em", 24]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 6.5]],
			["length", ["column_width", 5.5]]
		]
	]
})
let sandwiches = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Sandwiches"],
			["height", ["em", 12]],
			["x", ["em", 12 * 2.8]],
			["y", ["em", 1]],
		],

		["TextFrame",
		 ["text", "+:subtitle-big " + SANDWICHES.subtitle],
			["height", ["em", 38]],
			["x", ["recto", 3, "x"]],
			["y", ["em", 5.5]],
			["length", ["column_width", 4]]
		],
		["TextFrame",
		 ["text", SANDWICHES.non_items.map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", 2, 'x']],
			["y", ["hangline", 2]],
			["length", ["column_width", 5.5]]
		],

		["TextFrame",
			["text", SANDWICHES.veg_items.map(format_item).join("\n\n")],
			["height", ["em", 24]],
			["x", ["recto", 3, 'x']],
			["y", ["hangline", 5.5]],
			["length", ["column_width", 5.5]]
		]
	]
})

let toast = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Toasts"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["verso", 0, "x"]],
			["y", ["hangline", 1]],
		],

		["TextFrame",
		 ["text", TOASTS.items.slice(0,6).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 4.3]],
			["length", ["column_width", 5.5]]
		],

		["TextFrame",
		 ["text", TOASTS.items.slice(6).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", 2, 'x']],
			["y", ["hangline", 1.5]],
			["length", ["column_width", 5.3]]
		],
	]
})

let burger = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Burgers & Toasts"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["em", 12 * 4]],
			["y", ["hangline", 3]],
			["rotation", 90]
		],

		["TextFrame",
		 ["text",
			"+:title " + BURGETS.title+
			" +:subtitle-big " + BURGETS.subtitle
		 ],
			["height", ["em", 38]],
			["x", ["verso", 0, "x"]],
			["y", ["em", 5.5]],
			["length", ["column_width", 6]]
		],

		["TextFrame",
		 ["text", BURGETS.items.slice(0,3).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", 0, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 5.8]],
		],

		["TextFrame",
		 ["text", BURGETS.items.slice(3).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 6]],
			["length", ["column_width", 4.5]]
		],
	]
})

let mains = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Mains"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["em", 12 * 4]],
			["y", ["hangline", 3]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
				"+:title " + MAIN_PLATTERS.title
			],
			["height", ["em", 24]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 2.5]],
			["length", ["column_width", 4.5]]
		],

		["TextFrame",
		 ["text", MAIN_PLATTERS.items.slice(0,3).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 0, 'x']],
			["length", ["column_width", 5.7]],
			["y", ["hangline", 4.8]],
		],

		["TextFrame",
		 ["text", MAIN_PLATTERS.items.slice(3).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 0.5, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 4]],
		],

	]
})

let superbowls = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "SUPERBOWLS"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["recto", 2, "x"]],
			["y", ["hangline", 10.5]],
		],

		["TextFrame",
			["text",
				"+:title " + SUPERBOWLS.title
				+ " +:additional " + SUPERBOWLS.additional
			],
			["height", ["em", 24]],
			["x", ["verso", 2, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 4.5]]
		],


		["TextFrame",
		 ["text", SUPERBOWLS.items.slice(0,4).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 2, 'x']],
			["length", ["column_width", 5.7]],
			["y", ["hangline", 4.8]],
		],

		["TextFrame",
		 ["text", SUPERBOWLS.items.slice(4).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 2, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 4.8]],
		],
	]
})

let pancakes = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "PANCAKES & WAFFLES"],
			["height", ["em", 22]],
			["length", ["em", 28]],
			["font_size", ["em", 1.8]],
			["x", ["recto", .5, "x"]],
			["y", ["hangline", 10.5]],
		],

		["TextFrame",
			["text",
				"+:title " + PANCAKES.title +
			 " +:hide >>>>>>>>>>> +:subtitle-big " + PANCAKES.subtitle],
		 ["height", ["em", 24]],
			["x", ["verso", 0.5, 'x']],
			["y", ["hangline", 3]],
			["length", ["column_width", 6.5]]
		],


		["TextFrame",
		 ["text", PANCAKES.items.slice(0,3).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 1, 'x']],
			["length", ["column_width", 5.7]],
			["y", ["hangline", 5.8]],
		],

		["TextFrame",
		 ["text", PANCAKES.items.slice(3).map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 1, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 4.8]],
		],
	]
})
let desserts = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "DESSERT"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["inch", 7.9]],
			["font_size", ["em", 1.8]],
			["y", ["hangline", 9.2]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
			 "+:title " + DESSERTS.title.split("(").join(" +:symbol (") +
			 " +:hide >>>>>>>>>>> >>>>>>>> +:subtitle-big " + DESSERTS.subtitle],
		 ["height", ["em", 24]],
			["x", ["verso", 0.5, 'x']],
			["length", ["column_width", 8.5]],
			["y", ["hangline", 5-1]],
		],


		["TextFrame",
		 ["text", DESSERTS.items.slice(0,4).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", .5, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 6.4-1]],
		],

		["TextFrame",
		 ["text", DESSERTS.items.slice(4).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", .5, 'x']],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 6.65-1]],
		],
	]
})
// x-----------------------x
// *Header: Data
// x-----------------------x
export let data = {
	contents: [
		cover,
		jars(2),
		eggs(4),
		sandwiches(6),
		toast(8),
		burger(10),
		mains(12),
		superbowls(14),
		pancakes(16),
		desserts(18),
		page_number_spread(20),
	]
}
