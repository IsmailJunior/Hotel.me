import styled from 'styled-components'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectHotels, selectStatus, getHotels, selectCity, changeCity} from '../features/hotel/hotelSlice'
import {selectUser, selectDisplayName} from '../features/user/userSlice'
import { AuthCard } from '../components/AuthCard';
export const DashboardPage = () =>
{  
  const dispatch = useDispatch()
  const hotels = useSelector( selectHotels );
  const city = useSelector(selectCity)
  const user = useSelector( selectUser )
  const displayName = useSelector( selectDisplayName )
  
  const onCityClickHandler = ( cityName ) => {
    dispatch( changeCity( cityName ) )
    
  }
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

  const cities = ['New York', 'Florida']

  useEffect( () =>
  {
    dispatch(getHotels(city))
  }, [city])
  return (
    <>
      <h1>Welcome { displayName }</h1>
      <h3>Domain: USA</h3>
      <Chips>
        { cities.map( ( city ) => (
          <Chip onClick={() => onCityClickHandler(city)} key={city}>{city}</Chip>
        ))}
      </Chips>
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

const Chips = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`
const Chip = styled.div`
  text-align: center;
  width: 100px;
  height: 25px;
  border: 1px gray solid;
  border-radius: 50px;
  cursor: pointer;
  padding: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);

  &:active {
    border-color: blue;
  }
  &:focus {
    border-color: blue;
  }
`;