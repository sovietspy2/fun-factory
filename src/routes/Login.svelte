<script>
    let username = '';
    let password = '';
    let submit = ()=>console.log("loL");
</script>

<div>
    <p>Hello {name || 'stranger'}!</p>
    <div>
        <input bind:value={username} placeholder="enter your name">
    </div>
    <div>
        <input bind:value={password} type="password" placeholder="enter your name">
    </div>
    <div>
        <button on:click={submit}>Login</button>
    </div>
</div>
