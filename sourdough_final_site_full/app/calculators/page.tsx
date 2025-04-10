
'use client'
import { useState } from 'react'

export default function HydrationCalculator() {
  const [flour, setFlour] = useState(500)
  const [water, setWater] = useState(350)

  const hydration = ((water / flour) * 100).toFixed(1)

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-800">Hydration Calculator</h1>
      <div className="mt-4">
        <input type="number" value={flour} onChange={(e) => setFlour(+e.target.value)} className="border rounded p-2 mr-2" /> Flour (g)
        <input type="number" value={water} onChange={(e) => setWater(+e.target.value)} className="border rounded p-2 mr-2 ml-4" /> Water (g)
      </div>
      <p className="mt-4 text-xl">Hydration: {hydration}%</p>
    </div>
  )
}
