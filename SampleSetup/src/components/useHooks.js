import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function App() {

    // Local State
    const [name, setName] = useState('Divya');
    const [age, setAge] = useState(20);
    const [count, setCount] = useState(0);

    // useEffect - first argument is a function, second argument is an array
    // Second Argument is used for conditional update, when the elements inside the array changes then only call this useEffect.

    useEffect(() => {
        console.log('xxxxxxxxxxx - Every Time CALLED');
    });

    // It will act as componentDidMount
    useEffect(() => {
        console.log('componentDidMount');
        console.log('Empty array passed. Name = ' + name + ' Age = ' + age);
        // ALLOWED: State Update
        setName('Divya_Updated');
    }, []);

    // It will act as componentDidUpdate
    useEffect(() => {
        console.log('Update [name], current value = ', name);
        // ALLOWED: State Update !!!
        // setName('Disaster');
    }, [name]);

    useEffect(() => {
        console.log('Update [Age], current value = ', age);
    }, [age]);

    return(
        <div className='form'>
            Enter Your Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/><br/>
            Enter Your Age:<input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
            <br/><br/>
            <h2>Your name: {name}</h2>
            <h3>Your age: {age}</h3>
            <button onClick={() => setCount(count + 1)}>You clicked me {count} times.</button>
        </div>
    );
}
