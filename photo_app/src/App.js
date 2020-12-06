import logo from './logo.svg';
import './App.css';
import {PhotoOne} from './photoComponent';
import {PhotoTwo} from './photoComponent';
import Photo from './photoComponent';

function App() {
  return (
    <div className="App">
      <p className="para">Photo App</p>
      <PhotoOne />
      <PhotoTwo />
      <Photo />
    </div>
  );
}

export default App;
