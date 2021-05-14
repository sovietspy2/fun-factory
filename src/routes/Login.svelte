<script>
    let username = '';
    let password = '';
    import { token } from '../stores.js';
    let err = false;


    let submit = async ()=> {

        try {
            const res = await fetch('API_URL'+'/login', { method: 'POST', body: JSON.stringify({name:username, password:password}) });
            const loginData = await res.text();
            token.set(loginData);
        } catch (e) {
            err = true;
            console.error(e);
        }
    }
    console.log("loL");
</script>

<div>
    <p>Hello {name || 'friend'}!</p>
    <div>
        <input bind:value={username} placeholder="enter your name">
    </div>
    <div>
        <input bind:value={password} type="password" placeholder="enter your password">
    </div>
    <div>
        <button on:click={submit}>Login</button>
    </div>
</div>
