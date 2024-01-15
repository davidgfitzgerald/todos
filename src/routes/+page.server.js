import toDos from '$lib/stores/todos';
import { fail } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // Return data that will be passed to the page component
    return {
    };
}


export const actions = {
    /**
     * 
     * @param {import("./$types").RequestEvent} event
     * @returns 
     */
    default: async (event) => {
        console.log("Hello on server")
        const { cookies, request } = event

        const data = await request.formData();
        const jsonData = Object.fromEntries(data)
        console.log(`Received: ${JSON.stringify(jsonData)}`)

        const title = data.get("title")

        if (!title) {
            return fail(400, {title, missing: true, error: true})
        }
        
        toDos.update((current) => {
            current.push(jsonData)
            return current
        })
		return { success: true };
    }
}