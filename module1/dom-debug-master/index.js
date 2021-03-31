const colors = ["red", "blue", "green"]



document.getElementById("add").addEventListener("click", function(event) {
    const subItem = createSubItem(event)
    var list = document.getElementById("list")
    list.appendChild(subItem)
    console.log()

})
    

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    
    dropDown.addEventListener("change", function(e){
        e.target.parentNode.style.backgroundColor = e.target.value;
    }); 
    
        return dropDown;
    
}

function createSubItem(event){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem;  
}

 
