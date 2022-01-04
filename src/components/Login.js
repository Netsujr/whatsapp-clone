import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';


const Login = () => {

const signIn = () => {

}

  return (
    <LoginContainer>
      <InnerContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp" />
        <LoginText>
          <h1>Sign in to Whatsapp</h1>
        </LoginText>
        <Button onClick={signIn}>
          Sign In With Google!
        </Button>
      </InnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`

  `;

const InnerContainer = styled.div`

  `;

const LoginText = styled.div`

  `;
