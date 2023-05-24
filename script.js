const newPostForm = {
    title : document.querySelector("title").value,
    body : document.querySelector("body").value,
}

fetch('https://jsonplaceholder.typicode.com/posts', {
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
    const danger = document.getElementById('danger');
    const successful = document.getElementById('successful');

   if(title.value === "" || body.value === ""){
    danger.style.display = 'block';
    }else{
        successful.style.display = 'block';
       return document.getElementById('result').innerHTML = `title: ${title.value}\nbody:${body.value}`;
    }
};
