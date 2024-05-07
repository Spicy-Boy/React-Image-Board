import './App.css';
import Header from './components/header';
import Catalog from './components/catalog';

// This is a single page app version of my Aaron-Image-Board project

function App() {
  return (
    <>
      <div className="wrapper-main">
        <Header />

        <Catalog />
      </div>

    </>
  );
}

export default App;
