const objectJson = {
  name: "chomok",
  Address: "Purbadhala",
  Study: "Engineering",
  Institute: "MPI",
  Roll: 292324,
};

// console.log(objectJson);
// console.log("this file of data type is", typeof objectJson);

const jsonStringify = JSON.stringify(objectJson);
// console.log(jsonStringify);
// console.log("this file of data type is", typeof jsonStringify);

const stringifyParseJson = JSON.parse(jsonStringify);
// console.log(stringifyParseJson);
// console.log("this file of data type is", typeof stringifyParseJson);

fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
// .then((data) => console.log(data));

// const loadApi = () => {

//     const url = "https://jsonplaceholder.typicode.com/posts"
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayJson(data))
// }

// const displayJson = (posts) => {
//     posts.forEach(p => console.log(p))

// }

// const loadApi = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayJsons(data));
// };
// const displayJsons = (post) => {
//   const postContainer = document.getElementById("post-container");
//   post.forEach((showData) => {
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     p.innerText = showData.p;
//     li.innerText = showData.id;
//     console.log(li);

//     postContainer.appendChild(li)
//   });
// };

// const loadApi = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayJson(data));
// };
// const displayJson = (posts) => {
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";
//   posts.forEach((post) => {
//     //get cointainer an d Empty the container

//     const postCard = document.createElement("div");
//     postCard.innerHTML = `

//         <div class="post-card">
//           <h2>${post.title}</h2>
//           <p>${post.body}</p>
//         </div> `;

//       //append post card
//       postContainer.append(postCard)
//       console.log(postCard);

//     });
// };

const loadApi = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayJson(data));
};
const displayJson = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
   <div class="post-card">
        <p>${post.id}</p>
        <h1>${post.title}</h1>
        <p>
          ${post.body}
        </p>
      </div>`;

    postContainer.append(postCard);
  });
};
