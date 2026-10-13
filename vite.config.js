import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveCommit() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_SHA
  if (fromVercel) return fromVercel.slice(0, 7)
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return 'dev'
  }
}

const appCommit = resolveCommit()
const appBuildTime = new Date().toISOString()

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_COMMIT': JSON.stringify(appCommit),
    'import.meta.env.VITE_APP_BUILD_TIME': JSON.stringify(appBuildTime),
  },
  server: {
    cors: true, // Dit lost het CORS probleem uit de Trimble documentatie op
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})