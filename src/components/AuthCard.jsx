import styled from 'styled-components'
import { Modal } from '../components/Modal'
import {Form} from '../components/Form'
export const AuthCard = () => {
  return (
	  <Container>
      <Modal>
        <Section>
          <div>
        <Heading>Auth</Heading>
        <Title>Sign in</Title>
      <Description>Or sign up if you don't have an account.</Description>
          </div>
        <Form />
        </Section>
    </Modal>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Title = styled.h3`

`;

const Description = styled.p`

`;

const Heading = styled.h1`

`;