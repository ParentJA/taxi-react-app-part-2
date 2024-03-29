import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Landing (props) {
  return (
    <div className='middle-center'>
      <h1 className='landing logo'>Taxi</h1>
      {
        props.isLoggedIn
          ? (
            <></>
            )
          : (
            <ButtonGroup>
              <LinkContainer to='/sign-up'><Button>Sign up</Button></LinkContainer>
              <LinkContainer to='/log-in'><Button>Log in</Button></LinkContainer>
            </ButtonGroup>
            )
      }
    </div>
  );
}

export default Landing;
