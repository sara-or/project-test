import logo from './logo.svg';
import './App.css';
import Menu from './project-14.6/menu'
import { Provider } from 'react-redux'
import store from './project-14.6/redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Menu></Menu>
     
    </div>
    </Provider>
  );
}

export default App;
