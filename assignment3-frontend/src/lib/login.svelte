<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";

    let username = '';
    let password = '';
    let userId: number | null = null;
    let isLoggedIn = false;
  
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
        if (response) {
        const data = response; // Use response data
        userId = data.id; // Store the user ID
        isLoggedIn = true;
        console.log(`Logged in as ${data.name}`);
      } else {
        console.log('Login failed. Please check your username and password.');
      }

    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred during login.');
      }
    }
  
    // Function to handle logout
    function handleLogout() {
      userId = null;
      isLoggedIn = false;
      username = '';
      password = '';
    }
  
    // Example vote function that uses the logged-in userId
    async function handleVote(voteOptionId: number, pollId: number) {
      if (!isLoggedIn || !userId) {
        alert('You must be logged in to vote.');
        return;
      }
  
      const voteData = {
        voteOptionId,
        pollId,
        userId 
      };
  
      try {
        const response = await defaultFetch("/vote", "POST", undefined, voteData);
  
        if (response.ok) {
          alert('Vote successfully submitted!');
        } else {
          alert('Failed to submit vote.');
        }
      } catch (error) {
        console.error('Error voting:', error);
        alert('An error occurred while voting.');
      }
    }
  </script>
  
  <main>
    <!-- Show the login form if not logged in -->
    {#if !isLoggedIn}
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
      <p>Logged in as user ID: {userId}</p>
    {/if}
  </main>
  