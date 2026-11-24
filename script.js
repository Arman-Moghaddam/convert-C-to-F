let titr = document.querySelector(".titr")
let vorodi = document.querySelector(".vorodi")
let result = document.querySelector(".result")
let convert = document.querySelector(".convert")
let reset = document.querySelector(".reset")
let change = document.querySelector(".change")
let mode = "C"

convert.addEventListener("click", function(){
    if(mode == "C"){
        if (!vorodi.value || isNaN(vorodi.value)){
            result.innerHTML = "input is empty!!!"
            result.style.color = "red"
        } else{
            result.style.display = "block"
            result.innerHTML = `${vorodi.value}°C to ${+vorodi.value * 1.8 + 32}°F`
            result.style.color = "green"
        }
    } else{
        if (!vorodi.value || isNaN(vorodi.value)){
            result.innerHTML = "input is empty!!!"
            result.style.color = "red"
        } else{
            result.style.display = "block"
            result.innerHTML = `${vorodi.value}°F to ${(+vorodi.value - 32) / 1.8}°C`
            result.style.color = "green"
        }
    }
    
})

reset.addEventListener("click", function(){
    result.style.display = "none"
    vorodi.value = ""
})

change.addEventListener("click", function(){
    if (mode == "C"){
        titr.innerHTML = "Conver °F to °C"
        result.style.display = "none"
        document.title = "°F to °C"
        vorodi.placeholder = "°F"
        mode = "F"
    } else{
        titr.innerHTML = "Conver °C to °F"
        result.style.display = "none"
        vorodi.placeholder = "°C"
        document.title = "°C to °F"
        mode = "C"
    }
})