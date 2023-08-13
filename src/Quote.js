import axios from "axios";
import { useEffect, useState } from "react";

const url =
  "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  const randomQuote = Math.floor(Math.random() * quotes.length);
  async function fetchData() {
    try {
      const response = await axios.get(url);
      const data = await response.data.quotes;
      setQuotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(quotes);
  useEffect(() => {
    fetchData();

    document.addEventListener("DOMContentLoaded", fetchData);
  });
  return (
    <div className="w-[90%] h-[100%]  lg:h-[30vh] bg-purple-900  text-white py-16 mt-10 rounded-2xl relative box-shadow-gradient-1">
      <h1 className="text-xl lg:text-3xl text-center font-semibold absolute top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        Quote of the day
      </h1>
      <div>
        <blockquote className="text-sm lg:text-xl italic   font-semibold">
          <svg
            className="w-5 h-4  text-white absolute left-4 top-10 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="text-center  m-1 lg:absolute lg:top-[40%] left-[5%] ">
            {quotes &&
              "You will face many defeats in life, but never let yourself be defeated."}
            <br />
            <span className="flex justify-end items-center absolute right-5">
              - unknown
            </span>
          </p>

          <svg
            className="w-5 h-4 absolute left-[90%] bottom-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </blockquote>
      </div>
    </div>
  );
};
export default Quote;
