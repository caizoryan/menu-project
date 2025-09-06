import { Scale, DPI } from "./scale.js"
import { GOURMENTBITES, SOUPS, BIGEATS, SMALLEATS, PASTA, PIZZA, DIYPIZZA, BENEDICTS,TOASTS, EGGS, SANDWICHES, SLIDERS, SALADS, SUPERBOWLS, MAIN_PLATTERS, PANCAKES, DESSERTS, WAFFLES, FRENCH, BREADTHINGS, NOTE } from "./alldaymenu.js"
import * as Type from "./menu.js"
import { h2 } from "./lib/chowk/monke.js"
export let file = './breakfast.json'

let fonts = {
	aktiv: "aktiv-grotesk",
	ouma: "ouma-devanagari"
}

let s = new Scale(DPI)

export let wood = {
	width: s.inch(6.3 * 2),
	height: s.inch(8.5),
}

export let tag_hooks = {

	"+:title-bold": {
		font_weight: 500,
		font_family: "stolzl",
		font_size: s.point(17),
		leading: s.point(21)
	},
	"+:title": {
		font_weight: 200,
		font_family: "stolzl",
		font_size: s.point(17),
		leading: s.point(21)
	},
	"+:comment": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(9),
		leading: s.point(10),
	},
	"+:symbol": {
		font_weight: 100,
		font_family: "stolzl",
		font_size: s.point(10),
		leading: s.point(10.5)
	},

	"+:subtitle-big": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(16),
		leading: s.point(17),
		font_style: "ITALIC",
		color: "#222"
	},
	"+:subtitle": {
		font_weight: 400,
		font_family: "freight-macro-pro",
		color: "#222",
		font_size: s.point(11),
		leading: s.point(13),
		font_style: "ITALIC",
	},
	"+:additional": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(9),
		leading: s.point(9),
	},

	"+:additional-italic": {
		font_weight: 300,
		font_family: "freight-macro-pro",
		font_size: s.point(10),
		leading: s.point(9),
		font_style: "ITALIC",
	},

	"+:price": {
		font_family: "aktiv-grotesk",
		font_weight: "500",
		leading: s.point(10)
	},

	"+:item": {
		font_family: "stolzl",
		font_weight: "400",
		font_size: s.point(10.5),
		leading: s.point(11)
	},

	"+:hide": {
		color: "#ffffff00",
	},

	"+:description": {
		font_family: "freight-micro-pro",
		font_size: s.point(9),
		color: "#222",
		leading: s.point(10.2)
	},

	"+:toppings": {
		font_family: "freight-micro-pro",
		font_size: s.point(8.5),
		color: "#222",
		leading: s.point(9.9)
	}

}


export let structure = {
	page_width: s.inch(10.5),
	page_height: s.inch(6.5),

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
		s.em(33),
		s.em(36),
		s.em(39),
	],
}

let brown =  "#BF9F83"
let beige = "#E4D1C3"
let offwhite = "#eee"

/**@type {Type.Offset[]}*/
export let offsets = [
	{
		size: s.em(6.5),
		axis: "horizontal",
		color: brown,
		direction: 1,
		page: 1
	},
	{
		size: s.em(-4.5),
		axis: "vertical",
		color: brown,
		direction: 1,
		page: 1
	},
	{
		size: s.em(2),
		axis: "horizontal",
		color:offwhite,
		direction: 1,
		page: 3
	},
	{
		size: s.em(-4.5),
		axis: "vertical",
		color: "#eee",
		direction: 1,
		page: 3
	},
	{
		size: s.em(2),
		axis: "horizontal",
		color: beige,
		direction: 1,
		page: 5
	},
	{
		size: s.em(0),
		axis: "vertical",
		color: "#BF9F83",
		direction: 1,
		page: 5
	},
	{
		size: s.em(6.5),
		axis: "horizontal",
		color:brown,
		direction: 1,
		page: 7
	},
	{
		size: s.em(5),
		axis: "vertical",
		color:brown,
		direction: 1,
		page: 7
	},

	{
		size: s.em(2),
		axis: "horizontal",
		color: offwhite,
		direction: 1,
		page: 9
	},
	{
		size: s.em(-2),
		axis: "horizontal",
		color:beige,
		direction: 1,
		page: 11 
	},

	{
		size: s.em(0),
		axis: "horizontal",
		color:offwhite,
		direction: 1,
		page: 13 
	},
]

