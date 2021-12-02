import styled from "styled-components";


export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;


export const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
margin: 0;
height: 90%auto;
width: 90%;
`;


export const ButtonOne = styled.button`
  /* If it's a small button use less padding */
  padding: ${props => props.small ? '0.25em 1em' : '0.5em 2em'};
  background: rgb(6,3,57);
  background: linear-gradient(90deg, rgba(6,3,57,1) 20%, rgba(12,203,16,1) 47%, rgba(0,212,255,1) 76%);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;

`;
