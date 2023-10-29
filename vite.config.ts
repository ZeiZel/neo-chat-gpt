import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
	plugins: [react(), reactRefresh()],
	define: {
		__API__: '',
		__IS_DEV__: JSON.stringify(true),
	},
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
});
