const travelForm = document['travel-form']

let button = travelForm.submit

button.addEventListener('click', function (event){
    event.preventDefault()
    let fName = travelForm.fName.value
    let lName = travelForm.lName.value
    let age = travelForm.age.value
    let gender = travelForm.gender.value
    let location = travelForm.location.value
    let diet = travelForm.diet
    let dietArr = []
    for(let i = 0; i < diet.length;i++){
        if(diet[i].checked){
            dietArr.push(diet[i].value)
        }
    }
    
    window.alert(`
           first Name: ${fName},
           last Name: ${lName},
           age: ${age},
           gender: ${gender},
           location: ${location},
           diet: ${dietArr}`)
    
})




// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this: