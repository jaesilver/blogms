let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('login');
const blogSection = document.querySelector('.blogs-section');

/*
auth.onAuthStateChanged((user) => {
    if(user){
        login.style.display = "none";
    }   else{
        setupLoginButton();
    }

})
*/

/*const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL) {
                login.style.display = "none";

  //              console.log(authResult);
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}
*/

//setupLoginButton();


// fetch user made blogs

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
        
    </div>
    `;
}


const deleteBlog = (id) => {
    db.collection("blogs").doc(id).delete().then(() => {
        location.reload();
    })
    .catch((error) => {
        console.log("Error deleting the blog");
    })
}

















/*
const getUserWrittenBlogs = () => {
    db.collection("blog")
    .get()
    .then((blogs) => {
        blogs.forEach((blog) => {
            createBlog(blog);
        })
    })
    .catch((error) => {
        console.log("Error getting blogs");

    })

}

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;

}
*/