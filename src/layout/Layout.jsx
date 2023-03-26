import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation } from './Navigation'
import {Sidebar} from './Sidebar'

export const Layout = () => {
	return (
		<Container>
			<Sidebar />
			<Spacer>
				<Navigation />
				<Outlet />
			</Spacer>
		</Container>
  )
}

const Container = styled.div`
		display: flex;
		justify-content: space-between;
`;

const Spacer = styled.div`
	flex: 1;
	padding: 30px 50px;
`;