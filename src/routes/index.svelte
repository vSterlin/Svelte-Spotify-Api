<script lang="ts">
  let artistName = "";

  const onSubmit = () => {};
</script>

<h1>Search for fav artists' albums</h1>

<input type="text" bind:value={artistName} />
<a href={`/artists/${artistName}`}>
  <button type="submit">Search</button>
</a>
