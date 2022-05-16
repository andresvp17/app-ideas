const colorInput = document.getElementById('color')
const weight = document.getElementById('weight')
const buttonClear = document.getElementById('clear-btn')

const paths = []
let currentPath = []

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    background(255)
} 

function draw(){
    noFill()
    if(mouseIsPressed){
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        }
        currentPath.push(point)
    }
    paths.forEach(path =>{
        beginShape()
        path.forEach(point => {
            stroke(point.color)
            strokeWeight(point.weight)
            vertex(point.x, point.y)
        })
        endShape()
    })
}

function mousePressed(){
    currentPath = []
    paths.push(currentPath)
}

buttonClear.addEventListener('click', (e) =>{
    paths.splice(0)
    background(255)
})

weight.addEventListener('change', (e) =>{
    if(weight.value > 50) weight.value = 50
})