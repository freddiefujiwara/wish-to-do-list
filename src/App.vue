<template>
  <div id="list">
    <header id="list-header">
      <div>List</div>
    </header>
    <div id="list-main">
      <div contenteditable="true"
           v-for="(item) in items"
           :key=item.id
           @input="onInput($event,item)"
           >
           {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = "https://script.google.com/macros/s/AKfycbzmQDCfi3aE0Rfzht658tbBbSThlnmG81X8Z5pGq1zJOCTnEQx5ScHgvk7NxhD-DfoxzQ/exec"
export default {
  name: 'App',
  data () {
    return {
      items : null
    }
  },
  methods: {
    async onInput(e,item) {
      item.title = e.target.innerText;
      await axios.post(api,JSON.stringify(item))
    }
  },
  async mounted () {
    this.items =
      (await axios.get(api)).data
  }
}
</script>
