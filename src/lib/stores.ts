import { writable } from "svelte/store";
import type { Product } from "./search";
import { persisted } from 'svelte-persisted-store'


export const selectedProduct = writable<any>({ data: undefined, open: false})

export const favorites = persisted('favorites', { expanded: true, entries: []})