// // A user will be able to add list items to the pre-built ul using the pre-built form
// New list items should have the same format as the li's that came with the git repo


const form = document["addItem"]



form.addEventListener("submit", function(event) {
    event.preventDefault();
    const appInput = form.items.value;
    console.log(appInput);
    var container = document.createElement("div")
    var text = document.createElement("p")
    var deleteBTN = document.createElement("button")
    deleteBTN.textContent = "X"
    text.textContent = appInput
    document.getElementById("list").append(container)
    container.append(text)
    container.append(deleteBTN)
    deleteBTN.addEventListener("click", function(){
        list.removeChild(container)
    })
})

// A user will be able to delete items using an items delete button

const deleteBTNs = document.getElementsByClassName("delete-button")

var list = document.getElementById("list");




// n ote: 'this' refers to whatever item you're in
