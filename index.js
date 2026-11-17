
const bookCover = document.getElementById("book-cover");
const bookInterior = document.getElementById("book-interior");

const openBook = document.getElementById("open-book");
const closeBook = document.getElementById("close-book");

const nextPage = document.getElementById("next-page");
const prevPage = document.getElementById("prev-page");

const pageNumber = document.getElementById("page-number");

const spreads = document.querySelectorAll(".book-spread");

let currentPage = -1;

// Open the book
openBook.addEventListener("click", () => {
  bookCover.classList.add("hidden");
  bookInterior.classList.add("visible");
  currentPage = 0;
  updateBook();
});

// Close the book
closeBook.addEventListener("click", () => {
  bookInterior.classList.remove("visible");
  bookCover.classList.remove("hidden");
  currentPage = -1;
  updateBook();
});

// Next page
nextPage.addEventListener("click", () => {
  if (currentPage < spreads.length - 1) {
    currentPage++;
    updateBook();
  }
});

// Previous page
prevPage.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
});

// Update displayed spread
function updateBook() {
  spreads.forEach((spread, index) => {
    spread.classList.toggle("active", index === currentPage);
  });

  pageNumber.textContent =
    currentPage === -1
      ? "Cover"
      : `Project ${currentPage + 1} of ${spreads.length}`;

  prevPage.disabled = currentPage <= 0;
  nextPage.disabled = currentPage >= spreads.length - 1;
  nextPage.style.display = currentPage === spreads.length - 1 ? "none" : "block";
closeBook.style.display = currentPage === spreads.length - 1 ? "block" : "none";
}
