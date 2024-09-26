import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build : {
        rollupOptions : {
            input : {
                main : resolve(__dirname,"index.html"),
                about : resolve(__dirname,"about.html"),
                service : resolve(__dirname,"service.html"),
                blog : resolve(__dirname,"blog.html"),
                contact : resolve(__dirname,"contact.html"),
                myCart : resolve(__dirname,"myCart.html"),
                store : resolve(__dirname,"store.html"),
            },
        },
    },
});