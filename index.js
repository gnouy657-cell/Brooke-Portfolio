
const book = document.getElementById("book");
const bookCover = document.getElementById("book-cover");
const bookInterior = document.getElementById("book-interior");

const openBook = document.getElementById("open-book");
const closeBook = document.getElementById("close-book");

const nextPage = document.getElementById("next-page");
const prevPage = document.getElementById("prev-page");

const pageNumber = document.getElementById("page-number");

const spreads = document.querySelectorAll(".book-spread");

let currentPage = -1;
const totalPages = spreads.length;


openBook.addEventListener("click", () => {
  book.classList.add("is-open");
  bookCover.classList.add("hidden");
  bookInterior.classList.add("visible");

  currentPage = 0;
  updateBook();
});


closeBook.addEventListener("click", () => {
  book.classList.remove("is-open");
  bookInterior.classList.remove("visible");
  bookCover.classList.remove("hidden");

  currentPage = -1;
  updateBook();
});


nextPage.addEventListener("click", (event) => {
  event.preventDefault();

  if (currentPage < totalPages - 1) {
    currentPage++;
    updateBook();
  }
});


prevPage.addEventListener("click", (event) => {
  event.preventDefault();

  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
});


function updateBook() {

  spreads.forEach((spread, index) => {
    spread.classList.toggle(
      "active",
      index === currentPage
    );
  });

  pageNumber.textContent =
    currentPage === -1
      ? "Cover"
      : `Project ${currentPage + 1} of ${totalPages}`;

  prevPage.style.display =
    currentPage > 0 ? "block" : "block";

  prevPage.hidden = currentPage <= 0;

  nextPage.hidden = currentPage >= totalPages - 1;

  closeBook.hidden = currentPage !== totalPages - 1;
}
