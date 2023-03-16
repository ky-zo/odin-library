const myLibrary = []

class Book {
    constructor(read, name, author, pages, rating) {
        this.read = read
        this.name = name
        this.author = author
        this.pages = pages
        this.rating = rating
    }
}

// function Book(read, name, author, pages, rating) {
//     this.read = read
//     this.name = name
//     this.author = author
//     this.pages = pages
//     this.rating = rating
// }

function addBookToLibrary(read, name, author, pages, rating) {
    const newBook = new Book(read, name, author, pages, rating)
    myLibrary.push(newBook)
    const table = document.querySelector('.table')
    const tableRow = document.createElement('div')
    tableRow.classList.add('tableRow')

    // Create a checkbox for the 'read' property
    const readCheckbox = document.createElement('input')
    readCheckbox.type = 'checkbox'
    readCheckbox.checked = read
    const readItem = document.createElement('div')
    readItem.classList.add('tableItem')
    readItem.appendChild(readCheckbox)
    tableRow.appendChild(readItem)

    // Iterate over the remaining properties (name, author, pages, rating) of the newBook
    Object.values(newBook)
        .slice(1)
        .forEach((value) => {
            const item = document.createElement('div')
            item.classList.add('tableItem')
            item.innerHTML = value
            tableRow.appendChild(item)
        })

    const deleteItem = document.createElement('div')
    deleteItem.classList.add('tableItem')

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList.add('close-button-small')

    deleteButton.addEventListener('click', () => {
        tableRow.remove()
        const bookIndex = myLibrary.indexOf(newBook)
        myLibrary.splice(bookIndex, 1)
    })
    deleteItem.appendChild(deleteButton)
    tableRow.appendChild(deleteItem)
    table.appendChild(tableRow)
}

addBookToLibrary(true, 'Zero to One', 'Peter Thiel', '224', '5')

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
