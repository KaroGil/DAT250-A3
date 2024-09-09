<script lang="ts">

</script>

<!-- TODO: add fetch to Post to backend  -->

<main>
  <h1>Add a poll</h1>
  <form>
    <label for="question">Question</label>
    <input type="text" id="question" name="question" required>
    <label for="validUntil">Valid Until</label>
    <input type="text" id="validUntil" name="validUntil" required>
    <label for="options">Options</label>
    <input type="text" id="options" name="options" required>
    <label for="isPublic">Public poll (true / false)</label>
    <input type="text" id="isPublic" name="isPublic" required>
    <!-- Logic should also add publishedAt, and creatorUserId ( in backend probably )-->
    <button type="submit">Add poll</button>
  </form>
</main>