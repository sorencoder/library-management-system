

// Constructor
function Book(bookName, author, studentName,enrollNo,date) {
    this.bookName = bookName;
    this.author = author;
    this.studentName = studentName;
    this.enrollNo = enrollNo;
    this.date=date;
}

// Display Constructor
function Display() {

}

// // Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.studentName}</td>
                        <td>${book.enrollNo}</td>
                        <td>${book.date}</td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                          </td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.bookName.length < 2 || book.author.length < 2 || book.studentName <2
        ||book.enrollNo <2|| book.date == '' 
        ) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted library form');
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let studentName = document.getElementById('student').value;
    let enrollNo = document.getElementById('enroll').value;
    let date = document.getElementById('issued').value;


    let book = new Book(bookName, author, studentName,enrollNo,date);
    console.log(book);

    let display = new Display();
    
  
    
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','book issued successfully');
    }
    else{
        //show error to the user
        display.show('error','please fill all the fields');
    }
    

    
}
