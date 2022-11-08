

const mensaje1 = document.getElementById("parrafo1")
const mensaje2 = document.getElementById("parrafo2")
const mensaje3 = document.getElementById("parrafo3")
const addCity = document.getElementById("addCity")
const city = document.getElementById("cities")
const loader = document.getElementById("loading")



mensaje1.style.visibility = "hidden"
mensaje2.style.visibility = "hidden"
mensaje3.style.visibility = "hidden"


addCity.onclick = function(){

    loading.style.display = "block"

    if (localStorage.getItem("CITIES") == null){
        localStorage.setItem("CITIES", "[]")
    }
    
    var data = JSON.parse(localStorage.getItem("CITIES"))
    
    if (data.includes(city.value)){
        mensaje3.style.visibility = "visible"
    }
    else
    {
        data.push(city.value)
        localStorage.setItem("CITIES", JSON.stringify(data))
        setTimeout(() => {
            mensaje1.style.visibility = "visible"
            loading.style.display = "none"
        }, 4000);
    } 
}