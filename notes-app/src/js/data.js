export { addData, readData, getData, updateData, deleteData }
const inputNote = document.getElementById('input-note')
const inputName = document.getElementById('input-name')
const notesContainer = document.getElementById('notes-container')
const IDB = window.indexedDB

const request = IDB.open('DataBase', 1)
let db

request.onsuccess = () =>{
    db = request.result
    readData()
}

request.onupgradeneeded = e =>{
    db = e.target.result
     const objectStore = db.createObjectStore('notes', {
        keyPath: 'note'
    })
}

request.onerror = (error) =>{
    console.error(error);
}

const addData = (data) =>{
    const transaction = db.transaction(['notes'], 'readwrite')
    const objectStore = transaction.objectStore('notes')
    const request = objectStore.add(data)
    readData()
}

const readData = () =>{
    const transaction = db.transaction(['notes'], 'readonly')
    const objectStore = transaction.objectStore('notes')
    const request = objectStore.openCursor()
    const fragment = document.createDocumentFragment()

    request.onsuccess = e =>{
        const cursor = e.target.result
        if(cursor){
            const note = document.createElement('div')
            note.classList.add('note-item')

            const task = document.createElement('p')
            task.textContent = cursor.value.note
            task.classList.add('note-title')
            note.appendChild(task)

            const author = document.createElement('p')
            author.textContent = cursor.value.author
            note.appendChild(author)

            const date = document.createElement('p')
            date.textContent = cursor.value.date
            note.appendChild(date)

            const importance = document.createElement('p')
            importance.textContent = cursor.value.importance
            importance.classList.add(
                importance.textContent === 'Important' ? importance.classList.add('text-important') : importance.classList.add('text-not-important')
            )
            note.appendChild(importance)

            const update = document.createElement('button')
            update.dataset.action = cursor.key
            update.classList.add('btn-update')
            update.textContent = 'Update'
            note.appendChild(update)

            const deleteElement = document.createElement('button')
            deleteElement.dataset.delete = cursor.key
            deleteElement.classList.add('btn-delete')
            deleteElement.textContent = 'Delete'
            note.appendChild(deleteElement)

            fragment.appendChild(note)
            cursor.continue()
        } else {
            notesContainer.textContent = ''
            notesContainer.appendChild(fragment)
        }
    }
}

const getData = (key) =>{
    const transaction = db.transaction(['notes'], 'readwrite')
    const objectStore = transaction.objectStore('notes')
    const request = objectStore.get(key)

    request.onsuccess = (e) =>{
        inputNote.value = e.target.result.note
        inputName.value = e.target.result.author
    }
}

const updateData = (data) =>{
    const transaction = db.transaction(['notes'], 'readwrite')
    const objectStore = transaction.objectStore('notes')
    const request = objectStore.put(data)
    readData()
}

const deleteData = (key) =>{
    const transaction = db.transaction(['notes'], 'readwrite')
    const objectStore = transaction.objectStore('notes')
    const request = objectStore.delete(key)
    readData()
}