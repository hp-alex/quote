import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux'
import Home from './container'
// BU Kholbek App
// App updated by Makhmudjon

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Home />
        </Provider>
    </div>
  );
}

export default App;
