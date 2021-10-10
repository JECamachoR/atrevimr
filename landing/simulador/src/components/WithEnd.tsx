import React, { useState } from 'react'

const WithEnd = () => {

    const [need, setNeed] = useState(10000)
    const [months, setMonths] = useState(5)
    const [vehicle, setVehicle] = useState<number>(0)

    const rate = vehicle / 12

    const pmt = rate * (-need) / (1 - (1 + rate)**months)

    const normal = (need/months).toFixed(2)

    return (
        <form>
        necesito
        <br />
        <input type="number" min="1" step="any" value={need} onChange={v => setNeed(Number(v.target.value))} />
        <br />
        <br />
        en (meses)
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

        normalmente necesitarías ahorrar ${normal} mensualmente
        <br />
        pero por usar este instrumento puedes ahorrar solo ${pmt.toFixed(2) || normal}

    </form>
    )
}

export default WithEnd
