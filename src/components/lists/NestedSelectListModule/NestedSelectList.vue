<template>
  <div class="list-container">
    <div class="list-heading">
      <h4 class="list-title">{{ title }}</h4>
    </div>
    <List :items="selected" @click.native="editList" />
    <transition name="modal-fade" mode="out-in">
      <Modal title="Edit list 3" @close="closeModal" v-if="modalOpen">

        <div class="select-row" v-for="(select, s) in selects" :key="s">
          <Select
            nested
            :options="nestedItems"
            :state="select.root.state"
            @onSelect="rootOnSelect($event, select, s)" />            
          <Select
            nested
            :options="select.sub.options"
            :state="select.sub.state"
            :ref="'sub_' + s"
            @onSelect="subOnSelect($event, select)" />
        </div>

        <button 
          class="new-select" 
          v-if="selectHaveValue && nestedItems.length" 
          @click="addNewSelect">Add new</button>        

        <button class="save-selected" @click="save">Save</button>

      </Modal>
    </transition>
  </div>
</template>

<script src="./NestedSelectList.component.js"></script>
<style lang="scss" src="./NestedSelectList.style.scss"></style>
