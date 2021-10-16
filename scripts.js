let myLibrary = [];
const newBook = document.querySelector('#new-book');
const bookForm = document.querySelector('.book-form');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.submit');
const formClose = document.querySelector('#close-form');
const library = document.querySelector('.book-list');
const mainPage = document.querySelector('.main');


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

function addBookToLibrary() {
    let title = titleEntry.value;
    let author = authorEntry.value;
    let pages = pagesEntry.value;
    let read = true;
    let newEntry = new Book(title, author, pages, read);
    myLibrary.push(newEntry);
}

const displayList = document.createElement('ul');
const deleteContainer = document.createElement('ul');
deleteContainer.classList.add('delete-container');
displayList.classList.add('list');
library.appendChild(displayList);
library.appendChild(deleteContainer);



function bookList() {
    myLibrary.forEach((myLibrary) => {
        const listItem = document.createElement('li');
        const deleteList = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        displayList.appendChild(listItem);
        deleteContainer.appendChild(deleteList);
        deleteList.appendChild(deleteButton);
        deleteButton.textContent = 'Delete book';
        listItem.textContent += myLibrary.title;
    })};

mainPage.addEventListener('load', bookList());

newBook.addEventListener('click', () => {
    overlay.style.display = 'flex';
    bookForm.style.display = 'flex';
})

submit.addEventListener('click', () => {
    addBookToLibrary();
    bookList();
    clearForm();
    overlay.style.display = 'none';
    bookForm.style.display = 'none';

})

formClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
})

function clearForm() {
    listItem.textContent = ""; 
}