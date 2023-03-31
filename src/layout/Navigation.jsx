import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {selectStatus, selectUser, logout} from '../features/user/userSlice'
import {BsGear} from 'react-icons/bs'
import {HiMagnifyingGlass, HiOutlineBell} from 'react-icons/hi2'
import {AiOutlineLogout} from 'react-icons/ai'
import {IoChevronBack} from 'react-icons/io5'
export const Navigation = () =>
{
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const status = useSelector(selectStatus)
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
          <Item>
            <IoChevronBack size={20} />
            <p>43544345</p>
          </Item>
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
                <Title>Example</Title>
                <Description>Example@mail.com</Description>
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
  background-image: url('https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg'); 
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