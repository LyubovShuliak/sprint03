function Calculator() {
  this.init = (num) => {
    this.result = num
    return this
  }
  this.add = (num) => {
    this.result += num
    return this
  }
  this.sub = (num) => {
    this.result -= num
    return this
  }
  this.mul = (num) => {
    this.result *= num
    return this
  }

  this.div = (num) => {
    this.result /= num
    return this
  }
  this.alert = () => {
    const calcResult = this
    setTimeout(function () {
      alert(calcResult.result);
    }, 5000)

  }
}

const calc = new Calculator()
console.log(calc.init(2).add(6).alert())
// calc.alert()
