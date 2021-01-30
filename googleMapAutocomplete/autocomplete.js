var latitude = [];
var longitude = [];



function intilize() {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById("inputtxt"));
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
    place = autocomplete.getPlace();
    var location = "<br/><h1>Adresse:</h1> " + place.formatted_address + "<br/>";
    location += "<br/><h1>Latitude: </h1>" + place.geometry.location.lat() + "<br/>";
    location += "<br/><h1>Longitude: </h1>" + place.geometry.location.lng();
    document.getElementById('res').innerHTML = location;
    latitude.push(place.geometry.location.lat());
    
    });


};

        
        


        function initMap()
        {
             var map = new google.maps.Map(document.getElementById("map"),{
                zoom:8,
                center:{lat:48.404676, lng:2.70162},

             });
            
        
        
        }
        
        