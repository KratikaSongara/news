// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// for searching based on country :- https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

// for searching based on query :- https://masai-mock-api.herokuapp.com/news?q={query}

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import { news, append, save } from "../components/fetch.js";

var url;
let value;
var url;
var count=0;
document.querySelector("#in").addEventListener("click",india);
function india()
{
    // window.location.href = "index.html";
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";
    value="in";
    news(url);
    count++;
    
}

document.querySelector("#us").addEventListener("click",usa);
function usa()
{
    // window.location.href = "index.html";
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=us";
    value="us";
    news(url)
    count++;
    
}

document.querySelector("#ch").addEventListener("click",china);
function china()
{
    // window.location.href = "index.html";
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch";
    value="ch";
    news(url)
    count++;
   
}

document.querySelector("#uk").addEventListener("click",uk);
function uk()
{
    // window.location.href = "index.html";
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk";
    value="uk";
    news(url)
    count++;
   
}

document.querySelector("#nz").addEventListener("click",nz);
function nz()
{
    // window.location.href = "index.html";
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz";
    console.log(url)
    value="nz";
    news(url)
    count++;
    
}

if(count<1)
{
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";
    news(url)
}



document.querySelector("#button").addEventListener("click",gosearch);
function gosearch()
{
    // console.log(e)
    // if(event=="Enter")
    // {
        window.location.href = "search.html";
    // }
    
}


// document.querySelector("input").addEventListener("onkeydown",gosearch);
// function gosearch(event)
// {
//     console.log(e)
//     if(event=="Enter")
//     {
//         window.location.href = "search.html";
//     }
    
// }



