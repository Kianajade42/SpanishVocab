const userInput = document.getElementById("quote-input");
const quoteSection = document.getElementById("quote");
let mistakes = 0;
let quote = ""

const renderNewQuote = async() => {
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
    quoteSection.innerHTML = `${response.content}`
    })


let arr = quote.split('').map(value => {    
    return  "<span class='quote-chars'>" + value + "</span>"
    
    
});

quoteSection.innerHTML += arr.join("");

};

userInput.addEventListener("input", () => {
    console.log("letter")
 let quoteChars = document.querySelectorAll(".quote-chars");

    quoteChars = Array.from(quoteChars);
    
let userInputChars = userInput.value.split("");
    console.log(userInputChars)
    console.log(quoteChars)
    
        quoteChars.forEach((char, index) => {
        if(char.innerText == userInputChars[index]){
            console.log("success")
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
            console.log('a')
         }
    });
 });


 const startTest = () => {
    
    mistakes = 0;
    document.getElementById("start-test").style.display =
    "none";
    location.reload()
 };

window.onload = () => {
    
    userInput.value = "";
    document.getElementById("start-test").style.display =
    "block";
    renderNewQuote();

}

