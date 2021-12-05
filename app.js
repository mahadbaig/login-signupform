// alert("hello")

var pass = document.getElementById("password")
var passicon = document.getElementById("passicon")
// console.log(pass)
function showpass() {
    if(pass.type === "password"){
        pass.type = "text"
        passicon.classList.add("fa-eye-slash")
    }else{
        pass.type = "password"
        passicon.classList.remove("fa-eye-slash")

    }
}