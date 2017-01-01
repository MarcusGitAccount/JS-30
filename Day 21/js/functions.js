
function watchPositionSucces(data){
  document.body.innerHTML = JSON.stringify(data) + data.timestamp;
}

function watchPositionError(err){
  console.error(err);
}

setInterval(function(){
  navigator.geolocation.watchPosition(watchPositionSucces, watchPositionError);
}, 1000);