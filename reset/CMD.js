const { exec } = require("child_process")
const { argv } = require("process")
module.exports = class CMD {
    static reset() {
        const port_number = argv[2]
        try {
            exec(`netstat -ano | findstr :${port_number}`, (error, stdout, stderr) => {
                try {
                    const port = stdout.split("      ")[4].split(" ")[1].replace(/(\r\n|\n|\r)/gm, "")
                    exec(`taskkill /PID ${port} /F`, (error, stdout, stderr) => {
                        console.log(stdout.split(".")[0].replace(".", "") + ` from port ${port_number}.`)
                    })
                } catch (e) {
                    console.log(`Port ${port_number} is not in use`)
                }
            })
        } catch (e) {
            console.log(`Port ${port} is not in use`)
        }
    }
}