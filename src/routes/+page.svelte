<script>
    import toDos from "$lib/stores/todos";

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>To-do</h1>

<form method="POST">
    <input type="text" name="title">
    <button type="submit">Submit</button>
</form>

<p>
    data: {JSON.stringify(data)}
</p>

<p>
    todos: {JSON.stringify($toDos)}
</p>

<p>form: {JSON.stringify(form)}</p>

{#if form?.success}
	<p>Form succeeded</p>
{:else if form?.error}
    <p>Form failed</p>
{/if}