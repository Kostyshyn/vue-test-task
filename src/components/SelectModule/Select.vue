<template>
  <div class="select">
  	<div class="selected" @click.self="addNewInput">
      <span 
      	class="selected-option" 
      	v-for="(option, i) in selected" 
      	:key="i" 
      	@click.stop="deselect(option)">
        {{ option.label }} ✖
        <span class="nested-selected-option" v-if="option.subOption">
          {{ option.subOption.label }}
        </span>
      </span>
      <input
      	class="add-input"
      	type="text"
      	placeholder="Add new option" 
      	v-if="showAddNewInput" 
      	ref="addNewInput"
      	@keyup.enter="addNewOption"> 		
  	</div>

  	<div 
  		class="options" 
  		v-if="searchOptions && searchOptions.length">
      <span 
      	class="option" 
      	v-for="(option, i) in searchOptions" 
      	:key="i" 
      	@click.self="select(option)">
        {{ option.label }} root
        <div 
        	class="nested-options" 
        	v-if="nested && option.subItems && option.subItems.length">
        	<span 
        		class="nested-option" 
        		v-for="(subOption, k) in option.subItems" 
        		:key="k">
          	{{ subOption.label }} sub
        	</span>
        </div>
      </span>
    </div>
    <div v-else>
    	no data
    </div>

		<div class="search-input" v-if="search">
			<input type="text" v-model="searchInput">
		</div>
  </div>
</template>

<script src="./Select.component.js"></script>
<style lang="scss" src="./Select.style.scss"></style>
