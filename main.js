let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");

let savedStringValue = localStorage.getItem('savedStringValue');



if(savedStringValue === null){
    savedString.innerText = 'Nothing Saved';

} else {
    savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener('submit', function(event){
    event.preventDefault();



    localStorage.setItem('savedStringValue', stringInput.value);

    console.log(localStorage.getItem('savedStringValue'));
})





////LIST BUILDER

let stringSaverForm = document.querySelector("#string-saver");

let saveThisString = document.querySelector("#enter-string");

let list = localStorage.getItem('list');

let stringList = document.querySelector("#listing");

function setUpStrings(){
    
    list = localStorage.getItem('list')

if(list === null){
    list = [];
}else{
    list = JSON.parse(list);

    for(let str of list){
        console.log(str);

        let listElement = document.createElement("li");
        listElement.className = "list-builder-item"

        stringList.appendChild(listElement);

        listElement.innerHTML = str;

    }
}

}
setUpStrings();

stringSaverForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    
    
    
    let newString = saveThisString.value;

  

    //add newString to strings array
    list.push(newString);
    //logging it just to see that it's working correctly
    console.log(newString);
        let listElement = document.createElement("li");
        listElement.className = "list-builder-item"

        stringList.appendChild(listElement);

        listElement.innerHTML = newString;


    localStorage.setItem('list',JSON.stringify(list));
})


//PAGE COUNTER

let pageCounter = localStorage.getItem('on_load_counter');
   
    if (pageCounter === null) {
        pageCounter = 0;
    }
    pageCounter++;


    localStorage.setItem("on_load_counter", pageCounter);
    document.getElementById('on-load-counter').innerHTML = pageCounter;
