import React,{useState} from 'react'
import "./App.css"

function App ()  {

  const [bardakSayisi,barkSayisiniDegistir] = useState(0);
  const [metin,setMetin] = useState({text:'İçtiğim Su bardak adeti'});
  const suIctim = () => {
    barkSayisiniDegistir(bardakSayisi+1)
    setMetin({

      text:'İçtiğim su sayısı' + bardakSayisi
    })
  }
  return(
   <div>
     <h3>{bardakSayisi}</h3>
     <p>{metin.text}</p>
     <button onClick={suIctim}>Su içtim</button>
   </div>
  );
}

export default App;