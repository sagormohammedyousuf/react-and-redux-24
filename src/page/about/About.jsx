import React, { useRef, useState, useMemo } from "react";

const About = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  // useMemo example
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(["apple", "banana", "grape", "orange"]);

  const filterItems = useMemo(() => {
    return items.filter((item) => item.includes(query));
  }, [items, query]);

  return (
    <div className="h1 text-danger text-center w-100">
      <div className="d-flex align-items-center justify-content-center gap-1">
        {/* Input with useRef */}
        <input
          className="form-control rounded-0 w-25"
          type="text"
          ref={inputElement}
        />
        <button onClick={focusInput} className="btn rounded-0 btn-warning">
          Focus Input
        </button>
      </div>

      <h2 className="mt-3">Under Component from useMemo</h2>

      {/* Filter functionality */}
      <div>
        <input
          type="text"
          placeholder="Search items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control mb-3"
        />
        <ul>
          {filterItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
