import './App.css';
import Header from './components/header';
import Catalog from './components/catalog';
import ThreadView from './components/threadView';

// This is a single page app version of my Aaron-Image-Board project

function App() {
  return (
    <>
      <div className="wrapper-main">
        <Header />
        <div className="wrapper-panels">
          <Catalog />
          <ThreadView />
        </div>
      </div>

    </>
  );
}

export default App;
