import App from './App.svelte';

import { token } from './stores.js';

let tokenProp = null

const unsubscribe = token.subscribe(value => {
	console.log("A VALUE:"+value)
	tokenProp = value;
});

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		token:tokenProp
	}
});

export default app;
