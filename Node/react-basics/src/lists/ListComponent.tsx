import React from 'react'
import './ListComponents.css'

function ListComponent() {

    let names : string[] = ["Daniel", "Israel", "Chadel", "Troy"];


  return (
    <>
        {
            names.map((name, index) => {
                return (
                    <div key={index} className='name-div'>{name}</div>
                )
            })
        }
    </>
  )
}

export default ListComponent