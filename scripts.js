let myLibrary = [];
const newBook = document.querySelector('#new-book');
const bookForm = document.querySelector('.book-form');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.submit');
const formClose = document.querySelector('#close-form');
const library = document.querySelector('tbody');
const mainPage = document.querySelector('body');


function Book(title, author, pages, read, entryId) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.entryId = entryId;
}

let titleEntry = document.querySelector('#title');
let authorEntry = document.querySelector('#author');
let pagesEntry = document.querySelector('#pages');


function bookList() {
    const displayList = document.createElement('tr');
    const bookTitle = document.createElement('td'); 
    const bookAuthor = document.createElement('td');
    const bookPages = document.createElement('td');
    const bookRead = document.createElement('td');
    const statusTable = document.createElement('td');
    const deleteTable = document.createElement('td');
    const statusChange = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    myLibrary.forEach((myLibrary) => {
        library.appendChild(displayList);
        bookTitle.textContent = `${myLibrary.title}`;
        bookAuthor.textContent = `${myLibrary.author}`;
        bookPages.textContent = `${myLibrary.pages}`;
        bookRead.textContent = `${myLibrary.read}`;

        statusChange.classList.add('read-button');
        statusChange.textContent = 'Change read status';
        statusTable.appendChild(statusChange);
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete book';
        deleteTable.appendChild(deleteButton);
    
        displayList.appendChild(bookTitle);
        displayList.appendChild(bookAuthor);
        displayList.appendChild(bookPages);
        displayList.appendChild(bookRead);
        displayList.appendChild(statusTable);
        displayList.appendChild(deleteTable);

        /* myLibrary.entryId = myLibrary.findIndex(x => x.title === "Cameron's book")*/
    })
}           

function addBookToLibrary() {
    let title = titleEntry.value;
    let author = authorEntry.value;
    let pages = pagesEntry.value;
    let read = document.querySelector('input[name="read"]:checked').value;
    let entryId = '';
    let newEntry = new Book(title, author, pages, read, entryId);
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


