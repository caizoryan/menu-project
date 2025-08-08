import express from "express"
import expressWs from "express-ws"
import cors from "cors"

import process from "process"
import path from "path"

import watch from "node-watch"

import fs from "fs"

watch('./', {
	filter: (f) => {
		if (f.includes("#")) return false
		else return true
	},
	recursive: true
}, function (evt, name) {
		updateSockets("")
	});

const app = express()
expressWs(app)

app.use(cors())

let sockets = {}

app.ws('/data', function (ws, req) {
	console.log('socket connected')
	let uid = Math.random() * Date.now()
	sockets[uid] = ws

	ws.on('message', function (msg) {
		console.log(msg)
		Object.keys(sockets).forEach((key) => {
			sockets[key].send("connected")
		})
	});
});
app.use(express.static('.'))


let port = 7462
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

function updateSockets(code) {
	Object.keys(sockets).forEach((key) => {
		sockets[key].send(code)
	})
}
