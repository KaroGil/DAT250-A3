<script lang="ts">
  import { defaultFetch } from "../fetch/defaultFetch";
  let question = '';
  let validUntil = '';
  let isPublic = '';

  // Options data
  let optionCaption = '';
  let presentationOrder = 1;
  let options: { caption: string; presentationOrder: number }[] = [];

  // Add an option to the options array
  function addOption() {
    options = [...options, { caption: optionCaption, presentationOrder }];
    optionCaption = '';
    presentationOrder = options.length + 1;
  }


  async function handleSubmit(event: Event) {
    event.preventDefault();

    const pollData = {
      question,
      validUntil: new Date(validUntil).toISOString(),
      options: options,
      isPublic
    };

    try {
      defaultFetch("/polls", "POST", undefined, pollData);
      question = '';
      validUntil = '';
      isPublic = '';
      options = [];
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
</script>

<main>
  <h1>Add a poll</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="question">Question</label>
    <input type="text" id="question" name="question" bind:value={question} required>
    <label for="validUntil">Valid Until</label>
    <input type="datetime-local" id="validUntil" name="validUntil" bind:value={validUntil} required>
    <label for="isPublic">Public poll</label>
    <input type="checkbox" id="isPublic" name="isPublic" bind:value={isPublic} required>

     <!-- Option inputs -->
     <h2>Add Options</h2>
     <label for="optionCaption">Option Caption</label>
     <input type="text" id="optionCaption" name="optionCaption" bind:value={optionCaption}>
 
     <button type="button" on:click={addOption}>Add Option</button>
 
     <!-- List of added options -->
     <ul>
       {#each options as option}
         <li>{option.caption}</li>
       {/each}
     </ul>

    <button type="submit">Add poll</button>
  </form>
</main>

<style>
  ul {
    list-style-type: none;
  }
  li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }
</style>