export let style = {
	title: [
		["font_family", fonts.ouma],
		["length", ["column_width", 7]],
		["font_size", ["point", 32]],
		["color", "#444"],
		["color", "#666"],
		["leading", ["point", 38]],
	],

	body: [
		["font_family", "Oracle"],
		["font_size", ["point", 11]],
		["leading", ["point", 14]],
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
			["x", ["inch", 7.5]],
			["y", ["hangline", 6]],
		 ["rotation", 90],
		],

		["TextFrame",
		 ["text",
			"+:title-bold Brickhaus Cafe "
			+ "+:subtitle-big breakfast menu"
		 ],
			["height", ["em", 12]],
			["length", ["em", 12]],
			["x", ["inch", 9]],
			["y", ["hangline", 6]],
		 ["rotation", 90],
			["color", "#444"]
		],
	]
}
let prices = [399, 599, 587, 289, 499]
let random_price = () => prices[Math.floor(Math.random() * prices.length)]

let page_number_spread = (num) => ({
	title: "",
	content: [
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
		+ "+:price //" + (item.price ? item.price : random_price())
	+ "\n"

let soups = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		["Header",
			["text", "Soups"],
			["height", ["em", 12]],
			["x", ["em", 12 * 5.25]],
			["y", ["hangline", 2]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
			 "+:title NOTE" + "\n"+
			 NOTE.map((e) => "+:subtitle " + e).join('\n\n')
			],
			["height", ["em", 24]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 10]],
			["length", ["column_width", 4]]
		],

		["TextFrame",
			["text",
			 "+:title " + SOUPS.title + " +:subtitle \n" + "+:subtitle " + SOUPS.subtitle + "\n"
			],
			["height", ["em", 24]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 1.8]],
			["length", ["column_width", 5]]
		],

		["TextFrame",
			["text", SOUPS.items.map(format_item).join("\n\n")],
			["height", ["em", 34]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 5.3]]
		]
	]
})
let salads = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,

		["Header",
			["text", "Toasts / Salads"],
			["height", ["em", 12]],
			["x", ["em", 12 * 3.2]],
			["y", ["em", .2]],
		],
		["TextFrame",
			["text", "+:title " + SALADS.title],
			["height", ["em", 24]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 2.8]],
			["length", ["column_width", 5]]
		],

		["TextFrame",
			["text", SALADS.items.map(format_item).join("\n\n")],
			["height", ["em", 34]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 5.3]]
		],

		["TextFrame",
			["text", "+:title TOASTS"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["recto", 1, "x"]],
			["y", ["hangline", 4.25]],
		],

		["TextFrame",
		 ["text", TOASTS.items.map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 5]],
			["length", ["column_width", 4.5]]
		],

	]
})

let eggs = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,
		// ["Header",
		// 	["text", "Eggs"],
		// 	["height", ["em", 12]],
		//  ["x", ["recto", 1.5, "x"]],
		// 	["y", ["em", -.5]],
		// ],

		["TextFrame",
		 ["text", "+:title "+ EGGS.title+ " +:hide >>>>>>>>>> +:subtitle-big " + EGGS.subtitle],
			["height", ["em", 38]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 2]],
			["length", ["column_width", 5.5]]
		],

		["TextFrame",
		 ["text", EGGS.items.slice(0,7).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 5]]
		],

		["TextFrame",
		 ["text", EGGS.items.slice(7).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", 1.5, 'x']],
			["y", ["hangline", 1.85]],
			["length", ["column_width", 4]]
		],


		["TextFrame",
		 ["text", "+:title " + BENEDICTS.title.split("(").join(' +:symbol (') +  " +:subtitle \n+:subtitle-big " + BENEDICTS.subtitle],
			["height", ["em", 24]],
			["x", ["recto", 1.5, 'x']],
			["y", ["hangline", 6.2]],
			["length", ["column_width", 5.3]]
		],

		["TextFrame",
			["text", BENEDICTS.items.map(format_item).join("\n\n")],
			["height", ["em", 24]],
			["x", ["recto", 1.5, 'x']],
			["y", ["hangline", 8]],
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
			["x", ["em", 12 * 3.4]],
			["y", ["em", .2]],
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
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 3.5]],
			["length", ["column_width", 4.5]]
		],

		["TextFrame",
			["text", SANDWICHES.veg_items.map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 3, 'x']],
			["y", ["hangline", 5]],
			["length", ["column_width", 5]]
		]
	]
})

let mains = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,

		["Header",
			["text", "Platters"],
			["height", ["em", 22]],
			["length", ["em", 28]],
			["x", ["em", 12 * 5.25]],
			["y", ["hangline", 3]],
			["rotation", 90]
		],

		["TextFrame",
			["text", "+:title " + GOURMENTBITES.title.toUpperCase()],
			["height", ["em", 22]],
			["length", ["column_width", 3.5]],
			["x", ["recto", 1, "x"]],
			["y", ["em", 4.8]],
		],

		["TextFrame",
		 ["text", GOURMENTBITES.items.map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["recto", 1, 'x']],
			["y", ["hangline", 4]],
			["length", ["column_width", 4]] // 
		],

		["TextFrame",
			["text",
				"+:title " + MAIN_PLATTERS.title
			],
			["height", ["em", 24]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 2.5]],
			["length", ["column_width", 4.5]]
		],

		["TextFrame",
		 ["text", MAIN_PLATTERS.items.map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 1, 'x']],
			["length", ["column_width", 4.5]],
			["y", ["hangline", 4]],
		],


	]
})

