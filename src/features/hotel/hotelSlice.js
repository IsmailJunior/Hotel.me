import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	startDate: '2023-09-27',
	endDate: '2023-09-26',
	cityQuery: 'oregon',
	hotels: [],
	status: 'idel',
	error: null
};

let cityOptions = {
	method: 'GET',
	url: 'https://hotels-com-provider.p.rapidapi.com/v2/regions',
	params: { locale: 'en_US', query: 'New york', domain: 'US' },
	headers: {
		'X-RapidAPI-Key': 'f6134ebf80msh0949d7f7e58dbd4p1d3c0djsn3d77abc69828',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

let hotelOptions = {
	method: 'GET',
	url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search',
	params: {
		domain: 'US',
		sort_order: 'REVIEW',
		locale: 'en_US',
		checkout_date: '2023-09-27',
		region_id: '2621',
		adults_number: '1',
		checkin_date: '2023-09-26',
		available_filter: 'SHOW_AVAILABLE_ONLY',
		meal_plan: 'FREE_BREAKFAST',
		guest_rating_min: '8',
		price_min: '10',
		page_number: '1',
		children_ages: '4,0,15',
		amenities: 'WIFI,PARKING',
		price_max: '1000',
		lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
		payment_type: 'PAY_LATER,FREE_CANCELLATION',
		star_rating_ids: '3,4,5'
	},
	headers: {
		'X-RapidAPI-Key': 'f6134ebf80msh0949d7f7e58dbd4p1d3c0djsn3d77abc69828',
		'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
	}
};

export const getHotels = createAsyncThunk( 'hotel/getHotels', async ( { cityName, startDate, endDate } ) =>
{
	try
	{
		cityOptions.params.query = cityName;
		const city = await axios.request( cityOptions );
		const cityId = city.data.data[ 0 ].essId.sourceId;
		hotelOptions.params.region_id = cityId;
		hotelOptions.params.checkin_date = startDate;
		hotelOptions.params.checkout_date = endDate;
		const res = await axios.request( hotelOptions );
		return res.data.properties;
	} catch ( error )
	{
		console.log( error.messeage );
	}
} );

const hotelSlice = createSlice( {
	name: 'hotel',
	initialState,
	reducers: {
		changeCity: ( state, action ) =>
		{
			state.cityQuery = action.payload;
		},
		changeDate: ( state, action ) =>
		{
			state.startDate = action.payload.startDate;
			state.endDate = action.payload.endDate
		}
	},
	extraReducers ( builder )
	{
		builder
			.addCase( getHotels.pending, ( state, action ) =>
			{
				state.status = 'loading';
			} )
			.addCase( getHotels.rejected, ( state, action ) =>
			{
				state.status = 'failed';
			} )
			.addCase( getHotels.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				state.hotels = action.payload;
			} );
	}
} );

export const selectHotels = ( state ) => state.hotel.hotels;
export const selectStatus = ( state ) => state.hotel.status;
export const selectCity = ( state ) => state.hotel.cityQuery;
export const selectStartDate = ( state ) => state.hotel.startDate;
export const selectEndDate = ( state ) => state.hotel.endDate;
export const selectError = ( state ) => state.hotel.error;
export const { changeCity, changeDate } = hotelSlice.actions;
export default hotelSlice.reducer;