const e="94list-frontend",s="1.3.11",t="module",i={dev:"vite",build:"pnpm type-check & pnpm build-only","remove-css":"tsx ./scripts/remove-css.js","revoer-css":"tsx ./scripts/recover-css.js",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --build --force",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",format:"prettier --write src/"},n={axios:"^1.7.2","element-plus":"2.7.7",pinia:"^2.1.7",vue:"^3.4.32","vue-demi":"^0.14.8","vue-router":"^4.4.0"},p={"@rushstack/eslint-patch":"^1.10.3","@tsconfig/node20":"^20.1.4","@types/node":"^20.14.11","@vitejs/plugin-vue":"^5.0.5","@vue/eslint-config-prettier":"^9.0.0","@vue/eslint-config-typescript":"^13.0.0","@vue/tsconfig":"^0.5.1","async-validator":"^4.2.5",eslint:"^8.57.0","eslint-plugin-vue":"^9.27.0","npm-run-all2":"^6.2.2",prettier:"^3.3.3","rollup-plugin-visualizer":"^5.12.0",sass:"^1.77.8",tsx:"^4.16.2",typescript:"~5.5.3","unplugin-auto-import":"^0.18.0","unplugin-vue-components":"^0.27.3",vite:"^5.3.4","vite-plugin-cdn-import":"^1.0.1","vite-plugin-compression":"^0.5.1","vue-tsc":"^2.0.26"},c={name:e,version:s,type:t,scripts:i,dependencies:n,devDependencies:p};export{c as default,n as dependencies,p as devDependencies,e as name,i as scripts,t as type,s as version};
