import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, loadEnv } from 'vite';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

dotenv.config();

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
        plugins: [reactRefresh(), tsconfigPaths()],

        server: {
            port: Number(process.env.VITE_PORT) || 3000,
        },
        define: {
            'process.env.VITE_REMOTE_SERVER_URL': `"${process.env.VITE_REMOTE_SERVER_URL}"`,
            'process.env.VITE_BUILD_NUMBER': `"${process.env.VITE_BUILD_NUMBER}"`,
            'process.env.NODE_ENV': `"${mode}"`,
        },
        // root: './src',
        build: {
            outDir: '../build',
            rollupOptions: {
                input: {
                main: resolve(__dirname, 'index.html'),
                // nested: resolve(__dirname, 'nested/index.html')
                },
                external: ['src/index.tsx']
            }
        },
        
    });
};
