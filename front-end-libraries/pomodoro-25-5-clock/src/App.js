import './App.css';
import BreakLength from './BreakLength';
import Provider from './Provider';
import SessionLength from './SessionLength';
import Timer from './Timer';

function App() {
  return (
    <Provider>
      <h1>25 + 5 Clock</h1>
      <SessionLength />
      <BreakLength />
      <Timer />
    </Provider>
  );
}

export default App;
