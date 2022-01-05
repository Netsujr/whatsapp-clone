import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';


const Login = () => {
  // eslint-disable-next-line no-empty-pattern
  const[{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
      dispatch ({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch(error => alert(error.message));
  }

  return (
    <LoginContainer>
      <InnerContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp" />
        <LoginText>
          <h1>Sign in to Whatsapp</h1>
        </LoginText>
        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </InnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;

  `;

const InnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.12);

  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  Button {
    margin-top: 35px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
  `;

const LoginText = styled.div`

  `;
