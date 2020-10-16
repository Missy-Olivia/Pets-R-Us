

function formVal(){ 
    const fullName =  document.getElementById( "inputEmail").value 
    const LastName =  document.getElementById( "inputPassword").value
    const Address=  document.getElementById( "inputEmails").value
    const Location =  document.getElementById( "input-group-text").value
    const Tel =  document.getElementById( "inputText").value
let adoptdata = {
   YourName:fullName, 
    PetName: LastName,
   Address:Address,
   Email:Location,
   PhoneNumber:Tel,
  }
    localStorage.setItem('adoptdata',JSON.stringify(adoptdata))

}
console.log( localStorage.getItem('adoptdata'))