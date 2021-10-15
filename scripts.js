let myLibrary = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];
const displayList = document.querySelector('ul');
const newBook = document.getElementById("new-book");
const bookForm = document.querySelector('form');
const overlay = document.getElementById('overlay');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}.`
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    return console.log(myLibrary);
};

function bookList() {
    myLibrary.forEach((myLibrary) => {
        const listItem = document.createElement('li')
        displayList.appendChild(listItem)
        listItem.textContent += myLibrary;
    })};

displayList.addEventListener('load', bookList())

newBook.addEventListener('click', () => {
    overlay.style.display = 'inline-block';
    /* bookForm.style.display = 'flex';*/
})

