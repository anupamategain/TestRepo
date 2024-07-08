import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetReq() {
    const [user,setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setUser(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    })

    let renderItem = () => {
        return user.map((item, index) => (
            <div key={index}>
                <h2>{item.name}</h2>
                <a href={`mailto:${item.email}`}></a>
                <p>{item.email}</p>
            </div>
        ))
    };

  return (
    <div>
        {renderItem()}
    </div>
  )
}
