import { addData, deleteData, getData, updateData } from "./data.js"
const form = document.getElementById('form')
const inputNote = document.getElementById('input-note')
const inputName = document.getElementById('input-name')
const btnImportant = document.getElementById('important')
const btnNotImportant = document.getElementById('not-important')
const buttons = document.getElementById('buttons')
const btnWrite = document.getElementById('write')
const notesContainer = document.getElementById('notes-container')
let importantValue

const ChooseImportance = (importanceValue) =>{
    importanceValue === 'Important' 
    ? importantValue = 'Important'
    : importantValue = 'Not Important'
}

buttons.addEventListener('click', e =>{
    if(e.target === btnImportant || e.target === btnNotImportant) ChooseImportance(e.target.textContent)
})

const createNote = () =>{
    const fragment = document.createDocumentFragment()
    const note = document.createElement('div')

    const task = document.createElement('p')
    task.textContent = inputNote.value
    task.classList.add('note-title')
    note.appendChild(task)

    const author = document.createElement('p')
    author.textContent = inputName.value
    note.appendChild(author)

    const date = document.createElement('p')
    date.textContent = new Date().toISOString()
    note.appendChild(date)

    const importance = document.createElement('p')
    importance.textContent = importantValue
    importance.classList.add(importance.textContent === 'Important' 
    ? importance.classList.add('text-important') 
    : importance.classList.add('text-not-important'))
    note.appendChild(importance)

    fragment.appendChild(note)
    notesContainer.appendChild(fragment)
}

const selectActive = (element) =>{
    if(element.classList.contains('btn-important')){
        if(btnNotImportant.classList.contains('btn-active')){
            btnNotImportant.classList.remove('btn-active')
        }
        element.classList.add('btn-active')
    }else if(element.classList.contains('btn-not-important')){
        if(btnImportant.classList.contains('btn-active')){
            btnImportant.classList.remove('btn-active')
        }
        element.classList.add('btn-active')
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault() 
})

btnWrite.addEventListener('click', (e) =>{
    const data = {
        note: inputNote.value,
        author: inputName.value,
        date: new Date().toISOString(),
        importance: importantValue
    }

    if(inputNote.value !== '' && inputName.value !== '' && importantValue !== undefined){
        createNote()
        addData(data)
    }

    if(btnWrite.textContent === 'Update!'){
        updateData(data)
        btnWrite.textContent = 'Write!'
    }
})

buttons.addEventListener('click', (e) =>{
    e.target.classList.contains('btn-important') || e.target.classList.contains('btn-not-important') ? selectActive(e.target) : ''
})

notesContainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-update')){
        getData(e.target.dataset.action)
        btnWrite.textContent = 'Update!'
    }
    if(e.target.classList.contains('btn-delete')){
        deleteData(e.target.dataset.delete)
    }
})