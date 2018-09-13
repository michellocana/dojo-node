{
  "name": "dojo-node",
  "version": "1.0.0",
  "description": "NodeJS internal dojo for Coca-Cola team (CWI)",
  "main": "index.js",
  "scripts": {
    "start": "webpack",
    "presentation-npm": "mdx-deck npm.mdx"
  },
  "bin": {
    "weather-cwi": "./index.js",
    "tafriolafora": "./index.js"
  },
  "keywords": ["dojo", "node", "weather", "cwi"],
  "author": "CWI Software",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.18.1"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "react": "^16.0.0"
  }
}
