const fs = require('fs')

let str = ''

for (let index = 1; index < 37; index++) {
  let data = fs.readFileSync(`${index}.md`, { encoding: 'utf-8' })
  if (data !== '#') {
    console.log(`${index}.md:`)
    const arr = data.split('\n\n')
    const title = arr[0].replace('# ', '')
    console.log(title);
    str += `* [${title}](javascript-interview/${index}.md)
    `
  }
}

console.log('----------str----------');

console.log(str);