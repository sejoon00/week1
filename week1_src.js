let btn = document.querySelector('.btn');
let p = document.querySelector('.p');

btn.addEventListener('click', () =>{
    btn.style.cssText = 'height: 100px;';
     fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) =>{
    let filterId = json.filter( (json) => json.userId == "1");
    for( let ele of filterId){
        p.insertAdjacentHTML('beforeend', `userid: ${ele['userId']}</br> id: ${ele['id']}</br> title: ${ele['title']}</br> body: ${ele['body']}</br></br>`);
    }
    
    console.log(filterId);
    
});
    
    
})