const path = require('path');
const filesystem1 = require('fs');

module.exports = class productserver {
  constructor(n) {
    this.title = n
  }
  save() {
    const path_of_json = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    //here we just got path of new file products.json ,we will store and fetch data from this file

    filesystem1.readFile(path_of_json, (err, filecontent) => {
      let productsarr = []
      //fs.readFile takes two arguments  , pathofiletoread //path_of_json and callback
      //it throws error details when error and filedata or undefined if there is no file on using filecontent

      if (!err) {

        productsarr = JSON.parse(filecontent);
        //if file is not empty then we will save all previous data of file in parsed(string) in productarr  
      }
      productsarr.push(this)
      filesystem1.writeFile(path_of_json, JSON.stringify(productsarr), (err) => {

        console.log(err)
      })

    })
  }
  static fetchAll(cb) {
    const path_of_json = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    //here we just got path of new file products.json ,we will store and fetch data from this file
    filesystem1.readFile(path_of_json, (err, fileContent) => {
      if (err) {
        cb([])
      }
      else{
      cb(JSON.parse(fileContent))
      }
  
  }

}
//on using productserver.save  it will save data into productarr
//we exported that class in  module
//we basically want that a new object is created and pushed to array every time we use productserver class
