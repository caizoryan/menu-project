import {Scale,dpi} from "./scale.js"
import {JARS} from "./menu_items.js"
import * as Type from "./menu.js"

let s = new Scale(dpi)

export let structure={
	page_width: s.inch(8),
	page_height: s.inch(5.5),

	margin: {
		top: s.em(2),
		bottom: s.em(3),
		inside: s.em(1),
		outside: s.em(4),
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
		size: s.em(7),
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
		size: s.em(1),
		axis: "horizontal",
		color: "#E4D1C3",
		direction: 1,
		page: 3
	},
	{
		size: s.em(-3),
		axis: "vertical",
		color: "#E4D1C3",
		direction: 1,
		page: 3
	},
	{
		size: s.em(1),
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
		size: s.em(7),
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
		size: s.em(7),
		axis: "horizontal",
		color: "#eee",
		direction: 1,
		page: 9
	},
	{
		size: s.em(2),
		axis: "vertical",
		color: "#eee",
		direction: 1,
		page: 9
	},
]

export let style = {
	title: [
		["font_family", "GapSansBlack"],
		["length", ["column_width", 7]],
		["font_size", ["point", 28]],
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
		["Header",
			["text", "Menu"],
			["height", ["em", 12]],
			["x", ["em", 12 * 4]],
			["y", ["hangline", 3]],
			["rotation", 90]
			//["color", "#0000ffaa"]
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

		// ["TextFrame",
		// 	["text", "PAGE: " + (num)],
		// 	["height", ["em", 12]],
		// 	["x", ["em", 3]],
		// 	["y", ["hangline", 3]],
		// 	["rotation", 90]
		// ],

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
let jars = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Jars"],
			["height", ["em", 12]],
			["x", ["em", 12 * 4]],
			["y", ["hangline", 3]],
			["rotation", 90]
		],

		["TextFrame",
		 ["text", JARS.items.map((item) => "+:item " + item.title + "\n" + "+:description " + item.description).join("\n\n")],
			["height", ["em", 24]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 3]],
			["length", ["column_width", 6]]
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
			["x", ["em", 12*3]],
			["y", ["em", 1]],
		],
	]
})
let sandwiches = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Sandwiches"],
			["height", ["em", 12]],
			["x", ["em", 12*2.8]],
			["y", ["em", 1]],
		],
	]
})

let mains = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Mains"],
			["height", ["em", 12]],
			["x", ["em", 12*3]],
			["y", ["em", 1]],
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
			["x", ["em", 12 * 4]],
			["y", ["hangline", 3]],
			["rotation", 90]
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
		page_number_spread(8),
		burger(10),
		mains(12),
		page_number_spread(14),
		page_number_spread(16),
		page_number_spread(18),
		page_number_spread(20),
	]
}
