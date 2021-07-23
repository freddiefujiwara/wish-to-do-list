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
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      items : null
    }
  },
  async mounted () {
    this.items = (
      await axios
      .get("https://script.google.com/macros/s/AKfycbwlVE-efht7MU-DPd7dWnyujLthe5OdV19G83ZPshc4-un9cNripbRLphVxVUKAfjSwdw/exec")
    ).data
    console.log(this.items)
  }
}
</script>
