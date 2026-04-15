import store from '@/app/store';
import App from '@/components/App';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
);
