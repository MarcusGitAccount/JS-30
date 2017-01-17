

navigator.geolocation.watchPosition((data) => {
  console.log('Speed: %s', data.coords.speed);
  console.log('Heading: %s', data.coords.heading);
  console.log('Lat, long: %s %s', data.coords.latitude, data.coords.longitude);
}, (err) => { console.log('Something bad happened') });