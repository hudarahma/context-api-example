
import './App.css';
import ContextProvider from './ContextProvider';
import Profile from './Profile'

function App() {
  return (
    <ContextProvider>
      <Profile />
    </ContextProvider>
  );
}

export default App;
