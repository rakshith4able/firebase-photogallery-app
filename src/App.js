import Header from './components/Header';
import UploadForm from './components/UploadForm';
import './App.css';
import ImageContainer from './components/ImageContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageContainer />
    </div>
  );
}

export default App;
