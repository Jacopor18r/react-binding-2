import { useState } from 'react'

export default function ConfirmAction() {

    const [checked, setChecked] = useState(false)

    return (
        <section className="container text-center">
            <h2 className="text-primary mt-4">PUNTO 5</h2>

            <div className="form-check">
                <input
                    id="confirm"
                    type="checkbox"
                    className="form-check-input"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                />

                <label htmlFor="confirm" className="form-check-label">
                    Confermo di voler procedere
                </label>
            </div>

            <button
                className="btn btn-primary mt-3"
                disabled={!checked}
            >
                Procedi
            </button>
        </section>
    )
}

