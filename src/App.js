//import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {

  const [muestraModal, cambiaMuestraModal] = useState(true);

  return (
    <div className="App">
      {muestraModal && <Modal muestraModal={muestraModal}/>}
      <Header />
      <Banner />
      <Card category = "FRONT END" bgColor = "#6BD1FF" />
      <Card category = "BACK END" bgColor = "#00C86F" />
      <Card category = "INOVACION Y DISEÑO" bgColor = "#FFBA05" />
      <Footer />
    </div>
  );
}

export default App;
