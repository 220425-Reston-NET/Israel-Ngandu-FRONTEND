import React from 'react'

function Events() {

    function clickHandler(){
        console.log("Button Clicked!")
    }
    const hoverHandler = () => {
        console.log("Button Hovered")
    }

    const inputHandler = (event : any) => {
        console.log(event.target.value)
    }

    // the attribute for events in react are camelCase.
  return (
    <>
        <button onClick={clickHandler}>Click Me</button>
        <button onMouseOver={hoverHandler}>Hover Me!</button>
        <input type="text" onChange={inputHandler}/>
    </>
  )
}

export default Events