const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired")
const rewireLess = require('react-app-rewire-less')
module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  )

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [tsImportPluginFactory({
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true,
      })]
    })
  }
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { 'primary-color': '#598fe8',      // 全局主色
    'info-color': '#598fe8',
    'btn-default-border': '#598fe8',
    'btn-default-color': '#598fe8',
    'link-color': '#598fe8',           // 链接色
    'success-color': '#32cb81',        // 成功色
    'warning-color': '#f7bd20',        // 警告色
    'error-color': '#dc4c40',          // 错误色
    'font-size-base': '14px',       // 主字号
    'heading-color': '#32375a',        // 标题色
    'text-color': '#32375a',           // 主文本色
    'text-color-secondary': '#727b8d', // 次文本色
    'disabled-color': '#a0a4ad',       // 失效色
    'btn-border-radius-base': '18px',
    'border-radius-base': '4px',   // 组件/浮层圆角
    'border-color-base': '#D6D8DD',    // 边框色
    'switch-color': '#32CB81',
    'message-notice-content-padding': '20px 36px',
    'modal-mask-bg': 'rgba(0, 0, 0, 0.2)' },
     }) (config, env)
return config
}