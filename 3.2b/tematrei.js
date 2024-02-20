const books = [{

}]

function showbooks(booksArray) {
  booksArray.foreach(book) => {
    if(book.estecitita ===true) {
    console.log("Ai citit deja" + books.titlu + "de" + books.author)
    }
    else {
      console.log("trebuie sa citesti " + book.titlu + "de" + book.autor )
    }
    }
  }
}