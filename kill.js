const childprocess = require("child_process")
const { pid } = require("process")

let child = childprocess.spawnSync('chrome', ["--new-window", "youtube.com"], {
    detached: true,
    stdio: 'ignore',
    windowsHide: false
})
child.
    console.log(pid, child.pid)