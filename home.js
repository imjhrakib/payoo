// add money with dom
const validPin = "1234"
document.getElementById("addMoneyBtn").addEventListener("click",function(e){
  e.preventDefault()
  const bank = document.getElementById("bank").value
  const bankAccountNumber = document.getElementById("bankAccountNumber").value
  const addAmount = parseInt(document.getElementById("addAmount").value) || 0
  const pinNumber = document.getElementById("pinNumber").value
  const availableBalance = parseInt(document.getElementById("availableBalance").innerText) || 0

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
  const agentNumber = document.getElementById("agentNumber").value
  const cashOutAmount = document.getElementById("subCashOutAmount").value || 0
  const pinNumber = document.getElementById("pinNumberCashOut").value

  if(agentNumber.length !== 11){
    alert("Please Enter valid number")
    return
  }
  if(pinNumber !== validPin){
    alert("Please Enter valid pin")
    return
  }

  const availableBalance = parseInt(document.getElementById("availableBalance").innerText) || 0

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