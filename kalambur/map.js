function initMap() {
  // координати
  var pos = {lat: 50.44941386168744, lng: 30.50809751089154};

  // створення карти
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: pos
  });

  // маркер
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: 'Так, ми тут!'
  });

   //вікно з інформацією
   var info = new google.maps.InfoWindow({
    content: '<div class="info-content"><p>Наш графік роботи:<br>Пн-Нд<br>09:00-21:00<br><br>Дякуюємо ;)</p></div>'
    

    });
   marker.addListener("click", function(){
    info.open(map, marker);
   });

}
 