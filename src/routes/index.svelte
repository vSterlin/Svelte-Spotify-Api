<script lang="ts">
  import Navbar from "../lib/components/Navbar.svelte";

  let artistName = "";

  const onSubmit = () => {};
</script>

<Navbar />
<h1>Search for fav artists' albums</h1>

<input type="text" bind:value={artistName} />
<a href={`/artists/${artistName}`}>
  <button type="submit">Search</button>
</a>
