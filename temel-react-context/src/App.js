/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './App.css';
import KitapListesi from './KitapListesi'
import KitapSayisi from './KitapSayisi'
import KitapEkle from './KitapEkle'
import {KitapProvider} from './KitapContext'
function App() {
  
  const [setSayi] = useState(0);

  const kitapSayisiGetir = (s) => {
    setSayi(s);
  }

  return (
    <div className="App">
      <KitapProvider >
         <KitapEkle />
          <KitapListesi />
          <KitapSayisi />
      </KitapProvider>
    </div>
  );
}

export default App;
