import styled from 'styled-components'
import {BsGear} from 'react-icons/bs'
import {HiMagnifyingGlass, HiOutlineBell} from 'react-icons/hi2'
import {AiOutlineLogout} from 'react-icons/ai'
export const Navigation = () => {
  return (
    <Nav>
      <Items>
        <Spacer>
          <Item>
            <Logo />
          </Item>
          <Item>23939320</Item>
        </Spacer>
        <Spacer>
          <Item>
            <HiOutlineBell />
          </Item>
          <Item>
            <HiMagnifyingGlass />
          </Item>
          <Item>
            <BsGear />
          </Item>
          <Item>
            <AiOutlineLogout />
          </Item>
          <Item>
            <Profile>
              <Image />
              <div>
                <Title>Example</Title>
                <Description>Example@mail.com</Description>
              </div>
            </Profile>
          </Item>
        </Spacer>
      </Items>
    </Nav>
  )
}

const Nav = styled.div`
      flex: 1;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const Item = styled.li`
  cursor: pointer;
`;

const Spacer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background-image: url('https://th.bing.com/th/id/R.877e091ae9b928c82e5cc618b96fda0d?rik=gopA5fbs497C4g&pid=ImgRaw&r=0'); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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