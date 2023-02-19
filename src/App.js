import './App.css';

import Navbar from './component/Navbar'
import TextForm from './component/Textform';
function App() {
  return (
    <>
    <Navbar title="TextMaster"/>
    <div className='container my-3'>
      <TextForm heading="Enter your text in the box below"/>
    </div>
    </>
  );
}

export default App;
