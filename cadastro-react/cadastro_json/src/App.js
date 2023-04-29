import { useState, useEffect } from "react"
import './App.css';
const url = "http://localhost:3000/informations"


function App() {
  const [informations] = useState([])
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [birth, setBirth] = useState('')
  const [age, setAge] = useState('')


  const hundleSubmit = async (e) => {

    e.preventDefault()

    const information = {

      name, address, birth, age,

    };

    const inf = await fetch(url, {

      method: "POST",
      headers: {
        "content-Type": "application/json"
      },

      body: JSON.stringify(information)
    })
    setName('')
    setAddress('')
    setBirth("")
    setAge("")
    return alert("cadastro efetuado com sucesso")
  };

  return (


    <div className="App">
      <div className="add">

        <ol>
          {informations.map((information) => (

            <li key={information.id}>{information.name} {information.address}
              {information.birth} {information.age}</li>



          ))}

        </ol>


        <h1>Ficha de cadastro</h1>

        <form onSubmit={hundleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" required onChange={(e) => setName(e.target.value)} />
            Endereço:
            <input type="text" value={address} name="address" required onChange={(e) => setAddress(e.target.value)} />
            Data de nascimento:
            <input type="text" value={birth} name="birth" required onChange={(e) => setBirth(e.target.value)} />
            Idade:
            <input type="number" value={age} name="age" required onChange={(e) => setAge(e.target.value)} />
          </label>

          <input type="submit" value="cadastrar" id="cadastrar" />



        </form>

      </div>
    </div>
  );
}

export default App;
