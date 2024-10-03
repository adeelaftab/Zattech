import { createSignal } from "solid-js";

const initalValue = localStorage.getItem("dark-mode");

export const [dark, setDark] = createSignal(initalValue === "true");
