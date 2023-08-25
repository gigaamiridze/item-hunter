import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store';
import '../src/assets/styles/reset.css';
import '../src/assets/styles/index.css';

export const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
