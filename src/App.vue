<template>
  <div id="list">
    <header id="list-header">
      <div>List</div>
    </header>
    <div id="list-main">
      <div contenteditable="true"
           v-for="(item) in items"
           :key=item.id
           >
           {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  async data() {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwlVE-efht7MU-DPd7dWnyujLthe5OdV19G83ZPshc4-un9cNripbRLphVxVUKAfjSwdw/exec")
    return await response.json()
  }
}
</script>
