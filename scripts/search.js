// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

// https://masai-mock-api.herokuapp.com/news?q={query}

const url = "https://masai-mock-api.herokuapp.com/news?q=twitter";

import { news, append } from "../components/fetch.js";
news(url)