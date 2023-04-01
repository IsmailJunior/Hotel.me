import { useSelector } from 'react-redux'
import {selectUser} from '../features/user/userSlice'
import { AuthCard } from '../components/AuthCard';
export const DashboardPage = () =>
{  
  const user = useSelector(selectUser)
  return (
    <>
      { !user ? <AuthCard /> : <h1>Hi {user.email}</h1>}
    </>
  )
};



