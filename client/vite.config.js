import { defineConfig, loadEnv } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	const plugins = [
		VuePlugin(),
	]

	return defineConfig({
	
		server: {
			fs: { strict: false },
			port: process.env.VITE_PORT,
		},
	
		plugins,
	
		resolve: {
			alias: {
				'@': path.resolve(__dirname, '/src'),
			},
		},
	})
}
