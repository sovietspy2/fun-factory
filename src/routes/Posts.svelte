<script>
    import Post from "./Post.svelte"
    import {onMount} from "svelte";
    import {token} from "../stores";

    let posts = [];

    const reload = () => {
        posts=[];
    }

    onMount(async () => {
        const res = await fetch('API_URL'+'/posts');
        posts = await res.json();
    });
</script>

<div>
    <h1>Posts:</h1>
    <p>your token is : {$token}</p>
    <ul>
        {#each posts as post}
            <Post
                title={post.title}
                contentText={post.contentText}
            />
        {/each}
    </ul>

    <button on:click={reload}>Get</button>

    <p>asd</p>
</div>
