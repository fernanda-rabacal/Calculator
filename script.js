const display = document.getElementById('calc')
const clear = document.getElementById('clean')
const numbers = document.querySelectorAll('.number')
const symbols = document.querySelectorAll('.ops-symbols')
const equal = document.getElementById('equal')

clear.addEventListener("click", () => display.value = '')

numbers.forEach((num) => num.addEventListener("click", () =>
  display.value += Number.parseInt(num.value)
))
symbols.forEach((sym) => sym.addEventListener("click", () =>
  display.value += sym.value
))

const getSymbol = (sym) => {

  const numbersSum = display.value.split(sym).map((item) => Number.parseInt(item))
  
  if(sym === '+'){
    const sum = numbersSum.reduce((prev, current) => prev += current)
    return sum
  }
  if(sym === '-'){
    const minus = numbersSum.reduce((prev, current) => prev -= current)
    return minus
  }
  if(sym === '/'){
    const divide = numbersSum.reduce((prev, current) => prev /= current)
    return divide
  }
  if(sym === '*'){
    const multi = numbersSum.reduce((prev, current) => prev *= current)
    return multi
  }
  
}

const getOperation = () =>{
  if (display.value.includes('+')){
    display.value = getSymbol('+')
  }
  if (display.value.includes('-')){
    display.value = getSymbol('-')
  }
  if (display.value.includes('*')){
    display.value = getSymbol('*')
  }
  if (display.value.includes('/')){
    display.value = getSymbol('/')
  }

}
equal.addEventListener('click', getOperation)


