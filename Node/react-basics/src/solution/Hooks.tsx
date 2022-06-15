import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../redux/slices/counterSlice';

function Hooks() {

    /*
        what is a Hook?
            -hooks are methods added for functional components to be able to 
            have all the abilities that class components have

        Hooks we will be looking at:
            -useState()
            -useEffects()
    */
    // const [isVisible, setVisibility] = useState(true);

    // const [counter, setCounter] = useState(0);
    const counter = useSelector((state: any) => state.conter.value)

    const dispatch = useDispatch();


    const [state, setState] = useState ({
        isVisible : true,
        text : ""
    })

    useEffect(() => {
        console.log("Component rendered")
    }, []);
    useEffect(() => {
       console.log(state) 
    }, [state]);


    function toggleDiv() {
        // console.log(isVisible);
        // setVisibility(!isVisible);
        setState({...state, isVisible: !state.isVisible})
    }

    function incrementCounter(){
        // setCounter(counter + 1)
        // setState({...state, counter: state.counter})
        dispatch(counterActions.increment());
    }

    function updateText(event : any){
        setState({...state, text: event.target.value});
    }


    return (
        <>
            {
                state.isVisible ? <h2>Hello World</h2> : <></>
            }
            <button onClick={toggleDiv}>Toggle!</button>
            <div>{counter}</div>
            <button onClick={incrementCounter}>Increment</button>
            <input type="text" onChange={updateText}/>
            <h2>{state.text}</h2>
        </>
    )
}

export default Hooks