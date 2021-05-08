import React from 'react'
// import Basla from './Basla'
import Not from './Not'

function App ()  {

  return(
   <div className="app">
      <Not ad="Bilgisayar oyunu yap"  aciklama="aciklama1" tarih=" Mart 1" />
     <Not ad="alışverişe git" aciklama="aciklama1" tarih=" Mart 2" />
     <Not ad="Kitap oku" aciklama="aciklama1" tarih=" Mart 3" />
   </div>
  );
}

export default App;