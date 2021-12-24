#!/usr/bin/env node
const process = require("process")
console.log(process.argv)
const init = () => {
    try {
        let called_workflow = require(`./${process.argv.slice(2, 3).toString().trim().replaceAll(",", "")}`)
        console.log(called_workflow)
    } catch (err) {
        console.log(err)
        console.log(`./${process.argv.slice(2, 3).toString().trim().replaceAll(",", "")}`)
        console.log("Incorrect option: Please select paths or bookmarks")
    }
}
init()
