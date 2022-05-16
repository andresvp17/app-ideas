const box = document.getElementById('box')
const container = document.getElementById('container')
const rootStyles = document.documentElement.style
const textArea = document.getElementById('text-area')
const button = document.getElementById('button')
const bar1 = document.getElementById('bar-1')
const bar2 = document.getElementById('bar-2')
const bar3 = document.getElementById('bar-3')
const bar4 = document.getElementById('bar-4')

bar1.addEventListener('dragstart', (e) =>{
    
})

bar1.addEventListener('drag', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-top-left', `${result}%`)
    box.style.borderTopLeftRadius = `${result}%`
})

bar1.addEventListener('dragend', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-top-left', `${result}%`)
    textArea.value = `
    border-top-left-radius: ${rootStyles.getPropertyValue('--width-top-left')};
    border-top-right-radius: ${rootStyles.getPropertyValue('--width-top-right')};
    border-bottom-left-radius: ${rootStyles.getPropertyValue('--width-bottom-left')};
    border-bottom-right-radius: ${rootStyles.getPropertyValue('--width-bottom-right')};
`
})

bar2.addEventListener('dragstart', (e) =>{
    
})

bar2.addEventListener('drag', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-top-right', `${result}%`)
    box.style.borderTopRightRadius = `${result}%`
})

bar2.addEventListener('dragend', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-top-right', `${result}%`)
    textArea.value = `
    border-top-left-radius: ${rootStyles.getPropertyValue('--width-top-left')};
    border-top-right-radius: ${rootStyles.getPropertyValue('--width-top-right')};
    border-bottom-left-radius: ${rootStyles.getPropertyValue('--width-bottom-left')};
    border-bottom-right-radius: ${rootStyles.getPropertyValue('--width-bottom-right')};
`
})

bar3.addEventListener('dragstart', (e) =>{
    
})

bar3.addEventListener('drag', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-bottom-left', `${result}%`)
    box.style.borderBottomLeftRadius = `${result}%`
})

bar3.addEventListener('dragend', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-bottom-left', `${result}%`)
    textArea.value = `
    border-top-left-radius: ${rootStyles.getPropertyValue('--width-top-left')};
    border-top-right-radius: ${rootStyles.getPropertyValue('--width-top-right')};
    border-bottom-left-radius: ${rootStyles.getPropertyValue('--width-bottom-left')};
    border-bottom-right-radius: ${rootStyles.getPropertyValue('--width-bottom-right')};
`
})

bar4.addEventListener('dragstart', (e) =>{
    
})

bar4.addEventListener('drag', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-bottom-right', `${result}%`)
    box.style.borderBottomRightRadius = `${result}%`
})

bar4.addEventListener('dragend', (e) =>{
    const offsetWidth = e.offsetX
    const clientWidth = e.target.clientWidth
    let result = Math.floor(offsetWidth * 100 / clientWidth)
    if(result > 100) result = 100

    rootStyles.setProperty('--width-bottom-right', `${result}%`)
    textArea.value = `
    border-top-left-radius: ${rootStyles.getPropertyValue('--width-top-left')};
    border-top-right-radius: ${rootStyles.getPropertyValue('--width-top-right')};
    border-bottom-left-radius: ${rootStyles.getPropertyValue('--width-bottom-left')};
    border-bottom-right-radius: ${rootStyles.getPropertyValue('--width-bottom-right')};
`
})

textArea.value = `
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
`

button.addEventListener('click', () =>{
    const textCopy = textArea.value
    navigator.clipboard.writeText(textCopy)
    button.classList.add('btn-copied')
    button.textContent = 'Copied!'
    button.classList.remove('btn')

    setTimeout(() =>{
    button.classList.add('btn')
    button.classList.remove('btn-copied')
    button.textContent = 'Copy'
    },3000)
})