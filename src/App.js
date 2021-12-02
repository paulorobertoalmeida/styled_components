import styled from 'styled-components'
import './App.css';
import {Wrapper, Title, Rotate, keyframes } from './components/globalcomponents'


const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`


function App() {
  return (
    <Wrapper>
      <Title>this is the app to test Styled Components</Title>
      <h1>Hello Moto</h1>
      <Input medium placeholder="Hello moto"/>
      <Input padding="2em" placeholder="Padded" />


      
    </Wrapper>
      
  );
}

export default App;
