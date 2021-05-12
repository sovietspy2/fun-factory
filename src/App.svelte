<script>
	export let name;
	import { Router, Link, Route } from "svelte-routing";
	import Posts from "./routes/Posts.svelte";
	import Create from "./routes/Create.svelte"
	import Login from "./routes/Login.svelte"
	import Home from "./routes/Home.svelte"
	import Register from "./routes/Register.svelte"
	export let user;
	export let url = '';
</script>

<svelte:head>
	<title>Fun Factory Wombat</title>

	<base href="/" />
</svelte:head>

<main>
	<Router url="{url}">
		<nav>
			<Link to="/">Home</Link>
			<Link to="/posts">Posts</Link>
			<Link to="/create">Create</Link>
			{#if user}
				<Link to="/profile">Profile</Link>
			{:else}
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			{/if}
		</nav>
		<div>
			<Route path="/posts/:id" component="{Posts}" />
			<Route path="/posts" component="{Posts}" />
			<Route path="/profile" component="{Posts}" />
			<Route path="/create" component="{Create}" />
			<Route path="/register" component="{Register}" />
			<Route path="/login" component="{Login}" />
			<Route path="/" component="{Home}" />
		</div>
	</Router>

</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
