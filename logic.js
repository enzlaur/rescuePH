function changepage(obj)
{	
	console.log("pressed")	
	window.location.href = "front.html";
}

function gotomap(obj)
{	
	console.log("pressed")	
	window.location.href = "map.html";
}

function initialize() 
{
	var myLatlng = new google.maps.LatLng(14.5833,120.9667);
	var mapOptions = {
      	center: new google.maps.LatLng(14.5833, 120.9667),
      	zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'WEBAPPS IGNITION HACKATHON'
  });

	var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">WEBAPPS IGNITION HACKATHON</h1>'+
      '<div id="bodyContent">'+
      '<p><b>WEBAPPS</b>, also referred to as <b>WEBAPPPPPS</b>, is a course ' +
      'Project is about rescuePH. Use rescuePH it is coooooooool'+
      'Members: '+
      'Candice Canoso '+
      'Joshua Guevara'+
      'Laurenz Tolentino'+
      'This is our project ahihihihihihihihihi'+
      'Features not yet included: SMS to get location. View all tweets.'+
      'Features included: awesome UI Design'+
      'TEAM LAKAJO.</p>'+
      '<p>Attribution: Gradient, <a href="http://www.strikingly.com/gradient">'+
      'Gradient Project'+
      '(last visited Feb 1, 2014).</p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


  	google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });  
}
google.maps.event.addDomListener(window, 'load', initialize);  