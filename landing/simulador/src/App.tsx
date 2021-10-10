import React, { useState } from 'react';
import WithEnd from './components/WithEnd';
import WithoutEnd from './components/WithoutEnd';

function App() {
    const [type, setType] = useState<string | undefined>(undefined)

    return (
        <div>
            <select value={type} onChange={v => setType(v.target.value)}>
                <option value={undefined}>Selecciona una opción</option>
                <option value="without">Quiero ahorrar una cantidad mensual</option>
                <option value="with">Quiero llegar a una cantidad total</option>
            </select>
            <br />
            <br />
        {
            type && ((type === "with") ? 
            <WithEnd /> : <WithoutEnd />)
        }
        </div>
    );
}

export default App;
