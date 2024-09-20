// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "file:///D:/GitHub/sataushadh/node_modules/vite/dist/node/index.js";
import react from "file:///D:/GitHub/sataushadh/node_modules/@vitejs/plugin-react/dist/index.mjs";
import commonjs from "file:///D:/GitHub/sataushadh/node_modules/vite-plugin-commonjs/dist/index.mjs";
import dotenv from "file:///D:/GitHub/sataushadh/node_modules/dotenv/lib/main.js";
var env = dotenv.config().parsed;
var vite_config_default = defineConfig({
  plugins: [react(), commonjs(), splitVendorChunkPlugin()],
  define: {
    "process.env": env
  }
  //   build: {
  //     rollupOptions: {
  //         output: {
  //             manualChunks( id) {
  //                 if (id.includes('node_modules')) {
  //                   if (id.includes('moment-timezone')) {
  //                     return "vendor_moment_timezone"
  //                   }
  //                   return "vendor"
  //                 }
  //             }
  //         }
  //     }
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcc2F0YXVzaGFkaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXHNhdGF1c2hhZGhcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdEh1Yi9zYXRhdXNoYWRoL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgY29tbW9uanMgZnJvbSBcInZpdGUtcGx1Z2luLWNvbW1vbmpzXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuY29uc3QgZW52ID0gZG90ZW52LmNvbmZpZygpLnBhcnNlZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIGNvbW1vbmpzKCksIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKV0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBcInByb2Nlc3MuZW52XCI6IGVudixcclxuICB9LFxyXG4gIC8vICAgYnVpbGQ6IHtcclxuICAvLyAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gIC8vICAgICAgICAgb3V0cHV0OiB7XHJcbiAgLy8gICAgICAgICAgICAgbWFudWFsQ2h1bmtzKCBpZCkge1xyXG4gIC8vICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdtb21lbnQtdGltZXpvbmUnKSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidmVuZG9yX21vbWVudF90aW1lem9uZVwiXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiXHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9QLFNBQVMsY0FBYyw4QkFBOEI7QUFDelMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLFlBQVk7QUFFbkIsSUFBTSxNQUFNLE9BQU8sT0FBTyxFQUFFO0FBRTVCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLHVCQUF1QixDQUFDO0FBQUEsRUFDdkQsUUFBUTtBQUFBLElBQ04sZUFBZTtBQUFBLEVBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
