// Hash class
class HashStorageClass {
    constructor() {
        this.hash = {};
    }

    addValue(key, value) {
        this.hash[key] = value;
    };

    getValue(key) {
        return this.hash[key]; // проверок не делал, undefined приходит в любом случае, если ключа не существует
    };

    deleteValue(key) {
        if (key in this.hash) {
            delete (this.hash[key]);
            return true;
        } else {
            return false;
        }
    };

    getKeys() {
        return Object.keys(this.hash);
    };
}

// variables
const webLibrary = new HashStorageClass();
const addBookBtn = document.querySelector("#add_book");
const deleteBookBtn = document.querySelector("#delete_book");
const updateBookBtn = document.querySelector("#update_book");
const libraryElem = document.querySelector("#books");

// functions
function renderBooks(libraryHash, libraryElem) {
    const keys = libraryHash.getKeys();

    libraryElem.innerHTML = "";

    keys.forEach(key => {
        const book = webLibrary.getValue(key);
        libraryElem.appendChild(createBookElement(book, key));
    });
}

function createBookElement(bookInfo, bookId) {
    const bookElement = document.createElement("li");
    bookElement.innerText = `Название книги: ${bookInfo.bookName}. Автор: ${bookInfo.bookAuthor}. Количество страниц: ${bookInfo.bookPages}. Id книги: ${bookId}`;

    return bookElement;
}

// events
addBookBtn.addEventListener("click", ()=> {
    const bookName = prompt("Введите название книги");
    const bookAuthor = prompt("Введите автора книги");
    const bookPages = prompt("Введите количество страниц в книге");
    const bookId = Date.now();

    webLibrary.addValue(bookId, {bookName, bookAuthor, bookPages});
    renderBooks(webLibrary, libraryElem);
});

deleteBookBtn.addEventListener("click", ()=> {
    const bookToDelete = prompt("Введите id книги, которую хотите удалить");
    
    if (!webLibrary.deleteValue(bookToDelete)) {
        alert("Произошла ошибка при удалении книги. Проверьте введённый id");
    } else {
        webLibrary.deleteValue(bookToDelete);
        alert("Книга успешно удалена");
        renderBooks(webLibrary, libraryElem);
    }
});

updateBookBtn.addEventListener("click", () => {
    const bookToUpdateId = prompt("Введите id книги, которую хотите изменить");

    if (!webLibrary.getValue(bookToUpdateId)) {
        alert("Произошла ошибка при обновлении книги. Проверьте введённый id");
    } else {
        const bookInfo = webLibrary.getValue(bookToUpdateId)
        const bookName = prompt("Введите новое название книги", bookInfo.bookName);
        const bookAuthor = prompt("Введите нового автора книги", bookInfo.bookAuthor);
        const bookPages = prompt("Введите новое количество страниц в книге", bookInfo.bookPages);

        webLibrary.addValue(bookToUpdateId, {bookName, bookAuthor, bookPages});
        renderBooks(webLibrary, libraryElem);
    }
});

// function calls
renderBooks(webLibrary, libraryElem);
