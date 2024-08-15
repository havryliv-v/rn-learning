import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactNative from 'eslint-plugin-react-native'

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node, ...globals.es2022},
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactNative.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {ignores: ['node-modules', 'dist']},
  {
    env: {
      node: true,
    },
  },
  {
    plugins: {
      react: {
        version: 'detect',
      },
    },
  },
]
