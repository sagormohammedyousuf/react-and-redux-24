import { useState } from "react";

const initialItems = [
  { id: 1, description: "passports", quantity: 2, pack: false },
  { id: 2, description: "Socks", quantity: 12, pack: false },
  { id: 3, description: "Camera", quantity: 2, pack: true },
];

export default function Farway() {
  return (
    <div className="farway full-screen text-center mt-5">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="w-100 mb-0 bg-warning text-success fw-bold p-5">
      🧰 FAR AWAY 🧰
    </h1>
  );
}

function Form() {

  const [description, setDescription] = useState('')
  
  const [quantity, setQuantity] = useState(4)

  function handleSubmit(e) {
    e.preventDefault()
    
    if (!description) return;

    const newItem = { description, quantity, pack: false, id: Date.now() }
    
    console.log(newItem)

    setDescription('')
    setQuantity ('')
  } 

  return (
    <form className="add p-4 form w-100 bg-primary " onSubmit={handleSubmit}>
      <h3> What do you need for your trip?</h3>

      <div className="d-flex justify-content-center mt-4">
        <select
          value={quantity}
          className="form-control select-item"
          onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control w-25"
          placeholder="item name ........"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn bg-dark text-white ms-3">Add</button>
      </div>
    </form>
  );
}

function PackingList() {
  return (
    <ul className="list p-4 bg-info">
      {initialItems.map((item) => (
        <Item key={item.id} item={item} /> // Add 'key' prop
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="d-flex align-items-center justify-content-center">
      <p style={item.pack ? {textDecoration: "line-through"} : {}}>
        {item.description} {item.quantity}
      </p>
      <button className="delete-btn ">X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="bg-dark text-white p-5">
      You have x items on your list, and you already packed x (x%)
    </footer>
  );
}
