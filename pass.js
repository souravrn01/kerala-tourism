var pass= document.getElementsById('pword')
var msg = document.getElementById('message')
var str = document.getElementById('strength')
var reg = /^[\d\w@-]{8,20}$/i

if(reg.test(pass.value)){
    pass.addEventListener('input',()=>{

        if(pass.value.length < 4){
            str.innerHTML= "weak"
            msg.style.color = "#ff5925"
        }
        else if(pass.value.length >= 4 && pass.value.length <8){
            str.innerHTML= "medium"
            msg.style.color = "orange"
        }

        else if(pass.value.length >= 8){
            str.innerHTML = "strong"
            msg.style.color = "#26d730"
        }

    })
}
else{
    str.innerHTML = "invalid"
    msg.style.color = "#ff5925"

}

