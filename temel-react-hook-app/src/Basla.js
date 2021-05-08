import React from 'react'

export default function Basla() {

  const basla = () => {
    console.log("Temel react hook eğitimine başlıyoruz.")
  }

    return (
        <div>
             <button onClick={basla}> Hadi başlayalım</button>
        </div>
    )
}
