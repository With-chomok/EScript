loadComment = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(datas => displayCard(datas))
}
// {
//     "postId": 99,
//     "id": 493,
//     "name": "ut praesentium sit eos rerum tempora",
//     "email": "Gilda@jacques.org",
//     "body": "est eos doloremque autem\nsimilique sint fuga atque voluptate est\nminus tempore quia asperiores aliquam et corporis voluptatem\nconsequatur et eum illo aut qui molestiae et amet"
// }


displayCard = (data) => {
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML = ""
    data.forEach(comment => {
        
        
        const commentCard = document.createElement("div");
        commentCard.innerHTML = `
        <div class ="comment-card">
        <p>${comment.id}</p>
        <h2>${comment.name}</h2>
        <p>${comment.body}</p>
        <h5>${comment.email}</h5>
        </div> `;
        commentContainer.append(commentCard)
    })
    
}