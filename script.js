window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(\
        '.temperature-description'
);
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationT   imezone = document.querySelector('.location-timezone');

    



    if (navegator.geolocation){
        navegator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://api.darksky.net/forecast/d7f702861e4fc278931d62b1b8efdabf/${lat},${long}';
            fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const { temperature, summary } = data.currently;
        // Set DOM Elements from the API
        temperatureDegree.textContent


     });
   });
  }
});
