import { createPinia } from "pinia";
import {useAuthStore} from "./auth-store.ts";

export const pinia = createPinia();

export default {
    authStore: useAuthStore(pinia),
}