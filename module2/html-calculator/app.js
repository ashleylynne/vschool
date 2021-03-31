
const form = document["mathProblems"]


// Addition button

// All of these functions work except addition. Instead of adding the values together it puts them together.
// Example: 3 + 5 returnes 35

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let add1 = form.add1.value
    let add2 = form.add2.value
    let sum = add1 += add2
    console.log(sum)


})

// Subtraction button

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let sub1 = form.subtract1.value
    let sub2 = form.subtract2.value
    let diff = sub1 -= sub2
    console.log(diff)
})

// Multiplication button

form.addEventListener("submit", function(event) {  
    event.preventDefault();  
    let mult1 = form.mult1.value
    let mult2 = form.mult2.value
    let prod = mult1 *= mult2
    console.log(prod)

})



  // You will have one section (<div>) for each math operation (so 3 sections) total
    //[X] Each section has two inputs to take the first and second numbers
    //[X] Each section will have a button to perform the operation
    //[X] You will inject the result into the HTML (not an alert)
    // Your website will have 3 colors
        // Style is not showing up. I'm not sure why.
    // Your website will have proper padding/spacing to lay things out nicely











// Notes from lesson:

/* <form> tag

<input type = “text”/> tag for user text input
<button> tag to submit info 

Give a form a name attribute in HTML.
Access using document.formName
Ex:

const form = document["my-form"]

Submit event:

form.addEventListener(“submit”, function(event){
	event.preventDefault()
	alert(“It’s working”)
})

Give input a name in HTML

const someInput = form.thisInput.value
form.someInput.value = “” (to clear out the value)

To capture value and append it to the DOM as an element

    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Harry Potter</h1>
    h1.textContent = firstName + " " + lastName
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1) */




  