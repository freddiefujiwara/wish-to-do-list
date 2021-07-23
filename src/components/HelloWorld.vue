<template>
  <div class="hello">
    <h1>ToDo List</h1>

    <label v-for="label in options"
           :key ="label.id">
           <input type="radio"
                  v-model="current"
                  v-bind:value="label.value">{{ label.label }}
    </label>
      （{{ computedTodos.length }} 件を表示）

      <table>
        <thead v-pre>
          <tr>
            <th class="id">ID</th>
            <th class="comment">コメント</th>
            <th class="state">状態</th>
            <th class="button">-</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in computedTodos"
            :key="item.id"
            v-bind:class="{done:item.state}">
            <th>{{ item.id }}</th>
            <td>{{ item.comment }}</td>
            <td class="state">
              <!-- ★STEP10 状態変更ボタン -->
              <button v-on:click="doChangeState(item)">
                {{ labels[item.state] }}
              </button>
            </td>
            <td class="button">
              <!-- ★STEP10 削除ボタン -->
              <button v-on:click.ctrl="doRemove(item)">
                削除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>

      <!-- ★STEP6 -->
      <h2>新しい作業の追加</h2>
      <form class="add-form" v-on:submit.prevent="doAdd">
        <!-- コメント入力フォーム -->
        コメント <input type="text" ref="comment">
        <!-- 追加ボタンのモック -->
        <button type="submit">追加</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
