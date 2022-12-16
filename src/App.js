import './App.css';
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <div className="App">
      {/*App da fazla dosya görünmemesi için AppRouter Componentini buraya çağırdım*/}
<AppRouter/>
    </div>
  );
}

export default App;

