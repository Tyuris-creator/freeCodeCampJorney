const textInput = document.getElementById("text-input")

const checkBtn = document.getElementById("check-btn")

const result = document.getElementById("result")

checkBtn.addEventListener("click",
()=>{
  let inputValue = textInput.value
  let value = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "")
  
  if(value === ""){
    alert("Please input a value")
  } else {
    let valueReversed = value.split("").reverse().join("")
    if (valueReversed === value) {
      result.textContent = `${inputValue} is a palindrome`
    } else {
      result.textContent = `${inputValue} is not a palindrome`
      console.log(valueReversed + "\n" + value)
    }

  }
})