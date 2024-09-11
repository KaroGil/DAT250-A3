<script lang="ts">
    import { defaultFetch } from "../fetch/defaultFetch";
    import { userId } from "../store/userStore"


    interface Poll {
        id: number;
        question: string;
        validUntil: string;
        options: { caption: string; presentationOrder: number, id: number }[];
    }

    let polls: Poll[] = [];

    async function fetchPolls() {
        try {
            const response = await defaultFetch("/polls", "GET");
            polls = await response;
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    // Delete a poll
    async function deletePoll(id: number) {
        try {
        await defaultFetch(`/polls/${id}`, "DELETE");
        polls = polls.filter(poll => poll.id !== id);
        } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        }
    }

    async function vote(pollId: number, optionId: number){
        try {
            console.log($userId);
            await defaultFetch(`/vote`, "POST", undefined, { pollId: pollId, voteOptionId: optionId, votedBy: $userId});
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    fetchPolls();
</script>

<main>
    <h1>See Polls</h1>
    <ul>
        {#each polls as poll}
        <li>
            <div>
                <h3>{poll.question}</h3>
                <p><i>Valid until: [{poll.validUntil}]</i></p>
                <ul>
                    {#each poll.options as option}
                    <button on:click={() => vote(poll.id, option.id)}>
                        <p>{option.caption}</p>
                    </button>
                    {/each}
                </ul>
            </div>
            <button on:click={() => deletePoll(poll.id)}>Delete</button>
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
    button {
        margin: 0.5rem;
    }
</style>