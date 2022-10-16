

// Constructor
function Book(bookName, author,date) {
    this.bookName = bookName;
    this.author = author;
    this.date=date;
}

// Display Constructor
function Display() {

}

// // Add methods to display prototype
// Display.prototype.add = function (book) {
//     console.log("Adding to UI");
//     tableBody = document.getElementById('tableBody');
//     let uiString = `<tr>
//                         <td>${book.bookName}</td>
//                         <td>${book.author}</td>
//                         <td>${book.date}</td>
//                     </tr>`;
//     tableBody.innerHTML += uiString;
// }

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.bookName.length < 2 || book.author.length < 2 || book.date == '' 
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
    let date = document.getElementById('issued').value;


    let book = new Book(bookName,author,date);
    console.log(book);

    let display = new Display();
    
  
    
    if(display.validate(book)){
        // display.add(book);
        display.clear();
        display.show('success','book added successfully');
    }
    else{
        //show error to the user
        display.show('error','please fill all the fields');
    }
    

    
}
