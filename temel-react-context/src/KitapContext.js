/* eslint-disable no-undef */
import React,{useState,createContext} from 'react'

export const  KitapContext = createContext();

export const KitapProvider  = props => {

    const [kitaplar,setKitaplar] = useState([
        {
            kitapId:1,
            kitapAd:'Bunu Herkes Bilir',
            kitapYazar: 'Emrah Safa Gürkan'
        },
        {
            kitapId:2,
            kitapAd:'Zafer Sızlanarak Kazanılmaz',
            kitapYazar: 'Haluk Tatar'
        }
    ]);

    return (
        <KitapContext.Provider value={[kitaplar,setKitaplar]}>
            {props.children}
        </KitapContext.Provider>
    )
}