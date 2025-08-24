// function to get input values number
function getInputValuesNumber(id){
  return parseInt(document.getElementById(id).value) || 0
}

// function to get input values number from innerText
function getInputValuesNumberInnerText(id){
  return parseInt(document.getElementById(id).innerText) || 0
}

// function to get input values
function getInputValues(id){
  return document.getElementById(id).value
}


// add money with dom
const validPin = "1234"
document.getElementById("addMoneyBtn").addEventListener("click",function(e){
  e.preventDefault()
  const bank = getInputValues("bank")
  const bankAccountNumber = getInputValues("bankAccountNumber")
  const addAmount = getInputValuesNumber("addAmount")
  const pinNumber = getInputValues("pinNumber")
  const availableBalance = getInputValuesNumberInnerText("availableBalance")

  if(bankAccountNumber.length !== 11) {
    alert("Enter a valid account number")
    return
  }

  if(pinNumber !== validPin){
    alert("Enter a valid pin number")
    return
  }

  const totalBalance = addAmount + availableBalance

  document.getElementById("availableBalance").innerText = totalBalance
})

// cash out with dom
document.getElementById("withdrawBtn").addEventListener("click",function(e){
  e.preventDefault()
  const agentNumber = getInputValues("agentNumber")
  const cashOutAmount = getInputValuesNumber("subCashOutAmount")
  const pinNumber = getInputValues("pinNumberCashOut")

  if(agentNumber.length !== 11){
    alert("Please Enter valid number")
    return
  }
  if(pinNumber !== validPin){
    alert("Please Enter valid pin")
    return
  }

  const availableBalance = getInputValuesNumberInnerText("availableBalance")

  const newBalance = availableBalance - cashOutAmount

  document.getElementById("availableBalance").innerText = newBalance

})

// toggling features

document.getElementById("addMoney").addEventListener("click",function(){
  document.getElementById("cashOutForm").style.display = "none"
  document.getElementById("addMoneyForm").style.display = "block"
})


document.getElementById("cashOut").addEventListener("click",function(){
  document.getElementById("addMoneyForm").style.display = "none"
  document.getElementById("cashOutForm").style.display = "block"
})