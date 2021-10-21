
var btn = document.getElementById("btn")

btn.addEventListener("click",function(e){
    e.preventDefault()
    var bolsillo1 = document.getElementById("bolsillo1").value
    var bolsillo2 = document.getElementById("bolsillo2").value
    var bolsillo3 = document.getElementById("bolsillo3").value
    var cantidad = document.getElementById("cantidad").value

    if(bolsillo1==""||bolsillo2==""||bolsillo3==""||cantidad==""){
        alert("Ingrese la informacion completa")
    }else{
        localStorage.setItem("informacion",[bolsillo1,bolsillo2,bolsillo3,cantidad])
        window.location.href = "wallet.html"
    }
})