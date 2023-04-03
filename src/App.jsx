import { Routes, Route } from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectStatus, selectUser } from './features/user/userSlice'
import {auth} from './config/firebase'



import { Layout } from './layout/Layout'
import { TrendingPage } from './Pages/TrendingPage'
import { SearchPage } from './Pages/SearchPage'
import { CalanderPage } from './Pages/CalanderPage'
import {ClientsPage} from './Pages/ClientsPage'
import {NotificationPage} from './Pages/NotificationPage'
import { InvitePage } from './Pages/InvitePage'
import { ListsPage } from './Pages/ListsPage'

function App ()
{
  const user = useSelector( selectUser );
  const status = useSelector(selectStatus)
  console.log( user );
  const dispatch = useDispatch();
  useEffect( () =>
  {
    const unsubsecribe = auth.onAuthStateChanged( user =>
    {
      if ( !user ) return dispatch( logout() );
      dispatch( login( {
        uid: user.uid,
        email: user.email
      } ) );
    } );
    return unsubsecribe;
  }, [dispatch] );
  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <TrendingPage /> } />
        <Route path='search' element={<SearchPage />} />
        <Route path='calander' element={<CalanderPage />} />
        <Route path='clients' element={<ClientsPage />} />
        <Route path='notification' element={<NotificationPage />} />
        <Route path='invite' element={<InvitePage />} />
        <Route path='lists' element={<ListsPage />} />
        <Route path='invite' element={<InvitePage />} />
      </Route>
    </Routes>
  )
}

export default App
