import React, { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import './App.css';
import ImageContainer from './components/ImageContainer';
import Modal from './components/Modal';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageContainer setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
