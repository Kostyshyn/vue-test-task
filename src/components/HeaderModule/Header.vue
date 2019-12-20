<template>
  <header>
    <ul>
      <li v-for="(item, i) in headerItems" :key="i">{{ item }}</li>
    </ul>
  </header>
</template>

<script src="./Header.component.js"></script>
<style lang="scss" src="./Header.style.scss"></style>
