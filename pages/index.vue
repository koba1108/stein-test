<template>
  <section>
    <header>
      <h3>ヘッダー</h3>
      <button @click="goAddPage">Add</button>
    </header>
    <ArticleCard
      v-for="(a, index) in articles"
      :key="index"
      :title="a.title"
      :description="a.description"
      :text="a.text"
      @click="goArticle"
    />
  </section>
</template>

<script>
  import ArticleCard from '../components/molecules/ArticleCard'

  export default {
    components: { ArticleCard },
    data() {
      return {
        articles: [],
      }
    },
    methods: {
      goAddPage() {
        this.$router.push('/article/add')
      },
      goArticle() {
        console.log('goArticle')
      },
      async fetchArticles() {
        this.articles = await this.$stein.read('article')
      },
    },
    mounted() {
      this.fetchArticles()
    },
  }
</script>
