function initMap() {
    var wsc = {lat: 47.204161, lng: -1.546136};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: wsc
    });
    var marker = new google.maps.Marker({
      position: wsc,
      map: map
    });
  }