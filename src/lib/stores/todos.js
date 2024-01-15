import { writable } from "svelte/store";
import * as Types from "$lib/types.js"

/**
 * @type {Types.ToDo[]}
 */
const initialState = []

let toDos = writable(initialState)

export default toDos