import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const Section = styled.section`
  display: flex;
  justify-content: center;
`
const Header = styled.header`
  width: 300px;
  display: flex;
  flex-direction: column;
`

export default function WelcomePage() {
  return (
    <Section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <br/>
        <Button><Link to="/characters">Characters</Link></Button>
      </Header>
    </Section>
  );
}
