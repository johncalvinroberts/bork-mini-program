const path = require('path')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  eslint: true,
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    modules: ['node_modules']
  },
  compilers: {
    less: {
      'compress': true
    },
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    'autoprefixer': {
      filter: /\.wxss$/,
      config: {
        browsers: ['last 11 iOS versions']
      }
    },
    'uglifyjs': {
      filter: /\.js$/,
      config: {}
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  delete module.exports.compilers.babel.sourcesMaps
  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    axios: {},
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        'jpg': {
          quality: 80
        },
        'png': {
          quality: 80
        }
      }
    }
  }
}
