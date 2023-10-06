const quotes = [
    {
        quote: "Don't dwell on the past.",
        KRquote: "과거에 연연하지 마세요.",
    },
    {
        quote: "Believe in yourself.",
        KRquote: "자기 자신을 믿으세요.",
    },
    {
        quote: "Seize the day.",
        KRquote: "오늘을 즐기세요.",
    },
    {
        quote: "Love yourself.",
        KRquote: "자기 자신을 사랑하세요.",
    },
    {
        quote: "Don't beat yourself up.",
        KRquote: "자책하지 마세요.",
    },
]

const quote = document.querySelector("#quote span:first-child");
const KRquote = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
KRquote.innerText = todaysQuote.KRquote;