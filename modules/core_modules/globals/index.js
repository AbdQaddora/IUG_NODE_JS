// -----------------GLOBAL----------------
console.log(global)
// -----------------PROCESS----------------
console.log(process.env)
//! info about environment
console.log(process.argv)
//! info about current process running files
/*[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\university\\semester 2\\Node js\\Code\\IUG_NODE_JS\\modules\\core_modules\\globals'
]*/
console.log(process.memoryUsage())
//! info about current memory (RAM) status
/*{
    rss: 27533312,
    heapTotal: 6369280,
    heapUsed: 5712920,
    external: 429451,
    arrayBuffers: 17378
}*/

