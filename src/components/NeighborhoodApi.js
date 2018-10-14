class Helper {
    static baseURL(){
        return 'https://api.foursquare.com/v2'
    }

	static auth(){
		const keys = {
			client_id: 'TWHL2R1LFV2US323VBSFT31HWQGVYFR4ASEDJXG3TGC5NTFM',
            client_secret: 'J34A3A4OEOROQ40CPNYZTUA1UPJ45ITU25TEMGJIJ4PQHJAV',
            v:'20181007'
		};
        return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join('&');
	}

	static urlBuilder(urlParams){
		if(!urlParams){
			return '';
		}

		return Object.keys(urlParams)
			.map(key => `${key}=${urlParams[key]}`)
			.join('&');
	};

	static headers() {
		return {
			Accept: 'application/json'
		};
	}

	static simpleFetch(endPoint, method, urlParams){
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlParams)}`,
			requestData
			).then(res => res.json());

	}
}

export default class NeighborhoodApi {
	static search(urlParams) {
		return Helper.simpleFetch('/venues/search', 'GET', urlParams);
	}

	static getVenueDetails(VENUE_ID){
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET');
	}

	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET');
	}
}