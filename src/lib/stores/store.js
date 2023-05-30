// import { browser } from '$app/environment';
import { writable } from "svelte/store";

export const ipStore = writable({});

export const currentLocation = writable({});

export const msg = writable();

