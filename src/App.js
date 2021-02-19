import logo from './logo.svg';
import './App.css';
import KonvajsDemo from './components/KonvajsDemo';
import ColoredRectDemo from './components/ColorRectDemo';
import ShapesDemo from './components/ShapesDemo';
import ThemeDemo from './components/ThemeDemo';
import ImagesDemo from './components/ImagesDemo';
import AnimationsDemo from './components/AnimationsDemo';

function App() {
  return (
    <div className="App">
      <KonvajsDemo/>
      <ColoredRectDemo/>
      <ShapesDemo/>
      <ThemeDemo/>
      <ImagesDemo/>
      {/* <AnimationsDemo/> */}
    </div>
  );
}

export default App;
