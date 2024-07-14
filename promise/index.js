var posts = document.querySelector(".posts");
var comments = document.querySelector(".comments");
var albums = document.querySelector(".albums");
var photos = document.querySelector(".photos");
var todos = document.querySelector(".todos");
var users = document.querySelector(".users");


function displayPhotos(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("img");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(item.url);
            var mybr = document.createElement("br");
            para.setAttribute("src", item.url);
            para.setAttribute("height", "600");
            para.setAttribute("width", "600");
            para.appendChild(mybr);
            console.log(item.name, data, para);
            div.appendChild(para);
        });
        
        document.body.appendChild(div);
    })
}

function displayComments(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("p");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(`${item.name} : ${item.body}`);
            var mybr = document.createElement("br");
            para.appendChild(data);
            para.appendChild(mybr);
            console.log(item, data, para);
           
        });
        div.appendChild(para);
        document.body.appendChild(div);
    })
}

function displayPosts(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("p");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(item.title);
            var mybr = document.createElement("br");
            para.appendChild(data);
            para.appendChild(mybr);
            console.log(item.name, data, para);
           
        });
        div.appendChild(para);
        document.body.appendChild(div);
    })
}

// function displayTodos(e){
//     if(document.querySelector(".update") != null){
//         document.querySelector(".update").remove();
//         console.log("removed");

//     }
//     var user = fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(json =>{return json});    
//     var div = document.createElement("div");
//     div.classList.add("update");
//     var para = document.createElement("p");
//     user.then(function(result){
//         result.forEach(item => {
            
//             const data = document.createTextNode(item.body);
//             var mybr = document.createElement("br");
//             para.appendChild(data);
//             para.appendChild(mybr);
//             console.log(item.name, data, para);
           
//         });
//         div.appendChild(para);
//         document.body.appendChild(div);
//     })
// }

function displayAlbums(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("p");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(item.title);
            var mybr = document.createElement("br");
            para.appendChild(data);
            para.appendChild(mybr);
            console.log(item.name, data, para);
           
        });
        div.appendChild(para);
        document.body.appendChild(div);
    })
}
 
function displayTodos(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("p");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(item.title);
            var mybr = document.createElement("br");
            para.appendChild(data);
            para.appendChild(mybr);
            console.log(item.name, data, para);
           
        });
        div.appendChild(para);
        document.body.appendChild(div);
    })
}

function displayUsers(e){
    if(document.querySelector(".update") != null){
        document.querySelector(".update").remove();
        console.log("removed");

    }
    var user = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json =>{return json});    
    var div = document.createElement("div");
    div.classList.add("update");
    var para = document.createElement("p");
    user.then(function(result){
        result.forEach(item => {
            
            const data = document.createTextNode(item.name);
            var mybr = document.createElement("br");
            para.appendChild(data);
            para.appendChild(mybr);
            console.log(item.name, data, para);
           
        });
        div.appendChild(para);
        document.body.appendChild(div);
    })
}

posts.addEventListener("click", displayPosts);
comments.addEventListener("click", displayComments);
albums.addEventListener("click", displayAlbums);
photos.addEventListener("click", displayPhotos);
todos.addEventListener("click", displayTodos);
users.addEventListener("click", displayUsers);