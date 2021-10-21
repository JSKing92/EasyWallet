function traerinformacion(){
    var info = localStorage.getItem("informacion")
    var array = info.split(',')

    var b1 = document.getElementById("bolsi1")
    b1.innerHTML = array[0]
    
    var b1 = document.getElementById("bolsi2")
    b1.innerHTML = array[1]
    
    var b1 = document.getElementById("bolsi3")
    b1.innerHTML = array[2]

    var b2 = document.getElementById("bol1")
    b2.innerHTML = array[0]

    var b2 = document.getElementById("bol2")
    b2.innerHTML = array[1]

    var b2 = document.getElementById("bol3")
    b2.innerHTML = array[2]

    var b3 = document.getElementById("disponible")
    b3.innerHTML = "$"+array[3]
}

traerinformacion()

var buton = document.getElementById("enviar")

buton.addEventListener("click", function(e){
    e.preventDefault()
    var c = document.getElementById("selecc").value
    var d = document.getElementById("cantidad").value
    if(c=="1"){
        var y = document.getElementById("cant1")
        y.innerHTML = "$"+d

    }

    if(c=="2"){
        var y = document.getElementById("cant2")
        y.innerHTML = "$"+d

    }

    if(c=="3"){
        var y = document.getElementById("cant3")
        y.innerHTML = "$"+d

    }
})
