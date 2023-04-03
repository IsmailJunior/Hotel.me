import styled from 'styled-components'
import { useSelector } from 'react-redux';
import {selectHotels, selectStatus} from '../features/hotel/hotelSlice'
import {selectUser, selectDisplayName} from '../features/user/userSlice'
import { AuthCard } from '../components/AuthCard';
export const DashboardPage = () =>
{  
  const hotels = useSelector( selectHotels );
  const user = useSelector( selectUser )
  const displayName = useSelector( selectDisplayName )
  console.log(hotels)
  const content = <Container>
    
    { hotels?.map( ( hotel ) => (
      <Hotel key={hotel.id}>
        <Image style={ { backgroundImage: `url(${ hotel.propertyImage.image.url })` } }>
          <Name>{ hotel.name }</Name>
          <Background />
        </Image>
      </Hotel>
    ))}
  </Container>
  return (
    <>
      <h1>Welcome { displayName }</h1>
      <h3>Domain: UAE</h3>
      { !user ? <AuthCard /> :  content}
    </>
  )
};

const Hotel = styled.div`
  cursor: pointer;
`;

const Name = styled.h3`
  margin: 10px;
  position: absolute;
  color: white;
  z-index: 1;
`;

const Image = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  overflow: hidden;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Background = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
  opacity: 60%;
`;