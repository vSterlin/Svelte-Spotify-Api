<script lang="ts">
  import TextInput from "../Forms/TextInput.svelte";

  let formValues = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {
    console.log(formValues);
  };
</script>

<h1>Sign Up</h1>
<form on:submit|preventDefault={handleSubmit}>
  <TextInput name="email" placeholder="email" value={formValues.email} />
  <TextInput
    name="password"
    isPassword
    value={formValues.password}
  />

  <button>Submit</button>
</form>
