const books = [
   { title: "Atomic Habits", url: "https://amzn.to/your-affiliate-link" },
   { title: "Think and Grow Rich", url: "https://amzn.to/your-affiliate-link" },
   { title: "Rework", url: "https://amzn.to/your-affiliate-link" },
   // Add more books here
];

const list = document.getElementById("book-list");

books.forEach(book => {
   const li = document.createElement("li");
   const a = document.createElement("a");
   a.textContent = book.title;
   a.href = book.url;
   a.target = "_blank";
   li.appendChild(a);
   list.appendChild(li);
});
