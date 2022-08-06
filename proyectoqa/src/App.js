import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
//import video from './assets/videos/video prueba 2.mp4'

function App() {
  return (
    <div className="App">
        <ReactPlayer
        url = {video}
        controls
        width = '70%'
        height= '70%'
        // loop (para que se vuelva a reproducir)

        />
    </div>
  );
}

export default App;
