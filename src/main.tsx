import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Suspense } from 'react';
import App from './App';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyCr9EQak74-k-LltOQrBmSEEOAvMm2ejgs',
  authDomain: 'crep-chea.firebaseapp.com',
  projectId: 'crep-chea',
  storageBucket: 'crep-chea.appspot.com',
  messagingSenderId: '810512950589',
  appId: '1:810512950589:web:478fb1a3182f078bf01154',
  measurementId: 'G-LKGN5XEQNG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<div>Загрузка</div>}>
      <App />
    </Suspense>
  </Provider>,
);
