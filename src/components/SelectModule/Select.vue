<template>
  <div class="select" :class="{ 'nested': nested }">
  	<div 
      class="selected"
      :class="{ 'empty-select': empty }"
      ref="selectedEl"
      @click.self="handleClick">
      <span 
      	class="selected-option"
      	v-for="(option, i) in selected" 
      	:key="i" 
      	@click.stop="deselect(option)">
        {{ option.label }} ✖
      </span>
      <input
      	class="select-input"
      	type="text"
      	:placeholder="placeholder"
        v-model="selectInput"
      	v-if="showSelectInput" 
      	ref="selectInput"
      	@keyup.enter="addNewOption"
        @blur="hideSelectInput">
        <div class="dropdown-toggle" @click="toggleDropdown">{{ showDropdown ? "▲" : "▼" }}</div> 		
  	</div>
  	<ul
  		class="options" 
      :style="{ top: dropdownPos }"
  		v-if="searchOptions && searchOptions.length && showDropdown">
      <li
	      v-for="(option, i) in searchOptions" 
	      :key="i"> 
      	<span
	      	class="option" 
	      	@click.self="select(option)">
	        {{ option.label }}
      	</span>
      </li>
      <li class="add-new" v-if="custom" @click="toggleCustomAddNew">
        {{ customAddNew ? "Select" : "Add new" }}
      </li>
    </ul>
  </div>
</template>

<script src="./Select.component.js"></script>
<style lang="scss" scoped src="./Select.style.scss"></style>
