import { useEffect, useState } from 'react';
import './App.css';
//import { Message } from './components/Message/Message'
import { Form } from './components/Form'

function App() {
    const [messages, setMessages] = useState([]);

    const handleMessage = (text) => {
        if (messages.length === 0) {
            setMessages([{ id: 0, text: text, author: 'User' }]);
        }
        else {
            setMessages([...messages, { id: messages[messages.length - 1].id + 1, text: text, author: 'User' }]);
        }
    }

    useEffect(() => {
        if (messages.length !== 0 && messages[messages.length - 1].author === "User") {
            setTimeout(() => {
                setMessages([...messages, { id: messages[messages.length - 1].id + 1, text: "Привет! Я бот.", author: 'Bot' }])
            }, 1500)
        }
    }, [messages])

    return (
        <div className="App">
            <header className="App-header">
                <Form sendMessage={handleMessage} />
                {messages.map((message) => <div key={message.id}><span className="author-name">{message.author}: </span>{message.text}</div>)}
            </header>
        </div>
    );
}

export default App;