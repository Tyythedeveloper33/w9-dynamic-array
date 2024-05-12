class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = Array(this.capacity)
  }

  read(index) {
    if(this.data[index] < 0) return undefined
    return this.data[index]
  }
  
  push(val) {
    if(this.length === this.capacity) {
      this.resize()
    }
    
    for(let i = 0; i < this.capacity; i++) {
      
      if(!this.data[i]) {
        this.data[i] = val
        this.length++
        break
      }
    }
  }

  pop() {
    let popped;
    for(let i = this.data.length - 1; i >= 0; i--) {
      if(this.data[i]) {
        popped = this.data[i]
        this.length--
        this.data[i] = undefined
        break
      }
    }
    return popped
  }

  shift() {
    let shifted = this.data[0]
    for(let i = 0; i <= this.data.length - 1; i++) {
        this.data[i] = this.data[i + 1]
    }
    this.length--
    if(this.data[0] === undefined) this.length = 0
    return shifted
  }

  unshift(val) {
    if(this.length === this.capacity) {
      this.resize()
    }
    for(let i = this.data.length - 1; i >= 0; i--) {
      if(i === 0) {
        this.length++
        this.data[0] = val
        return this.data
      }
      this.data[i] = this.data[i - 1]
    }
  }

  indexOf(val) {
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i] === val) return i
    }
    return -1
  }

  resize() {
      this.capacity *= 2
      this.data.length *= 2
  }
}


module.exports = DynamicArray;
