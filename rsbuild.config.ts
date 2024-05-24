import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import Compoents from 'unplugin-vue-components/rspack';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack:{
      plugins:[
        Compoents({
          resolvers: [
            AntDesignVueResolver({
              importStyle: false, // css in js
            }),
          ],
        })
      ]
    }
  }
});
