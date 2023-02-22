import { createRoot } from 'react-dom/client';
import App from './App';

// webfonts
import '@monorepo/shared/fonts/inter/inter.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);
