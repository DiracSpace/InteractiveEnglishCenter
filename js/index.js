/* DOM manipulation js */
// load materialize
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});

(function (d, m) {
  var kommunicateSettings = { "appId": "75026ecb075b74a8285bc7e78a5703a5", "popupWidget": true, "automaticChatOpenOnNavigation": true };
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

function initMap() {
  var schoolCoord = { lat: 22.744045, lng: -98.977668 };
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 19, center: schoolCoord });
  var marker = new google.maps.Marker({ position: schoolCoord, map: map });
}