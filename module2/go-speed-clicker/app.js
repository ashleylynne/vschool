const form = document.getElementById("goClick")
const button = document.getElementById("button")

button.addEventListener("click", function(event){
    event.preventDefault()
    let clicks = button.value
    document.getElementById("output").textContent = clicks
    // console.log(clicks)
    const saveClick = localStorage.setItem("clicked", true)
    for(let i = 0; i < clicks.length; i++) {
        if(saveClick) {
            saveClick.push(clicks[i].value)
        }
    }
    console.log(clicks)
    alert(clicks)
})

    // Make a site that tracks how many times 
    // the user has clicked anywhere on the page 
    // (or a specific button if you prefer) and 
    // displays that click count to the user. 
    // Then, using localStorage or sessionStorage, 
    // make it so the number of clicks will remain 
    // on the screen even after the site is refreshed.
