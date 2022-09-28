var pass= document.getElementsByName('password')
var msg = document.getElementById('message')
var str = document.getElementById('strength')
var reg = /^[\d\w@-]{8,20}$/i


    pass.addEventListener('keyup',(e)=>{
        if(reg.test(pass.value)){

        if(e.target.value.length < 4){
            str.innerHTML= "weak"
            msg.style.color = "#ff5925"
        }
        else if(e.target.value.length  >= 4 && e.target.value.length  <8){
            str.innerHTML= "medium"
            msg.style.color = "orange"
        }

        else if(e.target.value.length  >= 8){
            str.innerHTML = "strong"
            msg.style.color = "#26d730"
        }
    }
    })



