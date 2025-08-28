import { useState } from 'react'

export default function RandomQuote() {
    const quotes: string[] = [
        "Hoc,hoc nua,hoc mai",
        "That bai la me thanh cong",
        "Bo khong an co bo ngu,em khong an cut em ngu het bo",
        "Ngu thi chet, khoc loc cai gi",
        "Muon di nhanh thi di mot minh,muon di xa thi di cung nhau"
    ];

    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }
  return (
    <div>
    <h2>Cau noi truyen cam hung</h2>
    <p>{quote}</p>
    <button onClick = {getRandomQuote}>
        chon cau noi khac
    </button>

    </div>
  )
}
