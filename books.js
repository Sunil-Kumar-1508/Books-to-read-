const books = [
    {
        title: "Atomic Habits",
        image: "images/atomic-habits.jpg",
        link: "https://amzn.to/YOUR-AFFILIATE"
    },
    {
        title: "Think and Grow Rich",
        image: "images/think-grow-rich.jpg",
        link: "https://amzn.to/YOUR-AFFILIATE"
    },
    {
        title: "Rework",
        image: "images/rework.jpg",
        link: "https://amzn.to/YOUR-AFFILIATE"
    }
];

const list = document.getElementById("book-list");

books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <a href="${book.link}" target="_blank">Buy Now</a>
    `;

    list.appendChild(card);
});

