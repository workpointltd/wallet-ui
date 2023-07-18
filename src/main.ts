import { createApp } from 'vue';
import vuetify from "./plugins/vuetify.ts";
import './style.css';
import App from "./App.vue"
import router from "./router";
import nProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";
import axios from "axios";
import store from "./store";
import {createPinia} from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.mount("#app");

const { authStore } = store;

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        nProgress.start();
        return config;
    },
    function (error) {
        // Do something with request error
        console.error("request error", error);
        authStore.addAlerts("error", error.message);
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        nProgress.done();
        return response;
    },
    function (error) {
        // Do something with response error
        console.error("response error", error);
        authStore.addAlerts("error", error.message);
        return Promise.reject(error);
    }
);

router.beforeEach(to => {
    authStore.setLoading(true);
    if (to.meta.requiresAuth) {
        authStore
            .initialize()
            .then((data: any) => {
                authStore.setAuthState(data);
            })
            .catch(() => {
                // authStore.setAuthPrompt(true);
                setTimeout(() => {
                    // const currentUrl = window.location.href;
                    // window.location.href = `${
                    //     import.meta.env.VITE_APP_ROOT
                    // }?redirect_url=${currentUrl}`;
                }, 5000);
            })
            .catch((e: any) => {
                console.log(JSON.stringify(e));
            })
            .finally(() => {
                authStore.setLoading(true);
            });
    } else {
        console.log("requiresAuth", to.meta.requiresAuth);
    }
});
