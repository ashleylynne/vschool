// header

var header = document.createElement("h1");

header.textContent += "Javascript made this!!";
header.style.display += "flex";
header.style.textAlign += "center";
header.style.flexDirection += "column";

document.body.prepend(header);

// h2

var wrapper = document.createElement("div");

wrapper.textContent += "Ashley Stanley ";
wrapper.style.color += "peachpuff";
wrapper.style.fontSize += "24px"

var text = document.createElement("span");

text.textContent += "wrote this";
text.style.color += "black";

header.append(wrapper, text);

wrapper.appendChild(text);


// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.

// var positiveMes = document.getElementsByClassName("messages");
// positiveMes.textContent += "this messaging app goes hard ";

//I tried this and got kind of stuck. it seemed to have deleted all the style code that was previously running in my program.

// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

// var clearBTN = document.getElementById("clear-button");
// clearBTN.addEventListener("click", "onmousedown");

// function clearText() {
//     positiveMes.remove();
// } console.log(positiveMes);

document.getElementById("clear-button").addEventListener("click", onclick);

function onclick () {
    var allMessages = document.getElementsByClassName("text");
    console.log(allMessages)
    for (var i = 0; i < allMessages.length; i++) {
        allMessages[i].textContent = "  ";
    }

}


