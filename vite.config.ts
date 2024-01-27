import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },

    plugins: [crx({ manifest }),
    obfuscatorPlugin({
      options: {
        // your javascript-obfuscator options
        debugProtection: true,
        // ...  [See more options](https://github.com/javascript-obfuscator/javascript-obfuscator)
      },
    })],
  }
})
