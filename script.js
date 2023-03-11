
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
    console.log('b')
 userInput.addEventListener('input', () => {
 let quoteChars = document.querySelectorAll(".quote-chars");
    console.log('c')
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
            console.log('a')
         }
    });
 });
}


 const startTest = () => {
    
    mistakes = 0;
    timer ="";
    
    document.getElementById("start-test").style.display =
    "block";
    location.reload()
 };

window.onload = () => {
    
    
    userInput.value = "";

    document.getElementById("start-test").style.display =
    "block";
    // document.getElementById("stop-test").style.display =
    // "none";
    renderNewQuote();

}

