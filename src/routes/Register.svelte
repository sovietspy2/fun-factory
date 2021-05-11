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
    let submit = ()=>console.log("loL");
</script>

<form on:submit|preventDefault={submit}>
    <p>Welcome! Join us! You can register here!</p>
    <div>
        <select value={language} on:change="{() => language = ''}">
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
        <input bind:value={password} type="password" placeholder="enter your name">
    </div>
    <div>
        <button on:click={submit}>Register</button>
    </div>
</form>
