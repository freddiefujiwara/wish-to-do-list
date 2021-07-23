<template>
  <div id="list">
    <header id="list-header">
      <div>List</div>
    </header>
    <div id="list-main">
      <div contenteditable="true"
           v-for="(item, index) in items"
           :key=item.id
           >
           {{ item.title }}
      </div>
    </div>
  </div>
  <div id="tree">
    <header id="tree-header">
      Tree
    </header>
    <pre id="tree-main">{{ tree }}</pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    tree() {
      return this.items.map(item => item.title).join('\n');
    }
  },
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
