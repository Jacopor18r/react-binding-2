import { useState } from 'react';

export default function CharacterCounter() {

    const [username, setUsername] = useState('');

    return (
        <section className="container text-center">
            <h2 className='text-primary mt-4'>PUNTO 1</h2>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <p>Caratteri: {username.length}</p>
        </section>
    );

}