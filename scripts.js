const myLibrary = []

function Book(read, name, author, pages, rating) {
    this.read = read
    this.name = name
    this.author = author
    this.pages = pages
    this.rating = rating
}

function addBookToLibrary(read, name, author, pages, rating) {
    const newBook = new Book(read, name, author, pages, rating)
    myLibrary.push(newBook)
    const table = document.querySelector('.table')
    const tableRow = document.createElement('div')
    tableRow.classList.add('tableRow')
    Object.values(newBook).forEach((value) => {
        const item = document.createElement('div')
        item.classList.add('tableItem')
        item.textContent = value
        tableRow.appendChild(item)
    })
    table.appendChild(tableRow)
}

addBookToLibrary(true, 'Zero to One', 'Peter Thiel', '260', '5')

const openModalButton = document.querySelector('[data-modal-target]')
const closeModalButton = document.querySelector('[data-close-button]')
const overlay = document.querySelector('.overlay')

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    closeModal(modal)
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const form = document.querySelector('#formNewBook')

console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = form.elements[0].value
    const author = form.elements[1].value
    const pages = form.elements[2].value
    const rating = form.elements[3].value
    const read = form.elements[4].checked
    addBookToLibrary(read, name, author, pages, rating)
    const modal = document.querySelector('.modal')
    closeModal(modal)
    document.querySelector('#formNewBook').reset()
})
