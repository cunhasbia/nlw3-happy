// create map
const map = L.map('mapid').setView([-30.0376414,-51.2221742], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon 
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon layer
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos 
function addPhotoField() {
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    const input = newFieldContainer.children[0];
    
    if (input.value == '') {
        return;
    }
    
    input.value = '';

    container.appendChild(newFieldContainer);
};

// delete photo
function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = '';
        return;
    }

    span.parentNode.remove();
};

// select yes or no for open on weekends
function toggleSelect(event) {
    document.querySelectorAll('.button-select button').forEach( button => button.classList.remove('active') );

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
};

// validating if lat and lng are filled
function validate(event) {
    const inputLat = document.querySelector('#lat');
    const inputLng = document.querySelector('#lng');

    if (inputLat.value == '' || inputLng.value == '') {
        event.preventDefault();
        alert('Por favor, selecione um local no mapa');
    }
}