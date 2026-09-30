import { useState } from 'react'

export default function TextAlert() {

    const [text, setText] = useState('')

    const getMessage = () => {
        if (text.length < 10) {
            return 'Il testo è troppo corto'
        }

        if (text.length > 100) {
            return 'Il testo è troppo lungo'
        }

        return 'La lunghezza del testo è ottimale'
    }

    return (
        <section className="container text-center">
            <h2 className="text-primary mt-4">PUNTO 10</h2>

            <textarea
                className="form-control"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Scrivi qualcosa..." />
            <p className="mt-3">
                {getMessage()}
            </p>
        </section>
    )
}

