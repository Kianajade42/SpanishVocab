
const quoteApiUrl = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0199c39b8mshf96239b97062e7ep195403jsn63492c3e5b47',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=es', quoteApiUrl)
	.then(response => response.json())
    .then(response => {
    let quoteSection = document.getElementById("quote");
    quoteSection.innerText = `${response.content}`
    })
	.catch(err => console.error(err));

const userInput = document.getElementById("quote-input");

let quote = "";
let mistakes = 0;

const renderNewQuote = async() => {
const response = await fetch(quoteApiUrl);

let data = await response.json();

quote = data.content;

 console.log(data.content);

let arr = quote.split("").map(value => {
    return  "<span class='quote-chars'>" + value + "</span>"

});
quoteSection.innerHTML += arr.join("");
console.log(arr)
};

 userInput.addEventListener("input", () => {
    let quoteChars = document.querySelectorAll(".quote-chars");
    
    quoteChars = Array.from(quoteChars);
    
    let userInputChars = userInput.value.split("");

        quoteChars.forEach((char, index) => {
        if(char.innerText == userInputChars[index]){
            char.classList.add("success");
        }

      else if(userInputChars[index] == null){
           if(char.classList.contains("success")){
              char.classList.remove("success");
        }
       else{
                char.classList.remove("fail");
            }
        }
            else{
                if(!char.classList.contains("fail")){
                    mistakes += 1;
                    char.classList.add("fail");
                }
                document.getElementById("mistakes").innerText =
                mistakes;   
        }
         let check = quoteChars.every(element=>{
            return element.classList.contains("success");
         }); 
         if(check){
            displayResult();
         }
    });
 });

// function updateTimer(){
//     if(time == 0){
//         displayResult();
//     }
//     else{
//         document.getElementById("timer").innerText =
//         --time + "s";
//     }
// }

 

//  const displayResult = () => {
//     document.querySelector(".result").style.display =
//     "block";
//     clearInterval(timer);
//     document.getElementById("stop-test").style.display =
//     "none";
//     userInput.disabled = true;
//     let timeTaken = 1;
//     if(time != 0){
//         timeTaken = (60 - time) / 100;
//     }
//     document.getElementById("wpm").innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + " wpm";
//     document.getElementById("accuracy").innerText =
//     Math.round((userInput.value.length - mistakes) / userInput.value.length * 100) + "%";
//  }; 

 const startTest = () => {
    
    mistakes = 0;
    timer ="";
    userInput.disabled = false;
    timeReduce()
    document.getElementById("start-test").style.display =
    "none";
    document.getElementById("stop-test").style.display =
    "block"; 
 };

window.onload = () => {
    
    
    userInput.value = "";

    document.getElementById("start-test").style.display =
    "block";
    document.getElementById("stop-test").style.display =
    "none";

    userInput.disabled = true;
    renderNewQuote();

}

