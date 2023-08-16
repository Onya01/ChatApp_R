import { useState } from "react";
import axios from "axios";

const LogiForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': "8aaadd7a-bcf7-4441-bbc9-770e17b4c478", 'User-Name': username, 'User-Secret': password };

        try {
            axios.get('https://api.chatengine.io/chat', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password',
             password);

             window.location.reload();

        } catch (error) {
            setError('Oops. incorrect credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 align="center" >Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required
                    />
                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>START CHATTING</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}
 
export default LogiForm;