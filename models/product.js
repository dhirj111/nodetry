

let productarr = [];
module.exports = class productserver {
  constructor(n) {
    this.nine = n
  }
  save() {
    productarr.push(this)
  }
  static fetchAll() {
    return productarr;
  }

}
//on using productserver.save  it will save data into productarr 
//we exported that class in  module  
//we basically want that a new object is created and pushed to array every time we use productserver class
