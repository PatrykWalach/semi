import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";
const isStorybook = process.argv[1]?.includes("storybook");

import {
  unstable_vitePlugin as remix
} from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [
    !isStorybook&&remix({
       async routes(defineRoutes){
        return defineRoutes(route=>{
          route("/", "page.tsx", {index:true})
          route("login", "login/page.tsx")
          route("register", "register/page.tsx")
          route("search", "search/page.tsx")
          route("article/:id", "article/[id]/page.tsx")
        })
      }
    }),
    tsconfigPaths()
    ,styleX(),
  ],
});
