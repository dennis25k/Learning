/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data)) */

/* fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
    if (!response.ok){
        throw new Error(response.status);
    }
    return response.json()})
.then(person => console.log(`${person.name} works for ${person.company.name}`)) */

async function getPost() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/3")  
   const data = await response.json();
   console.log(`${data.name} works for ${data.company.name}`)
}

getPost();

