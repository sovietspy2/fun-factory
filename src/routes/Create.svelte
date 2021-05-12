<script>
    let avatar, fileinput, title, contentText;

    let done = false;
    let err = false;

    const create = () => {
        const formData = new FormData();
        formData.append('file', fileinput.files[0]);
        formData.append('title', title);
        formData.append('contentText', contentText);
        const upload = fetch('API_URL' + '/posts/create', {
            method: 'POST',
            body: formData
        })
            .then((result) => {
                console.log('Success:', result);
                done = true;
            })
            .catch((error) => {
                console.error('Error:', error);
                err = error;
            });
    };

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result
        };
    }

</script>
<div id="app">

    {#if err}
        <p class="err">Error: {err}</p>
    {/if}

    {#if done}
        <p class="success">Post created!</p>
    {:else}

        <h1>Create post:</h1>
        <input bind:value={title} placeholder="enter your title">
        <input bind:value={contentText} placeholder="enter your content (optional)">
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)}
               bind:this={fileinput}>

        {#if avatar}
            <img class="avatar" src="{avatar}" alt="d"/>
            <button on:click={create}>Create</button>
        {:else}
            <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt=""
                 on:click={()=>{fileinput.click();}}/>
            <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        {/if}
    {/if}

</div>
<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    .upload {
        display: flex;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }

    .success {
        color: green;
    }

    .err {
        color: red;
    }

    .avatar {
        display: flex;
        height: 200px;
        width: 200px;
    }
</style>
