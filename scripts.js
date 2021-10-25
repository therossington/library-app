let myLibrary = [];
const newBook = document.querySelector('#new-book');
const bookForm = document.querySelector('.book-form');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.submit');
const formClose = document.querySelector('#close-form');
const library = document.querySelector('tbody');
const mainPage = document.querySelector('body');
const inputs = document.querySelectorAll('input');
let id = '';

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

const validation = document.querySelector('.validation');

function titleValidation() {
    if (titleEntry.value == '') {
        validation.classList.add('title');
        validation.style.display = 'Block';
        submit.classList.add('disabled');
    }
}

function removeValidation() {
    validation.style.display = 'none';
    submit.classList.remove('disabled');
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

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == myLibrary[i].title) {
            myLibrary[i].entryId = i;
        }
    }   
    
    myLibrary.forEach((myLibrary) => {
        library.appendChild(displayList);
        bookTitle.textContent = `${myLibrary.title}`;
        bookAuthor.textContent = `${myLibrary.author}`;
        bookPages.textContent = `${myLibrary.pages}`;
        bookRead.textContent = `${myLibrary.read}`;

        statusChange.classList.add('read-button');
        statusChange.textContent = 'Change read status';
        statusTable.appendChild(statusChange);
        statusChange.setAttribute('data-id',`${myLibrary.entryId}`)
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete book';
        deleteTable.appendChild(deleteButton);
        deleteButton.setAttribute('data-id',`${myLibrary.entryId}`)
    
        displayList.appendChild(bookTitle);
        displayList.appendChild(bookAuthor);
        displayList.appendChild(bookPages);
        displayList.appendChild(bookRead);
        displayList.appendChild(statusTable);
        displayList.appendChild(deleteTable);    
    })

    statusChange.addEventListener('click', (e) => {
        id = parseInt(e.target.dataset.id);
        if (e.target.dataset.id == myLibrary[id].entryId && myLibrary[id].read == 'Yes') {
            myLibrary[id].read = 'No';
            bookRead.textContent = `${myLibrary[id].read}`;
           } else if (e.target.dataset.id == myLibrary[id].entryId && myLibrary[id].read == 'No') {
            myLibrary[id].read = 'Yes';
            bookRead.textContent = `${myLibrary[id].read}`
        };
    });

    deleteButton.addEventListener('click', (e) => {
        id = parseInt(e.target.dataset.id);
        if (e.target.dataset.id == myLibrary[id].entryId) {
            myLibrary[id] = 'Removed book';
            displayList.remove();
        }
    });
} 

newBook.addEventListener('click', () => {
    overlay.style.display = 'flex';
    bookForm.style.display = 'flex';
})


submit.addEventListener('click', () => {
    titleValidation();  
    addBookToLibrary();
    bookList();
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
    removeValidation();
})

formClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
    removeValidation();
})

