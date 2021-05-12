<script>
    let data;

    const create = () => {
        data = fetch('API_URL'+'/posts').then((response) => response.json()).then((result) => {
            console.log('Success:', result);
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
</script>

<div>
    <button on:click={create}>Get</button>
    <h1>Posts:</h1>

    <p>asd</p>
</div>
