import { useState } from 'react'

export default function CharacterLimit() {

    const [text, setText] = useState('')

    const maxCharacters = 100
    const remainingCharacters = maxCharacters - text.length

    return (
        <section className="container text-center">
            <h2 className="text-primary mt-4">PUNTO 9</h2>

            <textarea
                className="form-control"
                maxLength={maxCharacters}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Scrivi qualcosa..." />

            <p className="mt-2">
                Caratteri rimanenti: {remainingCharacters}
            </p>
        </section>
    )
}

