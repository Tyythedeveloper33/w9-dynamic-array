class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)
  }

  read(index) {
    if(this.data[index] < 0) return undefined
    return this.data[index]
  }

  push(val) {
    this.data[data.length - 1] = val
    this.length = this.data.length
  }


  pop() {

    // Your code here 
  }

  shift() {

    // Your code here 
  }

  unshift(val) {

    // Your code here 
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
