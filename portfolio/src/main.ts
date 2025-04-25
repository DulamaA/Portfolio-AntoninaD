import './styles/main.scss';
import App from './App';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) app.append(App());
