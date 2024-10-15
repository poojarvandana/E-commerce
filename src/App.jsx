import React from 'react'
import Homepage from './Components/Homepage'
import Productlistingpage from './Components/Productlistingpage'
import Productdetailspage from './Components/Productdetailspage'

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          
         < Routes>

      <Route path="/" element={<Homepage/>} />
      <Route path="/Productlistingpage" element={ <Productlistingpage/>} />
      <Route path="/Productdetailspage" element={  <Productdetailspage/>} />
    

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
