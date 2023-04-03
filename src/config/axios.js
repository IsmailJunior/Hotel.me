import axios from 'axios';

const instance = axios.create( {
	baseURL: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels',
	params: {
		domain: 'AE',
		sort_order: 'REVIEW',
		locale: 'en_GB',
		checkout_date: '2023-09-27',
		region_id: '2872',
		adults_number: '1',
		checkin_date: '2023-09-26',
		available_filter: 'SHOW_AVAILABLE_ONLY',
		meal_plan: 'FREE_BREAKFAST',
		guest_rating_min: '8',
		price_min: '10',
		page_number: '1',
		children_ages: '4,0,15',
		amenities: 'WIFI,PARKING',
		price_max: '500',
		lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
		payment_type: 'PAY_LATER,FREE_CANCELLATION',
	},
	headers: {
		Accept: {
			"Content-Type": "application/json"
		},
		'X-RapidAPI-Key': 'f6134ebf80msh0949d7f7e58dbd4p1d3c0djsn3d77abc69828',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
} );

export default instance;