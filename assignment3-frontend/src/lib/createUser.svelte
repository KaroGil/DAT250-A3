<script lang="ts">
  import { defaultFetch } from "../fetch/defaultFetch";

  let username = '';
  let email = '';
  let password = '';

  async function handleSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    try {
      // Send the POST request to the backend
      defaultFetch("/users", "POST", undefined, { username: username, email: email, password: password });
      username = '';
      email = '';
      password = '';
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
</script>

<main>
  <h1>Create a user</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" bind:value={username} required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" bind:value={email} required>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" bind:value={password} required>
    <button type="submit">Create user</button>
  </form>
</main>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
</style>