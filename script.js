const API_KEY = "UpRnqy1xr2nhHninILIMSlJuWeaKFHT9QXCT9EdX";
const url = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la solicitud a la API");
    }
  })
  .then(apod => {
    // Actualiza el contenido de la página con la información obtenida
    document.getElementById("apodImage").src = apod.url;
    document.getElementById("apodTitle").innerText = apod.title;
    document.getElementById("apodDescription").innerText = apod.explanation;
    document.getElementById("apodDate").innerText = apod.date;
  })
  .catch(error => {
    console.error(error);
  });
