import styled from 'styled-components'
export const Sidebar = () => {
  return (
    <Container>
      <h1>Side Bar</h1>
    </Container>
  )
}

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: gray;
`;