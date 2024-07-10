import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import NuevoVideo from "./components/NuevoVideo";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mModal, sMModal] = useState(false);

  function cambiaModal() {
    sMModal(!mModal);
  }


  return (
    <div className="App">
      {mModal && <Modal cambiaModal={cambiaModal} />}
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Card category="FRONT END" bgColor="#6BD1FF" cambiaModal={cambiaModal} />
              <Card category="BACK END" bgColor="#00C86F" cambiaModal={cambiaModal} />
              <Card category="INOVACION Y DISEÑO" bgColor="#FFBA05" cambiaModal={cambiaModal} />

            </>
          } />
          <Route path="nuevovideo" element={<NuevoVideo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
