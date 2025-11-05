import { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Frontmaster from './Front/component/Frontmaster';
import Home from './Front/pages/Home';
import About from './Front/pages/About';
import Photogallery from './Front/pages/Photogallery';
import Press from './Front/pages/Press';
import Product from './Front/pages/Product';
import Astrologyblog from './Front/pages/Astrologyblog';
import Inquiryform from './Front/pages/Inquiryform';
import ScrollToTop from './Front/component/Scrolltop';
import PopupModal from './Front/pages/Popup';
// import Astrologyconsultation from './Front/pages/astrologyconsultation';
import JAp from './Front/pages/JAp';
import Yagya from './Front/pages/Yagya';
import Newborn from './Front/pages/Newborn';
import Drishti from './Front/pages/Drishti';
import Mantra from './Front/pages/Mantra';
import Pooja from './Front/pages/Pooja';
import Vastu from './Front/pages/Vastu';
import Stonechart from './Front/pages/Stonechart';

import Astrologyconsultation from './Front/pages/Astrologyconsultation';
import Cart from './Front/pages/cart';

function App() {
  const location = useLocation(); // 👈 current route ka info milega

  return (
    <>
      <ScrollToTop />
      
      {/* 👇 PopupModal sirf Home page ('/') par dikhega */}
      {location.pathname === '/' && <PopupModal />}

      <Routes>
        <Route path='' element={<Frontmaster />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/knowmore' element={<About />} />
          <Route path='/gallery' element={<Photogallery />} />
          <Route path='/Press' element={<Press />} />
          <Route path='/product' element={<Product />} />
          <Route path='/Blog' element={<Astrologyblog />} />
          <Route path='/inquiryform' element={<Inquiryform />} />
          {/* <Route path='/astrologyconsultation' element={<Astrologyconsultation />} /> */}
          <Route path='/astrologyconsultation' element={<Astrologyconsultation/>}></Route>
          <Route path='/jap' element={<JAp />} />
          <Route path='/yagya' element={<Yagya />} />
          <Route path='/newbornastrology' element={<Newborn />} />
          <Route path='/drishti' element={<Drishti />} />
          <Route path='/mantrahealing' element={<Mantra />} />
          <Route path='/poojaservice' element={<Pooja />} />
          <Route path='/vastushastra' element={<Vastu />} />
          <Route path='/luckystonechart' element={<Stonechart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;