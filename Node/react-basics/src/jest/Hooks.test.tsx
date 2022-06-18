import { fireEvent, render, screen } from '@testing-library/react';
import react from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store/store';
import Hooks from '../hooks/Hooks';


test('increment button increases number', () => {
    // MemoryRouter is needed if you are utilizing react router
    // Provider is needed if the component ustilizes redux
    render(<MemoryRouter><Provider store={store}><Hooks/></Provider></MemoryRouter>);

    let incrementBtn = screen.getByTestId("increment-btn");
    let counterDiv = screen.getByTestId('counter-div')

    expect(counterDiv).toHaveTextContent("0");

    // we use fireEvent to trigger a specific event to happen to an element
    fireEvent.click(incrementBtn);
    
    expect(counterDiv).toHaveTextContent("1")
})

test('check if onchnage event is working for the input', () => {
    render(<MemoryRouter><Provider store={store}><Hooks /></Provider></MemoryRouter>);

    let inputElem = screen.getByTestId("text-input");
    let h2Elem = screen.getByTestId("text-h2")

    expect(h2Elem).toHaveTextContent("");

    fireEvent.change(inputElem, {target: {value: "Kevin"}})

    expect(h2Elem).toHaveTextContent("Kevin");
})