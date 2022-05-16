import { data } from "./data.js"
const app = document.getElementById('app')
const namePane = document.getElementById('name-pane')
const nameInfo = document.getElementById('name-info')
const input = document.getElementById('input')
const form = document.getElementById('form')
const btn = document.getElementById('button')
let elementToChange

const getNames = () => {
    const fragment = document.createDocumentFragment()
    data.find(element => {
        const userName = document.createElement('p')
        userName.textContent = element.name
        fragment.appendChild(userName)
    })
    namePane.appendChild(fragment)
}

const getInfo = (name) =>{
    const fragment = document.createDocumentFragment()
    data.find(element => {
        if(element.name === name){
            const ul = document.createElement('ul')
            for(let i = 0; i < Object.entries(element).length; i++){
                const li = document.createElement('li')
                li.textContent = `${Object.entries(element)[i][0]}: ${Object.entries(element)[i][1]}`
                ul.appendChild(li)
            }
            fragment.appendChild(ul)
        }
    })
    nameInfo.appendChild(fragment)
}

const getProperty = (property) => {
    input.value = property.textContent
    elementToChange = property
}

const changeProperty = () => {
    elementToChange.textContent = input.value
}

const takeLastChild = (node, nodeToRemove) => node.children.length > 1 ? node.removeChild(nodeToRemove) : ''

namePane.addEventListener('click', e =>{
    getInfo(e.target.textContent)
    takeLastChild(nameInfo, nameInfo.firstChild)
})

nameInfo.addEventListener('click', e =>{
    if(!e.target.classList.contains('info')) nameInfo.children ? getProperty(e.target) : ''
})

form.addEventListener('submit', e =>{
    e.preventDefault()
    changeProperty()
})

getNames()