let bigeats = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,

		["Header",
			["text", "Big Eats"],
			["height", ["em", 22]],
			["length", ["em", 28]],
			["x", ["em", 12 * 5.25]],
			["y", ["hangline", 5.2]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
				"+:title " + BIGEATS.title
			],
			["height", ["em", 24]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 1.5]],
			["length", ["column_width", 3.6]]
		],

		["TextFrame",
		 ["text", BIGEATS.veg.map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["verso", 1, 'x']],
			["length", ["column_width", 3.9]],
			["y", ["hangline", 3]],
		],

		["TextFrame",
		 ["text", BIGEATS.nonveg.slice(0,5).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["verso", 7.8, 'x']],
			["length", ["column_width", 3.7]],
			["y", ["hangline", 3]],
		],

		["TextFrame",
		 ["text", BIGEATS.nonveg.slice(5).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["recto",3.7, 'x']],
			["length", ["column_width", 3.6]],
			["y", ["hangline", 3]],
		],
	]
})

let smalleats = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,

		["Header",
			["text", "World Tour Bites"],
			["height", ["em", 22]],
			["length", ["em", 28]],
			["x", ["em", 12 * 5.25]],
			["y", ["hangline", 3.5]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
			 "+:title " + SMALLEATS.title + " +:subtitle\n+:symbol (veg) " 
			],
			["height", ["em", 24]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 2.5]],
			["length", ["column_width", 3.6]]
		],

		["TextFrame",
		 ["text", SMALLEATS.veg.slice(0,5).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["verso", 1, 'x']],
			["length", ["column_width", 3.8]],
			["y", ["hangline", 4.5]],
		],

		["TextFrame",
		 ["text", SMALLEATS.veg.slice(5, 10).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["recto", 0, 'x']],
			["length", ["column_width", 3.5]],
			["y", ["hangline", 4.5]],
		],

		["TextFrame",
		 ["text", SMALLEATS.veg.slice(10).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["recto", 3.9, 'x']],
			["length", ["column_width", 3.4]],
			["y", ["hangline", 4.5]],
		],

		// ["TextFrame",
		//  ["text", BIGEATS.nonveg.map(format_item).join("\n\n")],
		// 	["height", ["em", 32]],
		// 	["x", ["recto", 4, 'x']],
		// 	["length", ["column_width", 4.9]],
		// 	["y", ["hangline", 0]],
		// ],
	]
})
let smalleatsnonveg = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,

		["TextFrame",
			["text",
			 "+:title " + SMALLEATS.title + " +:subtitle\n+:symbol (non veg) " 
			],
			["height", ["em", 24]],
			["x", ["verso", 0, 'x']],
			["y", ["hangline", 2.5]],
			["length", ["column_width", 3.6]]
		],

		["TextFrame",
		 ["text", SMALLEATS.nonveg.slice(0,5).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["verso", 0, 'x']],
			["length", ["column_width", 3.8]],
			["y", ["hangline", 4.5]],
		],

		["TextFrame",
		 ["text", SMALLEATS.nonveg.slice(5, 11).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["verso", 4, 'x']],
			["length", ["column_width", 3.6]],
			["y", ["hangline", 4.5]],
		],

		["TextFrame",
		 ["text", SMALLEATS.nonveg.slice(11).map(format_item).join("\n\n")],
			["height", ["em", 32]],
			["x", ["recto", 1, 'x']],
			["length", ["column_width", 3.6]],
			["y", ["hangline", 4.5]],
		],

		// ["TextFrame",
		//  ["text", BIGEATS.nonveg.map(format_item).join("\n\n")],
		// 	["height", ["em", 32]],
		// 	["x", ["recto", 4, 'x']],
		// 	["length", ["column_width", 4.9]],
		// 	["y", ["hangline", 0]],
		// ],
	]
})

