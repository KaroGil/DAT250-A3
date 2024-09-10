<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";
    
    interface User {
        id: number;
        name: string;
        email: string;
    }
    
    let users: User[] = [];
    
    // Fetch all users
    async function fetchUsers() {
        try {
        const response = await defaultFetch("/users", "GET");
        users = await response;
        } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        }
    }
    
    // Delete a user
    async function deleteUser(id: number) {
        try {
        await defaultFetch(`/users/${id}`, "DELETE");
        users = users.filter(user => user.id !== id);
        } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        }
    }
    
    // Call the fetchUsers function when the component is mounted
    fetchUsers();
</script>

<main>
    <h1>Users</h1>
    <ul>
        {#each users as user}
        <li>
            <p>{user.name} ({user.email})</p>
            <button on:click={() => deleteUser(user.id)}>Delete</button>
        </li>
        {/each}
    </ul>
</main>

<style>
    ul {
      list-style-type: none;
    }
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>