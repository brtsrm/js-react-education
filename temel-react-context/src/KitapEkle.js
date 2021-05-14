/* eslint-disable no-unused-vars */
import React,{useState,useContext} from 'react'
import {KitapContext} from './KitapContext'

export default function KitapEkle() {

    const [isim,setIsim] = useState('')
    const [yazar,setYazar] = useState('')

    var [kitaplar,setKitaplar] = useContext(KitapContext);

    const isimGuncelle = (e) => {
        setIsim(e.target.value);
    }
    const yazarGuncelle = (e) => {
        setYazar(e.target.value)
    }

    const kitapEkle = (e) => {
        e.preventDefault();
        setKitaplar([...kitaplar,{
            kitapAd:isim,
            kitapYazar:yazar
        }])
    }


    return (
        
        <form onSubmit={kitapEkle}>
        <input type="text" name="kitapAd" value={isim} onChange={isimGuncelle} />
        <input type="text" name="yazarAd" value={yazar} onChange={yazarGuncelle} />
        <button type="submit">Ekle</button>

        </form>
        
    )
}
