import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';
const initialState = {
	hotels: [],
	status: 'idel',
	error: null
};

export const getHotels = createAsyncThunk( 'hotel/getHotels', async () =>
{
	try
	{
		const res = await axios.get( '/search' );
		return res.data.properties;
	} catch ( error )
	{
		console.log( error.messeage );
	}
} );

const hotelSlice = createSlice( {
	name: 'hotel',
	initialState,
	reducers: {},
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
export const selectError = ( state ) => state.hotel.error;
export default hotelSlice.reducer;