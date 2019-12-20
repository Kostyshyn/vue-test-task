<template>
  <div class="list-container">
    <div class="list-heading">
      <h4 class="list-title">{{ title }}</h4>
    </div>
    <List :items="selected" @click.native="editList" />
    <transition name="modal-fade" mode="out-in">
      <Modal title="Edit list 2" @close="closeModal" v-if="modalOpen">

        <Select
          multiple
          addNew
          search
          :options="items"
          :state="selected"
          @onSelect="onSelect" />

      </Modal>
    </transition>
  </div>
</template>

<script src="./AddNewSelectList.component.js"></script>
<style lang="scss" src="./AddNewSelectList.style.scss"></style>
