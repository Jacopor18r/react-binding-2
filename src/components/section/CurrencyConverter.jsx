import { useState } from 'react'

export default function CurrencyConverter() {

    const [currency, setCurrency] = useState('EUR')

    const price = 50

    const rates = {
        EUR: 1,
        USD: 1.17,
        GBP: 0.87
    }

    const symbols = {
        EUR: '€',
        USD: '$',
        GBP: '£'
    }

    const convertedPrice = price * rates[currency]

    return (
        <section className="container text-center">
            <h2 className="text-primary mt-4">PUNTO 8</h2>

            <select
                className="form-select"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
            >
                <option value="EUR">EUR - Euro</option>
                <option value="USD">USD - Dollaro</option>
                <option value="GBP">GBP - Sterlina</option>
            </select>

            <h3 className="mt-4">
                {symbols[currency]} {convertedPrice.toFixed(2)}
            </h3>
        </section>
    )
}

