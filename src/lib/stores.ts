import { writable } from "svelte/store";
import type { Product } from "./search";


export const selectedProduct = writable<any>({ data: undefined, open: false})