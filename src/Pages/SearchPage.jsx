import styled from 'styled-components'

export const SearchPage = () => {
  return (

    <Container>
      <Search autoFocus placeholder='Type to search.'/>
      <Hint>Search by country, city or id.</Hint>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Search = styled.input`
  margin-top: 70px;
  width: 600px;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 30px;
  border: 1px solid gray;
`;

const Hint = styled.h1`
  margin-top: 15%;
  font-weight: 200;
`;