import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {selectUser, selectDisplayName,logout} from '../features/user/userSlice'
import {BsGear} from 'react-icons/bs'
import {HiMagnifyingGlass, HiOutlineBell} from 'react-icons/hi2'
import {AiOutlineLogout} from 'react-icons/ai'
export const Navigation = () =>
{
  const dispatch = useDispatch()
  const user = useSelector( selectUser )
  const displayName = useSelector(selectDisplayName)
  console.log(displayName)
  const onLogoutClicked = ( e ) =>
  {
    e.preventDefault()
    dispatch( logout() )
    console.log('logout')
  }
  return (
    <Nav>
      <Items>
        <Spacer>
        </Spacer>
        <Spacer>
          <Item>
            <HiOutlineBell size={20}/>
            <Indicatior>
              5
            </Indicatior>
          </Item>
          <Item>
            <HiMagnifyingGlass size={20}/>
          </Item>
          <Item>
            <BsGear size={20}/>
          </Item>
          {user ? <Item onClick={onLogoutClicked}>
            <AiOutlineLogout size={20}/>
          </Item> : null}
          <Item>
            {user ? <Profile>
              <Image />
              <div>
                <Title>{displayName}</Title>
                <Description>{user.email}</Description>
              </div>
            </Profile> : null}
          </Item>
        </Spacer>
      </Items>
    </Nav>
  )
}

const Nav = styled.div`
`;

const Items = styled.ul`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

const Spacer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-image: url('https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h4`
  font-weight: 300;
`;
const Description = styled.h6`
  font-weight: 200;
`;

const Indicatior = styled.span`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  color: white;
  position: absolute;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: red;
  top: -5px;
  right: 0;
  left: 8px;
`;