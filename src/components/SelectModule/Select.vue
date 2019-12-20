<template>
  <div class="select">
  	<div class="selected" @click.self="addNewInput">
      <span 
      	class="selected-option" 
      	v-for="(option, i) in selected" 
      	:key="i" 
      	@click.stop="deselect(option)">
        {{ option.label }}
        <span class="nested-selected-option" v-if="option.subOption">
          {{ option.subOption.label }}
        </span> ✖
      </span>
      <input
      	class="add-input"
      	type="text"
      	placeholder="Add new option" 
      	v-if="showAddNewInput" 
      	ref="addNewInput"
      	@keyup.enter="addNewOption"> 		
  	</div>
		<div class="search-input" v-if="search">
			<input type="text" placeholder="Search..." v-model="searchInput">
		</div>
  	<ul
  		class="options" 
  		v-if="searchOptions && searchOptions.length">
      <li
	      v-for="(option, i) in searchOptions" 
	      :key="i"> 
      	<span
	      	class="option" 
	      	@click.self="select(option)">
	        {{ option.label }}
      	</span>
        <ul 
        	class="nested-options" 
        	v-if="nested && option.subItems && option.subItems.length">
        	<li
        		v-for="(subOption, k) in option.subItems" 
	        	:key="k">
        		<span
	        		class="nested-option"
	        		@click.self="select(option, subOption)">
	          	{{ subOption.label }}
        		</span>
        	</li>
        </ul>
      </li>
    </ul>
    <div class="empty" v-else>
    	No data
    </div>
    <div class="create-new" v-if="custom" @click="addNewInput">
    	Create new
    </div>
  </div>
</template>

<script src="./Select.component.js"></script>
<style lang="scss" scoped src="./Select.style.scss"></style>
