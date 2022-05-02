// const url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

let news = async (url) =>
{
    let res = await fetch(url);
    let data = await res.json();
    append(data.articles);
}


function append(data)
{
    document.querySelector("#results").innerHTML=null;
    console.log(data)
    data.map(function(el){
        var div = document.createElement("div");
        div.setAttribute("class","news");
        var image = document.createElement("img");
        image.src = el.urlToImage;
        var title = document.createElement("h3");
        title.innerText = el.title;
        var des = document.createElement("p");
        des.innerText = el.description;
        div.append(image,title,des);
        document.querySelector("#results").append(div);

        div.addEventListener("click",function(){
            save(el);
        })
    });
    
}

function save(el)
{
    var arr = [];
    arr.push(el);
    console.log("arr",arr)
    localStorage.setItem("news",JSON.stringify(arr));
    window.location.href = "news.html";
    // news1  = JSON.parse(localStorage.getItem("news"));
}



function set_news(news)
{
    news.map(function(el){
        var div = document.createElement("div");
        var image = document.createElement("img");
         image.src = el.urlToImage;
        var title = document.createElement("h3");
        title.innerText = el.title;
        var content = document.createElement("p");
        content.innerText = el.content;

        div.append(image,title,content);
        document.querySelector("#detailed_news").append(div)
    });
}

export { news, append };
export { save };
export { set_news };