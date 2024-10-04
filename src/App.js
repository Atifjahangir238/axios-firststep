import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post('https://reqres.in/api/users', {

      "name": "Atif",
      "job": "Developer"

    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    axios.delete('https://reqres.in/api/users/2')
      .then(res => console.log(res))
      .catch(err => console.log(err));
    axios.put('https://reqres.in/api/users/2', {

      "name": "kumail",
      "job": "Bussiness Developer"

    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    axios.get('https://reqres.in/api/users?page=2')
    .then(res=>setData(res.data.data))
    .catch(err => console.log(err));  },[])

    return (
      <div>
        <h2>Axios Library in React JS</h2>
        {
          data.map((d, i) => {
            return <>

            <p key={i}>{d.email}</p>
            <p key={i}>{d.avatar}</p>
            </>
          
          })
        }
      </div>
    )
  }

export default App
