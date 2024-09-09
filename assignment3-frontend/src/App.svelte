<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import AddVote from './lib/addVote.svelte';
  import AddPoll from './lib/addPoll.svelte';
  import CreateUser from './lib/createUser.svelte';

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
      <button on:click={() => showComponent('addPoll')}>Add Poll</button>
        <button on:click={() => showComponent('addVote')}>Add Vote</button>
    </ul>
  </nav>
  
  <!-- Components shown based on currentView -->
  {#if currentView === 'createUser'}
    <CreateUser />
  {:else if currentView === 'addPoll'}
    <AddPoll />
  {:else if currentView === 'addVote'}
    <AddVote />
  {/if}
</main>

<style>
  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 20px;
  }

  nav ul li a {
    text-decoration: none;
    cursor: pointer;
  }
</style>