import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './SearchForm.js';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res.data);
      const result = res.data.results;
      setCharacters(result);
      console.log(characters);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <section className="character-list">
      <SearchForm people={characters}/>
      <br/>
      <Button><Link to="/">Home</Link></Button>
      {characters.map((item, index) => {
        const divStyle = {
          margin: '40px',
          border: '1px dotted black'
        };
        return (
          <div key={index} style={divStyle}>
            <p>{item.name}</p>
            <p>{item.gender}</p>
            <p>{item.species}</p>
            <p>{item.status}</p>
          </div>
        )
      })}
    </section>
  );
}
