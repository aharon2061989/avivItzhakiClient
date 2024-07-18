import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavbarComponent from "./components/NavbarComponent"
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import PensionInfo from "./components/PensionInfo";
import EducationFundInfo from "./components/EducationFundInfo";
import SeverancePayInfo from "./components/SeverancePayInfo";
import InformationGeneral from "./components/InformationGeneral";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage/>} />
        <Route path="/PensionInfo" element={<PensionInfo/>} />
        <Route path="/EducationFundInfo" element={<EducationFundInfo/>} />
        <Route path="/SeverancePayInfo" element={<SeverancePayInfo/>} />
        <Route path="/InformationGeneral" element={<InformationGeneral/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
