// vite.config.js
import { defineConfig } from "file:///C:/xampp/htdocs/laravel10-payment/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/xampp/htdocs/laravel10-payment/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/xampp/htdocs/laravel10-payment/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: [
        "resources/css/app.css",
        "resources/js/app.js"
      ],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcbGFyYXZlbDEwLXBheW1lbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxsYXJhdmVsMTAtcGF5bWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzoveGFtcHAvaHRkb2NzL2xhcmF2ZWwxMC1wYXltZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGxhcmF2ZWwoe1xyXG4gICAgICAgICAgICBpbnB1dDogW1xyXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9jc3MvYXBwLmNzcycsXHJcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL2FwcC5qcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdnVlKHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgIHZ1ZTogJ3Z1ZS9kaXN0L3Z1ZS5lc20tYnVuZGxlci5qcycsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiYXNlOiAnLi8nLFxyXG5cclxuICAgIFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UixTQUFTLG9CQUFvQjtBQUMxVCxPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLG9CQUFvQjtBQUFBLFVBQ2hCLE1BQU07QUFBQSxVQUNOLGlCQUFpQjtBQUFBLFFBQ3JCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUs7QUFBQSxJQUNUO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUdWLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
