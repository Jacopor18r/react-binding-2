import { useState } from 'react'

export default function TextSize() {

    const [size, setSize] = useState('fs-5')

    return (
        <section className="container text-center">
            <h2 className="text-primary mt-4">PUNTO 7</h2>

            <div className="d-flex justify-content-center gap-3">
                <div className="form-check">
                    <input
                        id="small"
                        type="radio"
                        name="size"
                        className="form-check-input"
                        value="fs-6"
                        checked={size === 'fs-6'}
                        onChange={e => setSize(e.target.value)} />
                    <label htmlFor="small" className="form-check-label">
                        Piccolo
                    </label>
                </div>
                <div className="form-check">
                    <input
                        id="medium"
                        type="radio"
                        name="size"
                        className="form-check-input"
                        value="fs-5"
                        checked={size === 'fs-5'}
                        onChange={e => setSize(e.target.value)} />
                    <label htmlFor="medium" className="form-check-label">
                        Medio
                    </label>
                </div>
                <div className="form-check">
                    <input
                        id="large"
                        type="radio"
                        name="size"
                        className="form-check-input"
                        value="fs-1"
                        checked={size === 'fs-1'}
                        onChange={e => setSize(e.target.value)} />
                    <label htmlFor="large" className="form-check-label">
                        Grande
                    </label>
                </div>
            </div>
            <p className={size}>
                Questo testo cambia dimensione in base al radio button.
            </p>
        </section>
    )
}

