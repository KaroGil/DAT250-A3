<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";

    interface Vote {
        voteOptionId: number;
        pollId: number;
    }

    let votes: Vote[] = [];

    async function fetchVotes() {
        try {
            const response = await defaultFetch("/vote", "GET");
            votes = await response;
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    fetchVotes();
</script>

<main>
    <h1>See Votes</h1>
    <ul>
        {#each votes as vote}
        <li>
            <p>{vote.voteOptionId} ({vote.pollId})</p>
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