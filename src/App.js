import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LogiForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LogiForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="
      8aaadd7a-bcf7-4441-bbc9-770e17b4c478"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;