<script lang="ts">
  import { defaultFetch } from "../fetch/defaultFetch";

  // Test data for testing
    const polls = [
    { id: 1, title: "Favorite Color", options: [{ id: 1, name: "Red" }, { id: 2, name: "Blue" }, { id: 3, name: "Green" }] },
    { id: 2, title: "Best Programming Language", options: [{ id: 4, name: "JavaScript" }, { id: 5, name: "Python" }, { id: 6, name: "Kotlin" }] }
  ];

  const pollSelect = document.getElementById("pollId") as HTMLSelectElement;
  const optionSelect = document.getElementById("optionId") as HTMLSelectElement;
  if (pollSelect && optionSelect) {

    // Poll dropdown
    polls.forEach(poll => {
        const option = document.createElement("option");
        option.value = poll.id.toString();
        option.textContent = poll.title;
        pollSelect.appendChild(option);
        });
    
    // Update options dropdown when a poll is selected
    pollSelect.addEventListener("change", function () {
        // Clear previous options
        optionSelect.innerHTML = '<option value="">--Select an Option--</option>';
        
        const selectedPoll = polls.find(poll => poll.id.toString() == pollSelect.value);
        if (selectedPoll) {
            selectedPoll.options.forEach(opt => {
                const option = document.createElement("option");
                option.value = opt.id.toString();
                option.textContent = opt.name;
                optionSelect.appendChild(option);
            });
        }
    });
    
    // Handle form submission
    const voteForm = document.getElementById("voteForm");
    if ( voteForm ){
        voteForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const selectedPollId = pollSelect.value;
            const selectedOptionId = optionSelect.value;
            const votedById = 1; // Hardcoded for now, will be dynamic later
            
            if (selectedPollId && selectedOptionId) {
                // Submit vote logic here (e.g., send a POST request to API)
                defaultFetch("/vote", "POST", undefined, { pollId: selectedPollId, optionId: selectedOptionId, votedBy: votedById});
                console.log(`Voted for poll: ${selectedPollId}, option: ${selectedOptionId}`);
            } else {
                alert("Please select a poll and an option.");
            }
        });
    }
}
</script>

<!-- Make a template to vote for created polls -->

<main>
  <h1>Vote for a poll</h1>
  <form>
    <label for="pollId">Select Poll</label>
    <select id="pollId" name="pollId" required>
      <option value="">--Select a Poll--</option>
      <!-- Poll options will be dynamically populated here -->
    </select>

    <!-- Dropdown for Poll Options -->
    <label for="optionId">Select an Option</label>
    <select id="optionId" name="optionId" required>
    <option value="">--Select an Option--</option>
    <!-- Poll options will be dynamically populated here -->
    </select>
        
    <button type="submit">Vote</button>
  </form>
</main>