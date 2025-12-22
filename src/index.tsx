import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'src/redux/store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ScrollToTop } from './components';
import { ConfigProvider } from 'antd';
import { theme } from 'src/config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider theme={theme}>
				<BrowserRouter>
					<ScrollToTop />
					<App />
				</BrowserRouter>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
