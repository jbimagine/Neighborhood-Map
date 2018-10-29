// Create global variables to store our Api url info
const URL_PREFIX = 'https://api.foursquare.com/v2/venues';
const CLIENT_ID ='TWHL2R1LFV2US323VBSFT31HWQGVYFR4ASEDJXG3TGC5NTFM';
const CLIENT_SECRET = 'J34A3A4OEOROQ40CPNYZTUA1UPJ45ITU25TEMGJIJ4PQHJAV';
const VERSION = '20181027';

export function load_google_maps() {

    return new Promise (function(resolve, reject){
        // Define the global callback that will run when google maps is loaded
        window.resolveGoogleMapsPromise = function() {
            // Resolve the google object
            resolve(window.google);
            // Delete the global callback to tidy up since it is no longer needed
            delete window.resolveGoogleMapsPromise;
        }
        //  Load the google maps api
        const script = document.createElement('script');
        const API_KEY = 'AIzaSyDCFIMNeSs4QX_a2p-uM6575ThxdwfePV0';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
    });
}

export function load_places(){
    let city = 'San Francisco, Ca';
    let query = 'food';
    var apiURL = `${URL_PREFIX}/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}%20&limit=50&near=${city}&query=${query}`;
    return fetch(apiURL)
    .then(resp => resp.json())
    .catch(() => alert('there was a loading error.  Please close this pop-up and refresh your page'))
}

export function load_details(VENUE_ID){

    var apiURL= `${URL_PREFIX}/${VENUE_ID}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;
    return fetch(apiURL)
    .then(resp => resp.json())
    .catch(() => alert('there was a loading error.  Please close this pop-up and refresh your page'))
}