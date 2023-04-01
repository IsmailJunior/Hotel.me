import styled from 'styled-components'
import {useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createUser, signIn, selectStatus} from '../features/user/userSlice'
export const Form = () =>
{
  const [ isLogin, setIsLogin ] = useState( false )
  const dispatch = useDispatch();
  const status = useSelector( selectStatus )
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSignUpClicked = (e) =>
  {
    e.preventDefault();
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const canSave = [email, password].every(Boolean)
      if ( canSave )
    {
      dispatch(createUser({email: email, password: password}))
    } else
    {
      console.log('Error empty fields!')
      }
  }

  const onLoginClicked = (e) =>
  {
    e.preventDefault();
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const canSave = [email, password].every(Boolean)
      if ( canSave )
    {
      dispatch(signIn({email: email, password: password}))
    } else
    {
      console.log('Error empty fields!')
      }
  }

  const signUpView = <> <Container>
      <Section>
        <Label>Email: </Label>
        <Input ref={emailRef} type='email' />
      </Section>
      <Section>
        <Label>Password: </Label>
        <Input ref={passwordRef} type='password' />
      </Section>
      </Container>
      <Button onClick={ onSignUpClicked } type='button'>Sign Up</Button>
    <Description onClick={() => setIsLogin(false)}>have an accout? login</Description> </>
  
  const loginView = <>
  <Container>
      <Section>
        <Label>Email: </Label>
        <Input ref={emailRef} type='email' />
      </Section>
      <Section>
        <Label>Password: </Label>
        <Input ref={passwordRef} type='password' />
      </Section>
      </Container>
    <Button onClick={ onLoginClicked } type='button'>Login</Button>
    <Description onClick={() => setIsLogin(true)}>Don't have an accout? sign up</Description>
  </>

  return (
    <FormContainer>
      {isLogin ? signUpView : loginView}
  </FormContainer>
  )
}

const Container = styled.div`
  display: flex;
  gap: 10px;
`

const FormContainer = styled.form`

`;

const Label = styled.label`

`;

const Input = styled.input`
  display: block;
  width: 180px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Section = styled.section`

`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer; 
  padding: 10px;
  color: white;
  background-color: #0084ff;
`;

const Description = styled.p`
  cursor: pointer;
`;