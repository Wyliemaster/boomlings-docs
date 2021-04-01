const fs = require('fs')

let data = fs.readFileSync('./icons.json', 'utf-8')
let jsonData = JSON.parse(data)

let numbers = []

for (key in jsonData) {
    numbers.push(key.slice(7, key.length))
}
// console.log(jsonData)


let table = '| Asset Name | featureID | Price | Title | unlocked by | Icon |\n';
table += '|:-----------|:----------|:------|:------|:------------|:-----|\n'
let i = 1;
for (key in jsonData) {
    data2 = jsonData[key]
    table += `| boomIcon_${numbers[i]}_001.png | ${data2['featureID']} | ${data2['price'] ? data2['price'] : '0'} | ${data2['title']} | ${data2['unlockedBy'] ? data2['unlockedBy'] : 'No Achievement'} | ![boomIcon_${numbers[i]}_001.png](https://raw.githubusercontent.com/Wyliemaster/boomlings-docs/main/assets/icons/boomIcon_${numbers[i - 1]}_001.png)\n`
    i++
}

fs.writeFileSync('test.md', table)
console.log(table)