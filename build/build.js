'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('开始打包...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  打包时出错啦 _(:з」∠)_ \n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  打包完成,耶~~~ ( • ̀ω•́ )✧ \n'))
    console.log(chalk.yellow(
      '  Tip: 你需要以 http:// 协议来打开dist下的index.html \n' +
      '  通过 file:// 可能会有问题.\n'
    ))
  })
})
