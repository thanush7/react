import logo from './logo.svg';
import './App.css';
import Great from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
function App() {
    return ( < div className = "App" >
           <Great name="jagathesh">
             <p>i am a good boy</p>
             <button> submit</button>
           </Great>
           <Welcome/>
           <Hello/>
        </div>
    );
}

export default App;