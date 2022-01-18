//create text file and store json data
const fs = require('fs')

//******      write file     *********
// const book ={
//     name:'New Book 1',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// //1-json.json file name that will be created
// fs.writeFileSync('1-json.json', bookJSON)


//********   read file *******/
const dataBuffer = fs.readFileSync('1-json.json')

//convert buffer to string
const dataJSON = dataBuffer.toString();

//parse JSON data in to object
const data = JSON.parse(dataJSON)

//change name
data.name = "Yoo"

console.log(data.name);