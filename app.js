const shell = require('shelljs')
var all = shell.ls(`C:\\Users\\${name}\\AppData\\Roaming\\npm\\node_modules`).stdout.split('\n')
all.pop()
all.forEach((element)=>{
    document.body.innerHTML+=`<ul class="npm">${element}</ul>`
})