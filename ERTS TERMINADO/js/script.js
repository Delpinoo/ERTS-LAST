function iniciarMap(){
    var coord = {lat:-33.4300568 ,lng: -70.6735297};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}