// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect,useContext} from 'react'
import Kitap from './Kitap'
import {KitapContext} from './KitapContext'

export default function KitapListesi() {
    
    var  [kitaplar]  = useContext(KitapContext)

    useEffect(() => {
    },)
    const baslikStyle = {
        color : 'red'
    }
    return (
        <div>   

            <h2 style={baslikStyle}>Başlık</h2>
            {
                kitaplar.map((kitap) => (
                    <Kitap key={kitap.kitapId} ad={kitap.kitapAd} yazar={kitap.kitapYazar} />    
                ))
            }
        </div>
    )
}
