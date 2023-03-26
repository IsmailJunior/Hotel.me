import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { DashboardPage } from './Pages/DashboardPage'
import { SearchPage } from './Pages/SearchPage'
import { CalanderPage } from './Pages/CalanderPage'
import {ClientsPage} from './Pages/ClientsPage'
import {NotificationPage} from './Pages/NotificationPage'
import { InvitePage } from './Pages/InvitePage'
import { ListsPage } from './Pages/ListsPage'
function App ()
{
  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <DashboardPage /> } />
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
