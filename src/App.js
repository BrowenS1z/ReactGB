import './App.css';
import { Message } from "./components/Message";


function App() {
    let text = "Hello";
  return (
      <div className="App">
        <header className="App-header">
          <Message message = {text} />
        </header>
      </div>
  );
}

export default App;