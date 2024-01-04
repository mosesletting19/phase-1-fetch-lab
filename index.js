// Import any necessary dependencies, such as fetch and renderBooks if needed

function fetchBooks() {
    // Return the fetch promise
    return fetch("https://anapioficeandfire.com/api/books")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((books) => {
            renderBooks(books);
        })
        .catch((error) => {
            console.error("Error fetching books:", error);
        });
}
window.addEventListener("load", () => {
    fetchBooks();
});