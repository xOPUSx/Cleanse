const form = document.querySelector("form")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const username = form.UserEmail.value
    const password = form.UserPassword.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "DailySchedule.asp"
    }else{
        alert("Incorrect Login or Password")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "demo@cleanse.com" && password === "password"){
        return true
    }else{
        return false
    }
}