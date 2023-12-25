import { useState } from 'react';

export default function FeedbackForm() {
    // const [name, setName] = useState('');
    let name: any = ''

    function handleClick() {
        // setName(prompt('What is your name?'));
        name = prompt('What is your name?')
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}