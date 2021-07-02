<script>
    let username = '';
    let password = '';
    let email = '';
    let language = '';
    let languages = [
        { id: "ENG", text: `English` },
        { id: "HUN", text: `Hungarian` },
        { id: "GER", text: `German` }
    ];

    async function registerUser() {
        const res = await fetch('API_URL'+'/register',
            {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({name:username, password, language})
            });
        const loginData = await res.text();
        console.log(loginData)
    }

    let submit = ()=>registerUser();
</script>

<form on:submit|preventDefault={submit}>
    <p>Welcome! Join us! You can register here!</p>
    <div>
        <select bind:value={language}>
            {#each languages as lang}
                <option value={lang.id}>
                    {lang.text}
                </option>
            {/each}
        </select>

    </div>
    <div>
        <input bind:value={username} placeholder="enter your name">
    </div>
    <div>
        <input bind:value={password} type="password" placeholder="enter your password">
    </div>
    <div>
        <button on:click={submit}>Register</button>
    </div>
</form>
