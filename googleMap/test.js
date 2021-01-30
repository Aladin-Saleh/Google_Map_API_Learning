/*Initialisation de la map,version proposé par google dans la documentation*/

/*function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        center: posMarker,//Focus de la vue de la map
        zoom: 16,
      });*/

/*Set du marker*/
//Version de la doc google
/*const marker = new google.maps.Marker({
  position:posMarker,
  map:map //on lui affecte une map

})*/

let posMarker = {lat:48.404676, lng:2.70162};/*Position du marker longitude et latitude*/
let posMarker2 = {lat:49.404676, lng:2.70162};/*Position du marker longitude et latitude*/
let posMarker3 = {lat:48.504676, lng:2.70162};/*Position du marker longitude et latitude*/

var optionMap = 
{
  zoom : 18,
  center: {lat:48.404676, lng:2.70162}

}






function initMap()
{
 var map = new google.maps.Map(document.getElementById("map"),optionMap);



 var markersListe = [
  {
    coords:posMarker,
  },
  {
    coords:posMarker2,
  },
  {
    coords:posMarker3,
  }
];



function addMarker(props){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:map,
  });
}


for (let index = 0; index < markersListe.length; index++) {
  addMarker(markersListe[index]);
}
}



  
  