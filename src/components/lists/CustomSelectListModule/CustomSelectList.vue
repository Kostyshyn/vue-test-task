<template>
  <div class="list-container">
    <div class="list-heading">
      <h4 class="list-title">{{ title }}</h4>
    </div>
    <List :items="selected" @click.native="editList" />
    <transition name="modal-fade" mode="out-in">
      <Modal title="Edit list 5" @close="closeModal" v-if="modalOpen">

        <Select
          custom
          :options="items"
          :state="selected"
          @onSelect="onSelect" />

        <button class="save-selected" @click="save">Save</button>

      </Modal>
    </transition>
  </div>
</template>

<script src="./CustomSelectList.component.js"></script>
<style lang="scss" src="./CustomSelectList.style.scss"></style>
