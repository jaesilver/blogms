let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user)) => {
    if(user){
        //user is login
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
        <li class="link-item"><a href="#" class="link">Logout</a></li>
        `
    } else{
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Login</a></li>
        `
    }
}