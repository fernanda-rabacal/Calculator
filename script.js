const display = document.getElementById('calc')
const clear = document.getElementById('clean')
const numbers = document.querySelectorAll('.number')
const symbols = document.querySelectorAll('.ops-symbols')
const equal = document.getElementById('equal')
const comma = document.getElementById('comma')
const prevOperation = document.getElementById('res')


const placeComma = () => display.value += ','

clear.addEventListener("click",function (){
  display.value = ''
  prevOperation.innerHTML = ''
})

numbers.forEach((num) => num.addEventListener("click", () =>
  display.value += num.value
))
symbols.forEach((sym) => sym.addEventListener("click", () =>
  display.value += sym.value
))

const getSymbol = (sym) => {

    if(sym === '*'){
      let symIndex = display.value.indexOf('*')
      let prevNumber = Number.parseFloat(display.value.replace(",", ".").charAt(symIndex - 1))
      let posNumber = Number.parseFloat(display.value.replace(",", ".").charAt(symIndex + 1))
      console.log(prevNumber)
      let multi = prevNumber * posNumber
      return display.value.replace(`${prevNumber}*${posNumber}`, multi)
    }
    
    if(sym === '/'){
      let symIndex = display.value.indexOf('/')
      let prevNumber = Number.parseFloat(display.value.charAt(symIndex - 1) )
      let posNumber = Number.parseFloat(display.value.charAt(symIndex + 1) )
      let divide = prevNumber / posNumber
      
      return display.value.replace(`${prevNumber}/${posNumber}`, divide)
    }
    

    const numbersSum = display.value.split(sym).map((item) => parseFloat(item.replace(",", ".")))


  switch(sym) {
    case '+':
      const sum = numbersSum.reduce((prev, current) => prev += current)
      return sum

    case '-':
      const minus = numbersSum.reduce((prev, current) => prev -= current)
      return minus
    }
}

const getOperation = () =>{
  prevOperation.innerHTML = display.value
  
  if (display.value.includes('*')){
    display.value = getSymbol('*') 
    getOperation()
  }
  if (display.value.includes('/')){
    display.value = getSymbol('/')
    getOperation()
  }
  if (display.value.includes('+')){
    display.value = getSymbol('+')
  }
  if (display.value.includes('-')){
    display.value = getSymbol('-')
  }

}
equal.addEventListener('click', getOperation)


