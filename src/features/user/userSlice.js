import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
const initialState = {
	user: null,
	status: 'idle',
	error: null
};

export const createUser = createAsyncThunk( 'user/createUser', async ( { email, password } ) =>
{
	try
	{
		await createUserWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.log( error.messeage );
	}
} );

export const signIn = createAsyncThunk( 'user/signIn', async ( { email, password } ) =>
{
	try
	{
		await signInWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.log( error.messeage );
	}
} );

const userSlice = createSlice( {
	name: 'user',
	initialState,
	reducers: {
		login: ( state, action ) =>
		{
			state.user = action.payload;
		},
		logout: ( state, action ) =>
		{
			signOut( auth );
			state.user = null;
			state.status = 'idle';
		}
	},
	extraReducers ( builder )
	{
		builder
			.addCase( createUser.pending, ( state, action ) =>
			{
				state.status = 'loading';
				console.log( 'pending...' );
			} )
			.addCase( createUser.rejected, ( state, action ) =>
			{
				state.status = 'failed';
				console.log( 'failed to create user.' );
			} )
			.addCase( createUser.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				console.log( 'successfully creating new user.' );
			} )
			.addCase( signIn.pending, ( state, action ) =>
			{
				state.status = 'loading';
				console.log( 'pending...' );
			} )
			.addCase( signIn.rejected, ( state, action ) =>
			{
				state.status = 'failed';
				console.log( 'failed to sign in user.' );
			} )
			.addCase( signIn.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				console.log( 'successfully signed in user.' );
			} )
	}
} );
export const selectStatus = ( state ) => state.user.status;
export const selectUser = ( state ) => state.user.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;