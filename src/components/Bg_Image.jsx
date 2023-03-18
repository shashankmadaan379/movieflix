import React from 'react';
import background from '../assets/background.jpg';
import styled from 'styled-components';

function BackgroundImage(){
  return <Container>
    <img src={background} alt="background"/>
  </Container>
}
const Container=styled.div`
 height:100vh;
 width:100vh;
 img{
  height:100vh;
  width:100vw;
 }
`;
export default BackgroundImage;