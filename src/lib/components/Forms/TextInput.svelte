<script lang="ts">

  export let value: string;
  export let name: string;
  export let placeholder = "";
  export let isPassword = false;

  const id = name;

  const typeAction = (node: HTMLInputElement) => {
    node.type = isPassword ? "password" : "text";
  };
</script>

<div class="capitalize">
  <label for={id} class="label">
    <span class="label-text">{name}</span>
  </label>
  <label class="input-group">
    <span>{name}</span>
    <input
      use:typeAction
      bind:value
      {id}
      {placeholder}
      class="input input-bordered"
    />
  </label>
</div>
