import React, { useState } from 'react'

const WithoutEnd = () => {

    const [mensualidad, setMensualidad] = useState(1000)
    const [months, setMonths] = useState(12*30)
    const [vehicle, setVehicle] = useState<number>(0)

    const rate = vehicle / 12

    const pv = mensualidad * ((1+rate)**months -1) / rate

    const normal = (mensualidad*months).toFixed(2)

    return (
        <form>
        al mes juntaré
        <br />
        <input type="number" min="1" step="any" value={mensualidad} onChange={v => setMensualidad(Number(v.target.value))} />
        <br />
        <br />
        durante (meses)
        <br />
        <input type="number" min="1" step="any" value={months} onChange={v => setMonths(Number(v.target.value))} />
        <br />
        <br />

        usando el instrumento:
        <br />
        <select value={vehicle} onChange={v => setVehicle(Number(v.target.value))}>
            <option value={0}>ninguno</option>
            <option value={0.04}>cetes</option>
            <option value={0.18}>real estate</option>
        </select> = {(100*vehicle)}%
        <br />
        <br />

        normalmente tendría ${normal}
        <br />
        pero por usar este instrumento tendrás ${pv.toFixed(2) || normal}

    </form>
    )
}

export default WithoutEnd