let myLibrary = [];
const newBook = document.querySelector('#new-book');
const bookForm = document.querySelector('.book-form');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.submit');
const formClose = document.querySelector('#close-form');
const library = document.querySelector('tbody');
const mainPage = document.querySelector('body');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let titleEntry = document.querySelector('#title');
let authorEntry = document.querySelector('#author');
let pagesEntry = document.querySelector('#pages');
let readEntry = document.querySelector('#read');


function bookList() {
    const displayList = document.createElement('tr');
    myLibrary.forEach((myLibrary) => {
        library.appendChild(displayList);
        displayList.innerHTML = `<td>${myLibrary.title}</td><td>${myLibrary.author}</td><td>${myLibrary.read}</td>`;
    })
}           

function addBookToLibrary() {
    let title = titleEntry.value;
    let author = authorEntry.value;
    let pages = pagesEntry.value;
    let read = true;
    let newEntry = new Book(title, author, pages, read);
    myLibrary.push(newEntry);
}

newBook.addEventListener('click', () => {
    overlay.style.display = 'flex';
    bookForm.style.display = 'flex';
})


submit.addEventListener('click', () => {
    addBookToLibrary();
    bookList();
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
})

formClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
})


