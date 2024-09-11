<script lang="ts">
  import Login from './lib/login.svelte';
  import AddPoll from './lib/addPoll.svelte';
  import CreateUser from './lib/createUser.svelte';
  import SeeUsers from './lib/seeUsers.svelte';
  import SeePolls from './lib/seePolls.svelte';
  import SeeVotes from './lib/seeVotes.svelte';
  import { isLoggedIn } from './store/userStore';

  // Track the current view
  let currentView = 'createUser';

  // Function to switch the view
  function showComponent(component: string) {
    currentView = component;
  }
</script>

<main>
  <h1>Poll voting app</h1>
  <nav>
    <ul>
      <button on:click={() => showComponent('createUser')}>Create User</button>
      <button on:click={() => showComponent('seeUsers')}>See Users</button>
      <button on:click={() => showComponent('login')}>Login</button>
      {#if $isLoggedIn}
        <button on:click={() => showComponent('addPoll')}>Add Poll</button>
        <button on:click={() => showComponent('seePolls')}>See Poll</button>
        <button on:click={() => showComponent('seeVotes')}>See Votes</button>
      {/if}
  
    </ul>
  </nav>
  
  <!-- Components shown based on currentView -->
  {#if currentView === 'createUser'}
    <CreateUser />
  {:else if currentView === 'addPoll'}
    <AddPoll />
  {:else if currentView === 'login'}
    <Login /> 
  {:else if currentView === 'seeUsers'}
    <SeeUsers />
  {:else if currentView === 'seePolls'}
    <SeePolls />
  {:else if currentView === 'seeVotes'}
    <SeeVotes />
  {/if}
</main>