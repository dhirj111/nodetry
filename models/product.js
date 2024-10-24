const path = require('path');
const filesystem1 = require('fs');
const rootDirectory = require('../utils/path')
module.exports = class productserver {
  constructor(n) {
    this.title = n
  }
  save() {
    const path_of_json = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    //here we just got path of new file products.json ,we will store and fetch data from this file
    console.log("saver functin's console")
    filesystem1.readFile(path_of_json, (err, filecontent) => {

      let productsarr = [];
      //productsarr is default unstringed content that we will write as content in products.json
      //below if no eroor and file is not empty then we read previous data add new input and push it into json
      if (!err && filecontent.length !== 0) {
        console.log("inside ! err")
        let fileparsed = JSON.parse(filecontent);
        //if file is already there in data then we get [{..} ,{..}] its an array 
        productsarr = fileparsed
        //we assigned it to prodcutsarr so productsarr= [{..} ,{..}]

        productsarr.push(this)
        // array look like [ { title: 'wewew' }, productserver { title: '444435' }]
        //after stringfication it will be  [ { title: 'wewew' },{ title: '444435' }]
        filesystem1.writeFile(path_of_json, JSON.stringify(productsarr), (err) => {
          console.log(err)
        })
      }
      //if there is error or json file is blank then we have to push first object {title:90} in []
      //we done that below 
      else {
        productsarr.push(this)
        filesystem1.writeFile(path_of_json, JSON.stringify(arr1), (err) => {

          console.log(err)
        })
      }

    })
  }

  // (products) => {
  //   console.log("these are products fetched from file", products)
  //   console.log("fetching completed ")
  //   res1.sendFile(path1.join(rootDirectory, "views", "shop.html"));
  // }
  //this is function that we are passing to below fetchall
  static fetchAll(cb) {
    //here cb will execute above anon.. function with value we will provide [] or [{..} ,{..}]
    const path_of_json = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
    //here we just got path of new file products.json ,we will store and fetch data from this file
    filesystem1.readFile(path_of_json, (err, fileContent) => {

      if (err) {
        cb([]);
      }
      else {
        cb(JSON.parse(fileContent))
      }

    })
  }

}
//on using productserver.save  it will save data into productarr
//we exported that class in  module
//we basically want that a new object is created and pushed to array every time we use productserver class
