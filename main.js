let latitude=12.833582571903332,longitude=77.66964753009137;

// Initializing Mapbox
mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map=new mapboxgl.Map({
	container:'map',
	style:'mapbox://styles/mapbox/streets-v11',
	center:[longitude,latitude],
	zoom:16
});

map.addControl(
	new MapboxGeocoder({
		accessToken:mapboxgl.accessToken,
		mapboxgl:mapboxgl
	})
);


var img1=document.querySelector("#taj")
var marker1=new mapboxgl.Marker({
	element:img1
})
	.setLngLat([78.04215017485244,27.175275637911287])
	.addTo(map);

var img2=document.querySelector("#gateway")
var marker2=new mapboxgl.Marker({
	element:img2
})
	.setLngLat([72.83466502915043,18.922034809761804]) 
	.addTo(map);

var img3=document.querySelector("#gate")
var marker3=new mapboxgl.Marker({
	element:img3
})
	.setLngLat([77.22952604887124,28.615114396946247])
	.addTo(map);


var img4=document.querySelector("#lotus")
var marker4=new mapboxgl.Marker({
	element:img4
})
	.setLngLat([77.25884785860768,28.55354849452644])
	.addTo(map);

var img5=document.querySelector("#victoria")
var marker5=new mapboxgl.Marker({
	element:img5
})
	.setLngLat([88.34258998859207,22.544936974951263])
	.addTo(map);