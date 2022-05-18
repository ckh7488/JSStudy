const {exec} = require("child_process")

exec("./a.out", (err,stdout,stdin)=>{console.log(stdout)});