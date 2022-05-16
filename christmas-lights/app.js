const form = document.getElementById('form')
const btnOn = document.getElementById('on')
const btnOff = document.getElementById('off')
const input = document.getElementById('input')
const lights = document.querySelectorAll('.light')
const rootStyles = document.documentElement.style

const stopAnimation = () =>{
    lights.forEach(light => {
        if(light.classList.contains('play-animation')){
            light.classList.remove('play-animation')
        }
        light.classList.add('stop-animation')
    })
}

const playAnimation = () =>{
    lights.forEach(light =>{
        if(light.classList.contains('stop-animation')){
            light.classList.remove('stop-animation')
        }
        light.classList.add('play-animation')
    })
}

const inputNumber = (num) =>{
    if(num.length > 1) return
    Number.parseInt(num)
    if(isNaN(num)) return
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

btnOff.addEventListener('click', () => stopAnimation())
btnOn.addEventListener('click', () => playAnimation())
input.addEventListener('focus', () => inputNumber(input.value))