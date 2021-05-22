import React,{useState,useEffect} from 'react'
import "./App.css"

function App ()  {

  const [bardakSayisi,barkSayisiniDegistir] = useState(0);
  const [metin,setMetin] = useState({text:'İçtiğim Su bardak adeti'});
  const [bardakStyle,setbardakStyle] = useState("bardak"+0);

  const suIctim = () => {
    barkSayisiniDegistir(bardakSayisi+1)
    setMetin({

      text:'İçtiğim su sayısı' + bardakSayisi
    })
  }
  useEffect(() => {
    setbardakStyle('bardak' + bardakSayisi)
  },[bardakSayisi])

  return(
   <div className="app">
     <h3 className={bardakStyle}>{bardakSayisi}</h3>
     <p>{metin.text}</p>
     <button onClick={suIctim}>Su içtim</button>
       <p>Deneme</p>
   </div>
  );
}

export default App;