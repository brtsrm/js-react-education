import React from 'react'
import "./App.css"

export default function Not({ad,aciklama,tarih}) {
    return (
        <div className="not">
            <h3>{ad}</h3>
            <h3>{aciklama}</h3>
            <hr />
            <p>{tarih}</p>
        </div>
    )
}
