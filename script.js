const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0199c39b8mshf96239b97062e7ep195403jsn63492c3e5b47',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=es', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";


const renderNewQuote = async() => {
 const response = await fetch(quoteApiUrl);

 let data = await response.json();

 quote = data.content;

 console.log(data.content);
}
// let arr = quote.split("").map(value => {
//     return  "<span class='quote-chars'>" + value + "</span>"

// });
// quoteSection.innerHTML += arr.join("");

// };


//  userInput.addEventListener("input", () => {
//     let quoteChars = document.querySelectorAll(".quote-chars");
    
//     quoteChars = Array.from(quoteChars);
    
//     let userInputChars = userInput.value.split("");

//         quoteChars.forEach((char, index) => {
//         if(char.innerText == userInputChars[index]){
//             char.classList.add("success");
//         }

//       else if(userInputChars[index] == null){
//            if(char.classList.contains("success")){
//               char.classList.remove("success");
//         }
//        else{
//                 char.classList.remove("fail");
//             }
//         }
//             else{
//                 if(!char.classList.contains("fail")){
//                     char.classList.add("fail");
//                 }
                
//         }
//          let check = quoteChars.every(element=>{
//             return element.classList.contains("success");
//          }); 
//     });
//  });







//  const startTest = () => {
//     userInput.disabled = false;
//     document.getElementById("start-test").style.display =
//     "none";
//     document.getElementById("stop-test").style.display =
//     "block"; 
//  };

// window.onload = () => {
//     userInput.value = "";

 

//     userInput.disabled = true;
//     renderNewQuote();

// }