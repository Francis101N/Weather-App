let color = document.querySelector("input")
const form = document.querySelector("form")
const button = document.querySelector("button")
const body = document.querySelector("body")
console.log(color)


form.addEventListener("submit", (e)=>{
  e.preventDefault()

 
    addColors(color.value)
  

  color.value = ""
  
});

function addColors (color){
  
  if(color.value == ""){
    alert("not a known color")
  }else{
    body.style.backgroundColor = color
  }
      
   
}

// function msg (){
//     if (color.value == undefined || NaN){
//      alert("number does not exists")
//     }
// }



