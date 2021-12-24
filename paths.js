const process = require("process")
const fs = require("fs")
const path = require("path")
const childprocess = require("child_process")
const url = require("url")
let procedure = process.argv.slice(3, 4).toString().replace(",", "").toLowerCase()
let entry = process.argv.slice(4).toString().replace(",", "").split('path=')
let filename = entry[0].toLowerCase()
let filepath = path.resolve(entry[1].toLowerCase())
console.log(filename, filepath)
childprocess.exec(`cd ${filepath}`, (err, res, req) => {
    if (err.message.toLowerCase().trim() !=
        `Command failed: cd ${filepath}
The directory name is invalid.
            `.toLowerCase().trim()) {
        console.log(err.message)
        console.log(`The system cannot find your path please makesure the format is as follows:
    C:\\\\DIR_NAME\\\\SUB_DIR\\\\FILE
        `)
        console.log("What you entered: ", filepath)
    } else {
        fs.readFile(`${filepath}`, 'utf-8', (error, success) => {
            if (error) {
                console.log(error)
                console.log(`The system cannot find your path please makesure the format is as follows:
    C:\\\\DIR_NAME\\\\SUB_DIR\\\\FILE
        `)
                console.log("What you entered: ", filepath)
            }
            if (success) {
                fs.readFile(`${path.join(__dirname, "./paths.json")}`, 'utf-8', (err, contents) => {
                    if (err) console.log(err)
                    let paths = JSON.parse(contents)
                    if (procedure == "add") {
                        console.log(paths)
                        paths[filename] = filepath
                        fs.writeFile(`${path.join(__dirname, "./paths.json")}`, JSON.stringify(paths), (err, new_path_data) => {
                            fs.readFile(`${path.join(__dirname, "./paths.json")}`, 'utf-8', (err, contents) => {
                                console.log("Current Paths:", JSON.parse(contents))
                            })
                        })
                    } else if (procedure == "delete") {
                        delete paths[filename]
                        fs.writeFile(`${path.join(__dirname, "./paths.json")}`, JSON.stringify(paths), (err, new_path_data) => {
                            fs.readFile(`${path.join(__dirname, "./paths.json")}`, 'utf-8', (err, contents) => {
                                console.log("Current Paths:", JSON.parse(contents))
                            })
                        })
                    } else {
                        console.log(`Syntax Error, Please write as follows:
                            add NAME_OF_PATH path =PATH
                            delete NAME_OF_PATH path =PATH
                            `)
                    }
                })
            }
        })
    }
})
