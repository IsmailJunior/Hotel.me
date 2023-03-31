import styled from 'styled-components'

export const Modal = ({children}) => {
	return (
	<Container>
		{children}
	</Container>
  )
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 300px;
	border-radius: 15px;
	background-color: white;
	box-shadow: 0 0 25px rgba(0,0,0,0.2);
`;
