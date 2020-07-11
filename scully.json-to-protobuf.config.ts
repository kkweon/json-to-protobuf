import { ScullyConfig, setPluginConfig } from '@scullyio/scully'
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite'

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite]
setPluginConfig(baseHrefRewrite, {
  href: '/json-to-protobuf',
})

export const config: ScullyConfig = {
  defaultPostRenderers,
  projectRoot: './src',
  projectName: 'json-to-protobuf',
  outDir: './dist/static',
  routes: {},
}
