// This allows us to import svg files with `import * as img from './image.svg'`
declare module '*.svg'

// This allows us to use node variables exposed by `DefinePlugin` in frontend code
declare var process: any
