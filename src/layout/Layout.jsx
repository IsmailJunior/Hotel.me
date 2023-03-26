import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation } from './Navigation'
import {Sidebar} from './Sidebar'

export const Layout = () => {
	return (
		<Container>
			<Sidebar />
			<Navigation />
			<Outlet />
		</Container>
  )
}

const Container = styled.div`
		display: flex;
		justify-content: space-between;
`;