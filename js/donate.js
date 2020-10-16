

function formVal(){ 
    const fullName =  document.getElementById( "inputEmail").value 
    const LastName =  document.getElementById( "inputPassword").value
    const PetsName=  document.getElementById( "inputEmails").value
    const Location =  document.getElementById( "input-group-text").value
    const AboutPet =  document.getElementById( "inputText").value
    const inputGroupFile01 =  document.getElementById( "inputGroupFile01").value
let aldo = {
    fullName:fullName,
    LastName: LastName,
    PetsName:PetsName,
    Location:Location,
    AboutPet:AboutPet,
    inputGroupFile01:inputGroupFile01}
    localStorage.setItem('userdata',JSON.stringify(aldo))

}
console.log( localStorage.getItem('userdata'))