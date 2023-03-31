import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineDashboard} from 'react-icons/ai'
import {HiOutlineMagnifyingGlass, HiOutlineBell} from 'react-icons/hi2'
import {BsCalendar2Date, BsPersonPlus} from 'react-icons/bs'
import {IoPeopleOutline, IoHelpBuoy} from 'react-icons/io5'
import {SlBasket} from 'react-icons/sl'
export const Sidebar = () => {
  return (
    <Container>
      <Items>
        <Spacer>
          <Brand>
          <Logo />
          </Brand>
          <Link to='/'>
          <Item>
          <NavItem>
            <AiOutlineDashboard size={20}/>
            <h4 style={{textAlign: 'left'}}>Dashboard</h4>
          </NavItem>
        </Item>
          </Link>
          <Link to='search'>
            <Item>
          <NavItem>
            <HiOutlineMagnifyingGlass size={20} />
            <h4>Search</h4>
          </NavItem>
        </Item>
          </Link>
          <Link to='calander'>
          <Item>
          <NavItem>
            <BsCalendar2Date size={20} />
            <h4>Calander</h4>
          </NavItem>
        </Item>
          </Link>
          <Link to='clients'>
          <Item>
          <NavItem>
            <IoPeopleOutline size={20} />
            <h4>My Clients</h4>
          </NavItem>
        </Item>
          </Link>

          <Link to='lists'>
          <Item>
          <NavItem>
            <SlBasket size={20}/>
            <h4>MLS Lists</h4>
          </NavItem>
        </Item>
          </Link>

          <Link to='notification'>
          <Item>
          <NavItem>
            <HiOutlineBell size={20}/>
            <h4>Notification</h4>
          </NavItem>
        </Item>
          </Link>
          <Link to='invite'>
          <Item>
          <NavItem>
            <BsPersonPlus size={20}/>
            <h4>Invite & Earn</h4>
          </NavItem>
        </Item>
          </Link>
        </Spacer>
        <Spacer>
          <HelpItem>
            <h4>Need Help?</h4>
          </HelpItem>
          <HelpItem>
            <IoHelpBuoy />
            <h4>Help Desk</h4>
          </HelpItem>
        </Spacer>
      </Items>
    </Container>
  )
}

const Container = styled.div`
  width: 250px;
  padding: 10px 0;
  height: 600px;
  background-color: white;
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background-image: url('https://th.bing.com/th/id/R.877e091ae9b928c82e5cc618b96fda0d?rik=gopA5fbs497C4g&pid=ImgRaw&r=0'); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  padding: 10px 50px;
  height: 95%;
  gap: 10px;

`;

const Item = styled.li`
  width: 190px;
  border-radius: 10px;
  transition: all 300ms ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Brand = styled.li`
  width: 150px;
  border-radius: 10px;
  transition: all 300ms ease;
  cursor: pointer;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  padding: 10px;
`;

const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const HelpItem = styled.div`
  display:flex;
  align-items: center;
  gap: 10px;
  width: 150px;
  border-radius: 10px;
  transition: all 300ms ease;
  cursor: pointer;
`;