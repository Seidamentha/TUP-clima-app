const card = document.getElementById("card")
card.style.visibility = "hidden"
const ciudad = document.getElementById("ciudad")
const temperatura = document.getElementById("temperatura")
const termica = document.getElementById("termica")
const humedad = document.getElementById("humedad")
const viento = document.getElementById("viento")
const presion = document.getElementById("presion")
const select = document.getElementById("select")
const ciudades = JSON.parse(localStorage.getItem("CITIES"))
const consultar = document.getElementById("consultar")
const loader = document.getElementById("loading")

function showLoader(){
        loading.style.display = "block"
}


function AgregarCiudades(){
    for(let i = 0; i < Object.keys(ciudades).length; i++){
        select.options.add(new Option(ciudades[i]))
    }  
}

consultar.onclick = async function ObtenerDatos(){
        
        showLoader()
    
        try{
            let opcion = document.getElementById("select").value;
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${opcion}&appid=5b4941f391e1184446709ffd649b74a5&units=metric&lang=es`)
            const datos = await respuesta.json()
            if(datos.cod !== 200) {
                alert("La ciudad ingresada no se encuentra en la API o se produjo un error al consultar");
                loading.style.display = "none"
            }
            setTimeout(() => {
                ciudad.innerHTML = datos.name
                temperatura.innerHTML = "Temperatura: " +  datos.main.temp + " grados"
                termica.innerHTML = "Térmica: " + datos.main.feels_like + " grados"
                humedad.innerHTML = "Humedad: " + datos.main.humidity + " %"
                presion.innerHTML = "Presión: " + datos.main.pressure
                viento.innerHTML = "Viento: " + datos.wind.speed
                loading.style.display = "none"
                card.style.visibility = "visible"
            }, 4000);
            
        }
        catch(error){
            alert("Se ha producido un error.")
        }
}

window.onload = AgregarCiudades