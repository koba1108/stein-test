<template>
  <section>
    <form>
      <header>New Post Form</header>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="title">
      <label for="description">説明</label>
      <input id="description" type="text" v-model="description">
      <label for="text">本文</label>
      <textarea
        id="text"
        rows="10"
        v-model="text"
      />
      <a @click="doCreate">
        <b>Create</b>
      </a>
      <a @click="doFormClear">
        <i>Clear</i>
      </a>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'ArticleAdd',
    data() {
      return {
        title: '',
        description: '',
        text: '',
      }
    },
    methods: {
      async doCreate() {
        await this.$stein.append('article', [
          {
            title: this.title,
            description: this.description,
            text: this.text,
            created_by: 'ykoba',
            created_at: this.$moment().format('YYYY/MM/DD HH:mm:ss'),
          },
        ])
        alert('create success')
        this.$router.push('/')
      },
      doFormClear() {
        this.title = ''
        this.description = ''
        this.text = ''
      },
    },
  }
</script>
