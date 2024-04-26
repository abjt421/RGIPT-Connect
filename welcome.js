firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


const logoutLink = document.getElementById("logoutLink");

// Add a click event listener to the logout link
logoutLink.addEventListener("click", function(event) {
    // Prevent the default behavior of the anchor tag (e.g., prevent page navigation)
    event.preventDefault();

    // Perform your logout functionality here (e.g., call a logout function)
    logout();
});

function logout(){
    firebase.auth().signOut()
}
