const quotes = [
    {
        quote: "Sooner or later we all quote our mothers.",
        author: "Bern Williams",
    },
    {
        quote: "Liberty is not a means to a higher political end. It is itself the highest political end.",
        author: "Lord Acton",
    },
    {
        quote: "Reading this book is like waiting for the first shoe to drop.",
        author: "Ralph Novak",
    },
    {
        quote: "I've never known any trouble that an hour's reading didn't assuage.",
        author: "Charles De Secondat",
    },
    {
        quote: "Talk low, talk slow, and don't say too much",
        author: "John Wayne",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;