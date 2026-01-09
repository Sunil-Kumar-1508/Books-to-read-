document.addEventListener("DOMContentLoaded", () => {

    const books = [
        {
            title: "Atomic Habits",
            image: "9781847943910-1.jpg",
            link: "https://amzn.to/4jxrFpr"
        },
        
        {
            title: "Ikigai",
            image: "234_aaa800ec-5535-4c1e-856a-e003ddf332e5.png",
            link: "https://amzn.to/3LrBBUS"
        },
        
        {
            title: "How To Win Friends & Influence People",
            image: "71vK0WVQ4rL.jpg",
            link: "https://amzn.to/4qacAMV"
        },
        
        {
            title: "The Psychology of Money",
            image: "71XEsXS5RIL._AC_UF1000,1000_QL80_.jpg",
            link: "https://amzn.to/3Z5izGW"
        },
        
        {
            title: "THE 48 LAWS OF POWER ",
            image: "61J3Uu4jOLL._AC_UF1000,1000_QL80_.jpg",
            link: "https://amzn.to/4soFXN4"
        }
    ];

    const list = document.getElementById("book-list");

    if (!list) {
        console.error("Error: #book-list not found");
        return;
    }

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" onerror="this.src='fallback.jpg'">
            <h3>${book.title}</h3>
            <a href="${book.link}" target="_blank">Buy Now</a>
        `;

        list.appendChild(card);
    });
});
