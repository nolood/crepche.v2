import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App';
import store from './store';
import firebaseConfig from './firebase/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
