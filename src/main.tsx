import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App.tsx';
import './index.css';
import { store } from './redux/store/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
