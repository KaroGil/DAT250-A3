<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";
    import { userId, isLoggedIn } from "../store/userStore"

    let username = '';
    let password = '';
    // let userId: number | null = null;
    // let isLoggedIn = false;
  
    // Function to handle login
    async function handleLogin(event: Event) {
      event.preventDefault();
  
      const credentials = {
        "name": username,
        "password": password
      };

      console.log(credentials);
  
      try {
        const response = await defaultFetch("/users/login", "POST", undefined, credentials);
        const data = response; // Use response data
        userId.set(data.id); // Store the user ID
        if (data.id) {
          isLoggedIn.set(true);
        }
        console.log(`Logged in as ${data.name}`);

    } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  
    // Function to handle logout
    function handleLogout() {  
      userId.set(null); // Store the user ID
      isLoggedIn.set(false);
      username = '';
      password = '';
    }
  </script>
  
  <main>
    <!-- Show the login form if not logged in -->
    {#if !$isLoggedIn}
      <h2>Login</h2>
      <form on:submit|preventDefault={handleLogin}>
        <label for="username">Username:</label>
        <input type="text" id="username" bind:value={username} required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} required>
  
        <button type="submit">Login</button>
      </form>
    {:else}
      <p>Welcome, {username}! <button on:click={handleLogout}>Logout</button></p>
      <p>Logged in as user ID: {$userId}</p>
    {/if}
  </main>
  