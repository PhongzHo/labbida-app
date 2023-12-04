import './App.css';
import {Navbar, Carousel} from './components';

function App() {
  return (
    <main>
      <div className="bg-black w-full overflow-hidden"> 
      <Navbar />
      </div>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-2 relative">
      <Carousel />
      </div>
    </main>
  )
      
}

export default App;

