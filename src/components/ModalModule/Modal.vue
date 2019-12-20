<template>
  <div class="modal-backdrop-click" @click.self="close">
    <div class="modal">
      <h4 class="modal-title">{{ title }}</h4>
     	<span class="close" @click="close">✖</span>
	    <div class="modal-body">
        <slot></slot>
     	</div>
    </div>
  </div>
</template>

<script src="./Modal.component.js"></script>
<style lang="scss" scoped src="./Modal.style.scss"></style>
