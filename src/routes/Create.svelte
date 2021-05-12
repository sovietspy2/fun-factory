<script>
    let  avatar, fileinput, title, contentText;

    const create = () => {
        const formData = new FormData();
        formData.append('file', fileinput.files[0]);
        formData.append('title', title);
        formData.append('contentText', contentText);
        const upload = fetch('API_URL'+'/posts/create', {
            method: 'POST',
            body: formData
        }).then((response) => response.json()).then((result) => {
            console.log('Success:', result);
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const onFileSelected =(e)=>{
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result
        };
    }

</script>
<div id="app">
    <h1>Create post:</h1>

    <input bind:value={title} placeholder="enter your title">
    <input bind:value={contentText} placeholder="enter your content (optional)">
    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >

    {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        <button on:click={create}>Create</button>
    {:else}
        <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
    {/if}

</div>
<style>
    #app{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-flow:column;
    }

    .upload{
        display:flex;
        height:50px;
        width:50px;
        cursor:pointer;
    }
    .avatar{
        display:flex;
        height:200px;
        width:200px;
    }
</style>
