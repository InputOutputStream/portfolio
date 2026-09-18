import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  // base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        // three.js + drei + postprocessing are already code-split away from
        // the main entry via React.lazy on HeroExperience/ContactExperience/
        // TechIcon, but without explicit chunking Rollup still merges some
        // shared three.js internals into the main chunk. Pulling the whole
        // three.js ecosystem and gsap into their own named vendor chunks
        // keeps the main entry small and lets browsers cache these large,
        // rarely-changing libraries independently of app code changes.
        manualChunks: {
          'vendor-three': [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            '@react-three/postprocessing',
            'postprocessing',
          ],
          'vendor-gsap': ['gsap', '@gsap/react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
