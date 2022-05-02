// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

// import { save } from "../components/fetch.js";
// document.body.innerHTML = save()
var news = JSON.parse(localStorage.getItem("news"));
// console.log(news)
import { set_news } from "../components/fetch.js";
set_news(news);


// function set_news(news)
// {
//     news.map(function(el){
//         var div = document.createElement("div");
//         var image = document.createElement("img");
//          image.src = el.urlToImage;
//         var title = document.createElement("h3");
//         title.innerText = el.title;
//         var content = document.createElement("p");
//         content.innerText = el.content;

//         div.append(image,title,content);
//         document.querySelector("#detailed_news").append(div)
//     });
// }

