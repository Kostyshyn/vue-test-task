<template>
  <div class="list-wrapper">
    <div class="list" v-if="items && items.length">
      <span class="list-item" v-for="(item, i) in items" :key="i">
        {{ item.label }}
        <span class="nested-list-item" v-if="item.subItem">
          {{ item.subItem.label }}
        </span>
      </span>
    </div>
    <div class="list" v-else>
      <span class="empty-list">Select items</span>
    </div>
  </div>
</template>

<script src="./List.component.js"></script>
<style lang="scss" src="./List.style.scss"></style>