let superbowls = (num) => ({
	title: "",
	content: [
		...page_number_spread(num).content,


		["TextFrame",
		 ["text",
			"+:title " + SLIDERS.title+
			" +:subtitle-big " + SLIDERS.subtitle
		 ],
			["height", ["em", 38]],
			["x", ["verso", .5, "x"]],
			["y", ["em", 4]],
			["length", ["column_width", 4]]
		],

		["TextFrame",
		 ["text", SLIDERS.items.slice(0,4).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", .5, "x"]],
			["length", ["column_width", 3.8]],
			["y", ["hangline", 4.3]],
		],

		["TextFrame",
		 ["text", SLIDERS.items.slice(4).map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", 5, "x"]],
			["length", ["column_width", 3.7]],
			["y", ["hangline", 4.5]],
		],


		["Header",
			["text", "SUPERBOWLS"],
			["height", ["em", 22]],
			["length", ["em", 22]],
			["x", ["recto", 2, "x"]],
			["y", ["hangline", 13]],
		],

		["TextFrame",
		 ["text", SUPERBOWLS.items.slice(0,3).map(format_item).join("\n\n")],
			["height", ["em", 30]],
			["x", ["recto", 1, 'x']],
			["length", ["column_width", 3.3]],
			["y", ["hangline", 2.48]],
		],

		["TextFrame",
		 ["text", SUPERBOWLS.items.slice(3).map(format_item).join("\n\n")],
			["height", ["em", 30]],
			["x", ["recto", 4.8, 'x']],
			["length", ["column_width", 3.3]],
			["y", ["hangline", 2.4]],
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
			["font_size", ["em", 2]],
			["x", ["recto", 1.5, "x"]],
			["y", ["hangline", 12.7]],
		],

		["TextFrame",
			["text", "+:title " + PANCAKES.title],
		 ["height", ["em", 24]],
			["x", ["verso", 1, 'x']],
			["y", ["hangline", 4.7]],
			["length", ["column_width", 5.5]]
		],


		["TextFrame",
		 ["text", PANCAKES.items.map(format_item).join("\n\n")],
			["height", ["em", 28]],
			["x", ["verso", 1, 'x']],
			["length", ["column_width", 5.7]],
			["y", ["hangline", 5.8]],
		],

		["TextFrame",
			["text",
				"+:title " + WAFFLES.title ],
		 ["height", ["em", 24]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 8.5]],
			["y", ["hangline", 3.2]],
		],

		["TextFrame",
		 ["text", WAFFLES.items.map(format_item).join("")+
			 "\n+:subtitle " + WAFFLES.subtitle],
			["height", ["em", 28]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 4.1+.2]],
		],

		["TextFrame",
		 ["text", WAFFLES.toppings.map(e => "+:toppings " + e.title).join(", ")],
			["height", ["em", 28]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 5+.15]],
		],

		["TextFrame",
			["text",
				"+:title " + FRENCH.title ],
		 ["height", ["em", 24]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 8.5]],
			["y", ["hangline", 7.8]],
		],

		["TextFrame",
		 ["text", FRENCH.items.map(format_item).join("")+
			 "\n+:subtitle " + FRENCH.subtitle],
			["height", ["em", 28]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 8.7+.2]],
		],

		["TextFrame",
		 ["text", FRENCH.toppings.map(e => "+:toppings " + e.title).join(", ")],
			["height", ["em", 28]],
			["x", ["recto", 1.5, "x"]],
			["length", ["column_width", 5.5]],
			["y", ["hangline", 9.6+.15]],
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
			["x", ["inch", 10.4]],
			["font_size", ["em", 1.8]],
			["y", ["hangline", 11.1]],
			["rotation", 90]
		],

		["TextFrame",
			["text",
			 "+:title " + DESSERTS.title.split("(").join(" +:symbol (") +
			 " +:hide >>>>>>>>>>> >>>>>>>> +:subtitle-big " + DESSERTS.subtitle],
		 ["height", ["em", 24]],
			["x", ["verso", 0.5, 'x']],
			["length", ["column_width", 6.8]],
			["y", ["hangline", 3]],
		],

		["TextFrame",
		 ["text", DESSERTS.items.map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["verso", .5, 'x']],
			["length", ["column_width", 4.5]],
			["y", ["hangline", 4.4]],
		],

		["TextFrame",
			["text",
			 "+:title " + BREADTHINGS.title ],
		 ["height", ["em", 24]],
			["x", ["recto", 0.5, 'x']],
			["length", ["column_width", 8.2]],
			["y", ["hangline", 3]],
		],

		["TextFrame",
		 ["text", BREADTHINGS.items.map(format_item).join("\n\n")],
			["height", ["em", 38]],
			["x", ["recto", .5, 'x']],
			["length", ["column_width", 5]],
			["y", ["hangline", 4.4]],
		],

	]
})
// x-----------------------x
// *Header: Data
// x-----------------------x
export let data = {
	contents: [
		cover,
		soups(2),
		salads(4),
		sandwiches(6),
		eggs(8),
		smalleats(10),
		smalleatsnonveg(12),
		page_number_spread(14),
		page_number_spread(16),
		// toast(8),
		// burger(10),
		mains(18),
		bigeats(20),
		superbowls(22),
		pancakes(24),
		desserts(26),
		page_number_spread(28),
	]
}
