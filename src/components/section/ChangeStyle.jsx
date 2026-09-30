import { useState } from 'react'

export default function ChangeStyle() {

    const [bold, setBold] = useState(false)
    const [italics, setitalics] = useState(false)
    const [underline, setunderline] = useState(false)
    const [highlighted, sethighlighted] = useState(false)



    return (
        <main>
            <section className="container text-center">
                <h2 className="text-primary mt-4">PUNTO 6</h2>
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input
                            id="bold"
                            type="checkbox"
                            className="form-check-input"
                            checked={bold}
                            onChange={e => setBold(e.target.checked)} />
                        <label htmlFor="bold" className="form-check-label">
                            Grassetto
                        </label>
                    </div>
                </div>
                <p className={bold ? 'fw-bold' : ''}>
                    Questo testo diventa grassetto.
                </p>
            </section>
            <section className="container text-center">
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input
                            id="italics"
                            type="checkbox"
                            className="form-check-input"
                            checked={italics}
                            onChange={e => setitalics(e.target.checked)} />
                        <label htmlFor="italics">
                            Corsivo
                        </label>
                    </div>
                </div>
                <p className={italics ? 'fst-italic' : ''}>
                    Questo testo diventa corsivo.
                </p>
            </section>
            <section className="container text-center">
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input
                            id="underline"
                            type="checkbox"
                            className="form-check-input"
                            checked={underline}
                            onChange={e => setunderline(e.target.checked)} />
                        <label htmlFor="underline">
                            Sottolineato
                        </label>
                    </div>
                </div>
                <p className={underline ? 'text-decoration-underline' : ''}>
                    Questo testo diventa sottolinato.
                </p>
            </section>
            <section className="container text-center">
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input
                            id="highlighted"
                            type="checkbox"
                            className="form-check-input"
                            checked={highlighted}
                            onChange={e => sethighlighted(e.target.checked)} />
                        <label htmlFor="highlighted">
                            Evidenziato
                        </label>
                    </div>
                </div>
                <p className={highlighted ? 'bg-warning' : ''}>
                    Questo testo diventa evidenziato.
                </p>
            </section>
        </main>
    )
}

