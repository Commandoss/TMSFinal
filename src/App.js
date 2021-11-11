import './App.css';
import {ConptrolPanel} from "./components/ControlPanel/ConptrolPanel";

function App() {

  return (
    <div className="App">
        <div className='appMain'>
      <h3>Do you need a great password? Try to use IlyaPassword.</h3>
        <ConptrolPanel />
        </div>
        <div className='borderBottom'>{}</div>
    </div>

  );
}

export default App;
