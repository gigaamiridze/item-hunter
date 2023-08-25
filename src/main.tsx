import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store';
import './styles/reset.css';
import './styles/index.css';

export const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
