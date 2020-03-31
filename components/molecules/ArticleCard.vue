<template>
  <aside @click="$emit('click')">
    <h3>
      {{ title }}
      <sup v-if="isNew">new</sup>
    </h3>
    <img v-if="img" :src="img" alt="article-img">
    <p v-if="description">{{ description }}</p>
    <p class="text-ellipsis">
      <small>{{ text }}</small>
    </p>
  </aside>
</template>

<script>
  export default {
    name: 'ArticleCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      isNew: {
        type: Boolean,
        default: false,
      },
      img: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
</style>
