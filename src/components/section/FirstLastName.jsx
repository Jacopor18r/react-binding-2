import { useState } from 'react'

export default function FirstLastName() {

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')

    return (
        <section className="container text-center">
            <h2 className='text-primary mt-4'>PUNTO 4</h2>
            <div>
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastname">Cognome</label>
                <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <p className='text-decoration-underline mt-1 text-success'>{name} {lastname}</p>
        </section>
    )

}