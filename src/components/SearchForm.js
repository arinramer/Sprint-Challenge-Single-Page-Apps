import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const characters = props.people.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(characters);
    if(data != [] && query == "") {
      setData([])
    }
  }, [query])
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
  return (
    <div className="search-form">
     <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
        {data.map(data => {
          return (
            <div key={data._id}>
              <h2>
                {data.name}
              </h2>
              <h3>Gender: {data.gender}</h3>
              <h3>Species: {data.species}</h3>
              <h3>Status: {data.status}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
