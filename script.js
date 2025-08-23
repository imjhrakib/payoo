document.getElementById("loginBtn").addEventListener('click',function(e){
  e.preventDefault()
  const mobileNumber = 12345678910
  const pinNumber = 1234

  const mobileNumberValue = document.getElementById("mobileNumber").value
  const pinNumberValue = document.getElementById("pinNumber").value

  const mobileNumberValueConverted = parseInt(mobileNumberValue)
  const pinNumberValueConverted = parseInt(pinNumberValue)

  if(mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted){
    window.location.href = "./home.html"
  } 
  else {
    alert('Invalid Credentials')
  }
})