import type { UserConfig } from '@farmfe/core'
import vue from '@vitejs/plugin-vue'
import farmJsPluginVue from '@farmfe/js-plugin-vue'
import farmJsPluginLess from '@farmfe/js-plugin-less'

const env = process.env.NODE_ENV
const isProdMode = env === 'production'

const config: UserConfig = {
  compilation: {
    input: {
      index: './index.html'
    },
    resolve: {
      symlinks: true,
      mainFields: ['module', 'main', 'customMain'],
      extensions: ['tsx', 'jsx', 'ts', 'js', 'json','.vue', '.css'],
      alias: {
        '@': './src'
      }
    },
    output: {
      path: './dist-farm'
    },
    sourcemap: !isProdMode,
    // presetEnv: {
    //   options: {
    //     targets: 'Chrome >= 87, Firefox >= 78, Safari >= 14, Edge >= 88'
    //   }
    // }
  },
  server: {
    strictPort: true,
    hmr: true
  },
  vitePlugins: [vue()],
  // plugins: [farmJsPluginVue(), farmJsPluginLess()],
}
export default config
