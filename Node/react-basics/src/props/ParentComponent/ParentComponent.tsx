import React from 'react'
import Button from '../ChildComponent/Button'

function ParentComponent() {
    return (
        <div>
            <Button color="red" isRound="true" onClick={()=> {
                console.log("Red Button clicked")
            }} text="Kevin's Button"/>
            <Button color="blue" isRound="false" onClick={() => {
                console.log("Blue Button clicked")
            }} text="Blue Button"/>
            <Button color="green" isRound="true" onClick={() => {
                console.log("Green Button clicked")
            }} text="Green Button"/>
        </div>
    )
}

export default ParentComponent