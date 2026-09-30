import { useState } from 'react'

export default function ChangeTitle() {

    const [title, setTitle] = useState('Titolo Base')

    return (
        <section className="container text-center">
            <h2 className='text-primary mt-4'>PUNTO 3</h2>
            <h1>{title}</h1>
            <div>
                <label htmlFor="title"></label>
                <input
                    id="title"
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
        </section>
    )
}