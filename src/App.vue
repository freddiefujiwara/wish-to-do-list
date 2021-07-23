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
  data() {
    return {
      items: [
        { id: 0, title: "item-0", indent: 0},
        { id: 1, title: "item-1", indent: 1},
        { id: 2, title: "item-2", indent: 1},
      ]
    }
  }
}
</script>
