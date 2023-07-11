import './App.css';
import Slider from './Slider'

function App() {
  return (
    <div className='container'>
      <div className='image-container'></div>
      <div className='sidebar-container'>
        <button>Sidebar</button>
        <button>Sidebar</button>
      </div>
      <Slider/>
    </div>
  );
}

export default App;
