const form = document.getElementById('form')
const input = document.getElementById('input-book')
const infoWindow = document.getElementById('info-window')
const CoverZone = document.getElementById('cover-zone')
const windowImage = document.getElementById('window-image')
const windowTitle = document.getElementById('window-title')
const windowAuthor = document.getElementById('window-author')
const windowDescription = document.getElementById('window-description')
const booksData = async (bookNmae) =>{
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${bookNmae}`
    fetch(URL)
    .then(res => res.json())
    .then(res => {
        const coverContainer = document.createElement('div')
        res.items.map(item =>{
            const createCover = document.createElement('img')
            createCover.src = item.volumeInfo.imageLinks.thumbnail
            createCover.classList.add('cover--img')
            createCover.dataset.id = item.selfLink
            coverContainer.appendChild(createCover)
            coverContainer.classList.add('cover__zone')
            CoverZone.children.length > 1 ? CoverZone.removeChild(CoverZone.firstChild) : ''
            CoverZone.appendChild(coverContainer)
        })
    })
    .catch(err => console.error(err))
}

const getSingleInformation = (singleURL) =>{
    fetch(singleURL)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        windowImage.src = res.volumeInfo.imageLinks.thumbnail
        windowTitle.textContent = res.volumeInfo.title
        windowAuthor.textContent = res.volumeInfo.authors[0]
        windowDescription.innerHTML = res.volumeInfo.description

        if(res.volumeInfo.description === undefined) windowDescription.textContent = 'No Description Provided'
    })
}

form.addEventListener('submit', e =>{
    e.preventDefault()
    input.value !== '' ? booksData(input.value) : ''
})

CoverZone.addEventListener('click', e =>{
    if(e.target.dataset.id !== undefined){
        getSingleInformation(e.target.dataset.id)
    }
}) 