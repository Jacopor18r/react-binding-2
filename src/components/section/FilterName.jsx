import { useState } from "react";

const NameList = ['jacopo', 'giovanni', 'marco', 'giacomo', 'daniele', 'lisa', 'francesca'];

export default function FilterName() {

    const [name, setName] = useState('');

    const filterList = NameList.filter((item) => item.includes(name.toLocaleLowerCase()));

    return (
        <section className="container text-center">
            <h2 className='text-primary mt-4'>PUNTO 2</h2>
            <div>
                <label htmlFor="name"></label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <ul className="list-group">
                {filterList.map(name => (
                    <li
                        className="list-group-item text-capitalize"
                        key={name}>{name}
                    </li>
                ))}
            </ul>
        </section>
    )
}