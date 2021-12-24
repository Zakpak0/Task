const childprocess = require("child_process")
const fs = require("fs")
const path = require("path")
const process = require("process")
fs.readFile(`${path.join(__dirname, "./paths.json")}`, "utf-8", (err, paths) => {
    let bookmark_path = JSON.parse(paths).chrome_bookmarks
    let pathfrom = `"${bookmark_path}"`
    let pathto = path.join(__dirname, 'Bookmarks.json')
    let called_workflow = `${process.argv.slice(3).toString().trim().replaceAll(",", "")}`
    childprocess.exec(`copy ${pathfrom} ${pathto}`, (complete) => {
        fs.readFile(pathto, "utf-8", (err, contents) => {
            if (err) {
                console.log(`
                
    Please add your bookmarks path to paths
    Please write as follows:
    add chrome_bookmarks path=PATH
    
    `)
            }
            let bookmarks = JSON.parse(contents).roots.other.children
            let bookmark_folders = []

            bookmarks.map((child) => {
                if (child.type == 'folder') {
                    bookmark_folders.push({ name: child.name, folder: child.children })
                }
            })
            JSON.stringify(bookmark_folders)
            fs.writeFile(pathto, JSON.stringify(bookmark_folders), (data) => {
                fs.readFile(pathto, "utf-8", (err, contents) => {
                    let parsed_contents = JSON.parse(contents)
                    parsed_contents.map((workflow) => {
                        if (workflow.name.toLowerCase().replaceAll(" ", "") == called_workflow.toLowerCase()) {
                            let pages = workflow.folder.map((page) => {
                                return page.url
                            })
                            return childprocess.exec(`chrome --new-window ${pages.join(" ")}`)
                        }
                    })
                })
            })
        })
    })
})