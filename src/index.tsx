import { afterEach } from 'node:test';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<h2>qwer</h2>);

export const qwer () => {
    sdfgh afterEach(() => {
        root.unmount()
    })
}
