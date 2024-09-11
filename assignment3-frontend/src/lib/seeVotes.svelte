<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";

    interface Vote {
        voteOptionId: number;
        pollId: number;
    }

    interface Poll {
        id: number;
        question: string;
        options: VoteOption[];
    }

    interface VoteOption {
        id: number;
        caption: string;
        presentationOrder: number;
    }

    let votes: Vote[] = [];
    let polls: Poll[] = [];
    let isLoading = true;

    // Fetch Votes
    async function fetchVotes() {
        try {
            const response = await defaultFetch("/vote", "GET");
            votes = await response;
        } catch (error) {
            console.error('Error fetching votes:', error);
            alert('An error occurred. Please try again.');
        }
    }

    // Fetch Polls (with options)
    async function fetchPolls() {
        try {
            const response = await defaultFetch("/polls", "GET");
            polls = await response;
        } catch (error) {
            console.error('Error fetching polls:', error);
            alert('An error occurred while fetching polls.');
        }
    }

    // Fetch all the data when the component is mounted
    async function fetchAllData() {
        await Promise.all([fetchVotes(), fetchPolls()]);
        isLoading = false;
    }

    fetchAllData();

    // Helper function to count votes for each option in a poll
    function getVoteCount(voteOptionId: number): number {
        return votes.filter(vote => vote.voteOptionId === voteOptionId).length;
    }
</script>

<main>
    <h1>Poll Results</h1>

    <!-- Show loading state until data is fetched -->
    {#if isLoading}
      <p>Loading...</p>
    {:else}
      <ul>
        {#each polls as poll}
          <li>
              <h2>{poll.question}</h2>
              <ul>
                {#each poll.options as option}
                  <li>
                    {option.caption}: {getVoteCount(option.id)} {getVoteCount(option.id) === 1 ? 'Vote' : 'Votes'}
                  </li>
                {/each}
              </ul>
          </li>
        {/each}
      </ul>
    {/if}
</main>

<style>
    ul {
        list-style-type: none;
        padding-left: 0;
    }

    li {
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1.5em;
        margin-bottom: 5px;
    }
</style>
