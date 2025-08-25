const validPin = "1234"
const transactionsData = []
// function to get input values number
function getInputValuesNumber(id) {
  return parseInt(document.getElementById(id).value) || 0
}

// function to get input values number from innerText
function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText) || 0
}

// function to get input values
function getInputValues(id) {
  return document.getElementById(id).value
}

// function to set available balance 
function setAvailableBalance(id, newBalance) {
  document.getElementById(id).innerText = newBalance
}

// click to toggle display none section
function clickToToggleDisNone(id) {
  document.getElementById(id).style.display = "none"
}

// handle Toggle 
function handleToggle(id) {
  const forms = document.getElementsByClassName("form")

  for (const form of forms) {
    form.style.display = "none"
  }

  document.getElementById(id).style.display = "block"
}

// handle toggle button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("formBtn")

  for (const btn of formBtns) {
    btn.classList.remove("bg-[#0874f20d]", "border-[#0808081a]")
    btn.classList.add("border-[#0808081a]")
  }
  document.getElementById(id).classList.remove("border-[#0808081a]")
  document.getElementById(id).classList.add("bg-[#0874f20d]", "border-[#0874f2]")
}

// add transection
function addTransaction(name) {
  const data = {
    name: name,
    date: new Date().toLocaleTimeString()
  }
  transactionsData.push(data)
}


// add money 
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault()
  const bank = getInputValues("bank")
  const bankAccountNumber = getInputValues("bankAccountNumber")
  const addAmount = getInputValuesNumber("addAmount")
  const pinNumber = getInputValues("pinNumber")
  const availableBalance = getInnerText("availableBalance")

  if (bankAccountNumber.length !== 11) {
    alert("Enter a valid account number")
    return
  }

  if (pinNumber !== validPin) {
    alert("Enter a valid pin number")
    return
  }

  const totalBalance = addAmount + availableBalance

  setAvailableBalance("availableBalance", totalBalance)

  addTransaction("Add Money")
  alert(addAmount + "$ successfully added")

})

// cash out
document.getElementById("withdrawBtn").addEventListener("click", function (e) {
  e.preventDefault()
  const agentNumber = getInputValues("agentNumber")
  const cashOutAmount = getInputValuesNumber("CashOutAmount")
  const pin = getInputValues("cashOutPin")

  if (agentNumber.length !== 11) {
    alert("Please Enter valid number")
    return
  }
  if (pin !== validPin) {
    alert("Please Enter valid pin")
    return
  }

  const availableBalance = getInnerText("availableBalance")

  const newBalance = availableBalance - cashOutAmount

  setAvailableBalance("availableBalance", newBalance)

  addTransaction("Cash Out")
  alert("You have withdrawn $" + cashOutAmount +" successfully.")
})

// transfer money section 
document.getElementById("sendNowBtn").addEventListener("click", function (e) {
  e.preventDefault()
  const transAccNum = getInputValues("transAccNum")
  const transferAmount = getInputValuesNumber("transferAmount")
  const pin = getInputValues("transferPin")

  if (transAccNum.length !== 11) {
    alert("Please Enter valid number")
    return
  }
  if (pin !== validPin) {
    alert("Please Enter valid pin")
    return
  }

  const availableBalance = getInnerText("availableBalance")

  const newBalance = availableBalance - transferAmount

  setAvailableBalance("availableBalance", newBalance)
  addTransaction("Transfer Money")
  alert("Successfully transferred $"+ transferAmount+" to account " + transAccNum)
})
// get bonus section
document.getElementById("getBonusBtn").addEventListener("click", function (e) {
  e.preventDefault()
  const bonusCoupon = getInputValues("getCoupon")
  const coupon = "newbie"
  if (coupon !== bonusCoupon) {
    alert("Please Enter valid Coupon")
    return
  }


alert("Bonus has been successfully credited.");

  addTransaction("Get Bonus")
})

// Pay bill section
document.getElementById("payNowBtn").addEventListener("click", function (e) {
  e.preventDefault()
  const accNum = getInputValues("billerAccountNumber")
  const amount = getInputValuesNumber("payBillAmount")
  const pin = getInputValues("payPin")

  if (accNum.length !== 11) {
    alert("Please Enter valid number")
    return
  }
  if (pin !== validPin) {
    alert("Please Enter valid pin")
    return
  }

  const availableBalance = getInnerText("availableBalance")

  const newBalance = availableBalance - amount

  setAvailableBalance("availableBalance", newBalance)

  addTransaction("Pay Bill")
  alert(`Bill payment of $${amount} successful.`);
})

// transactions section
document.getElementById("transaction").addEventListener("click", function () {
  const transactionContainers = document.getElementById("transactionContainer")

  transactionContainers.innerHTML = ""

  for (const data of transactionsData) {
    const div = document.createElement("div")
    div.innerHTML = `
      <div class="bg-white flex justify-between items-center p-4 rounded-2xl mb-3">
        <div class="rounded-full flex justify-between items-center gap-4">
          <div class="bg-[#0808080d] rounded-full p-3">
            <img src="./assets/wallet1.png" alt="">
          </div>
          <div>
            <h1 class="text-[#080808b3]/70 text-[16px]">${data.name}</h1>
            <p class="text-[#080808b3]/70 text-[12px]">Today ${data.date}</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical text-[#080808]"></i>
        </div>

      </div>
      `
    transactionContainers.appendChild(div)
  }


})
// toggling features
document.getElementById("addMoney").addEventListener("click", function () {
  handleToggle("addMoneyForm")
  handleButtonToggle("addMoney")

})

document.getElementById("cashOut").addEventListener("click", function () {
  handleToggle("cashOutForm")
  handleButtonToggle("cashOut")
})
document.getElementById("transfer").addEventListener("click", function () {
  handleToggle("transferForm")
  handleButtonToggle("transfer")
})
document.getElementById("getBonus").addEventListener("click", function () {
  handleToggle("getBonusForm")
  handleButtonToggle("getBonus")
})
document.getElementById("payBill").addEventListener("click", function () {
  handleToggle("payBillForm")
  handleButtonToggle("payBill")
})
document.getElementById("transaction").addEventListener("click", function () {
  handleToggle("transactionForm")
  handleButtonToggle("transaction")
})