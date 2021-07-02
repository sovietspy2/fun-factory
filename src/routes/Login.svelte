<script>
    let username = '';
    let password = '';
    import { token } from '../stores.js';
    let err = false;

    let submit = async ()=> {

        try {
            const res = await fetch('API_URL'+'/login', { method: 'POST', body: JSON.stringify({name:username, password}) });
            const loginData = await res.text();
            token.set(loginData);
            console.log("login request send successfully")
        } catch (e) {
            err = true;
            console.error("login request failed",e);
        }
    }

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
