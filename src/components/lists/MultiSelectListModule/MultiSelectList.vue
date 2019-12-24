<template>
  <div class="list-container">
    <div class="list-heading">
      <h4 class="list-title">{{ title }}</h4>
    </div>
    <List :items="selected" @click.native="editList" />
    <transition name="modal-fade" mode="out-in">
      <Modal title="Edit list 1" @close="closeModal" v-if="modalOpen">

        <Select
          multiple
          :options="items"
          :state="selected"
          @onSelect="onSelect" />

        <button class="save-selected" @click="save">Save</button>

      </Modal>
    </transition>
  </div>
</template>

<script src="./MultiSelectList.component.js"></script>
<style lang="scss" src="./MultiSelectList.style.scss"></style>
