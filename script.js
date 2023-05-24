const newPostForm = {
    title : document.querySelector("title").value,
    body : document.querySelector("body").value,
}

const userPost = fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newPostForm),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

submit_button.addEventListener("click", success);

function success(){
   if(title.value == "" && body.value == ""){
    window.alert('Vous devez renseigner tout les champs');
    }else{
        window.alert('title: '+ title.value + ' body: ' + body.value); 
    }
};
