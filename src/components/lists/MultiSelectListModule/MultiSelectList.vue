<template>
  <div>
    <div class="list-heading">
      <h4 class="list-title">{{ title }}</h4>
    </div>
    <List :items="[]" @click.native="editList" />
    <transition name="modal-fade" mode="out-in">
      <Modal title="List modal" @close="closeModal" v-if="modalOpen">

        <Select
          multiple 
          search
          addNew
          :options="items" 
          @onSelect="onSelect" />

      </Modal>
    </transition>
  </div>
</template>

<script src="./MultiSelectList.component.js"></script>
<style lang="scss" src="./MultiSelectList.style.scss"></style>
