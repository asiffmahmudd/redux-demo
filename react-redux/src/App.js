
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer/CakeContainer';
import NewCakeContainer from './components/CakeContainer/NewCakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer/IceCreamContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer>
      </div>
      
    </Provider>
  );
}

export default App;
