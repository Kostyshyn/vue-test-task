export default {
  name: "Select",
  components: {},
  props: {
    state: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    addNew: {
      type: Boolean,
      default: false
    },
    nested: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selectInput: "",
    selected: [],
    showSelectInput: false,
    showDropdown: false,
    clickDelay: 250,
    clickCount: 0,
    clickTimer: null,
    dropdownPos: null,
    customAddNew: false,
    init: true
  }),
  computed: {
    searchOptions() {
      const toSelect = this.options.filter(o => (!this.selected.some(s => s.value === o.value)));
      if (this.search && this.selectInput && this.selectInput.trim()) {
        return toSelect.filter(o => (o.label.toLowerCase().includes(this.selectInput.toLowerCase().trim())));
      } else {
        return toSelect;
      }
    },
    placeholder() {
      return (this.addNew || this.customAddNew) ? "Add new option" : "Search...";
    },
    empty() {
      return !(this.selected && this.selected.length) && !this.showSelectInput;
    }
  },
  methods: {
    handleClick() {
      this.clickCount++;
      if (this.clickCount === 1) {
        this.clickTimer = setTimeout(() => {
          this.clickCount = 0;
          this.toggleDropdown();
        }, this.clickDelay);
      } else if (this.clickCount === 2 && this.showDropdown) {
        clearTimeout(this.clickTimer);
        this.clickCount = 0;
        this.addNewInput();
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      this.setDropdownPos();
    },
    select(option, nested) {
      this.selectInput = "";
      this.showSelectInput = false;
      if (this.multiple && !this.nested) {
        this.selected.push(option);
      } else if (this.multiple && this.nested) {
        if (!nested) {
          this.selected.push(option);
          return;
        }
        const o = {
          ...option,
          subOption: nested
        };
        this.selected.push(o);
      } else {
        this.showDropdown = false;
        this.selected = [option];
      }
      this.setDropdownPos();
    },
    deselect(option) {
      this.selectInput = "";
      this.showSelectInput = false;
      this.selected = this.selected.filter(s => s.value !== option.value);
      this.setDropdownPos();
    },
    addNewInput() {
      if (this.search || this.addNew || this.customAddNew) {
        this.showSelectInput = true;
        this.$nextTick(() => {
          this.$refs["selectInput"].focus();
          this.setDropdownPos();
        });
      }
    },
    addNewOption() {
      if (this.addNew || this.customAddNew) {
        this.showSelectInput = false;
        const value = this.selectInput;
        const newOption = {
          label: value,
          value: value.toLowerCase().replace(/[.,/#!$%^&*;:{}|=\-_`~()]/g,"").replace(/\s/g, "_")
        };
        if (this.multiple) {
          this.selected.push(newOption);
        } else {
          this.selected = [newOption];
        }
        this.selectInput = "";
        this.setDropdownPos();
      }
    },
    setDropdownPos() {
      if (this.searchOptions.length && this.showDropdown) {
        this.$nextTick(() => {
          const selectedHeight = this.$refs["selectedEl"].clientHeight;
          this.dropdownPos = `${ selectedHeight + 4 }px`;
        });
      }
    },
    toggleCustomAddNew() {
      this.clear();
      this.customAddNew = !this.customAddNew;
      if (this.customAddNew) {
        this.addNewInput();
      } else {
        this.showSelectInput = false;
        this.selectInput = "";
        this.setDropdownPos();
      }
    },
    clear() {
      this.selected = [];
    },
    hideSelectInput() {
      // if (this.showSelectInput) {
      //   this.showSelectInput = false;
      //   if (this.showDropdown) {
      //     this.setDropdownPos();
      //   }
      // }
    }
  },
  watch: {
    selected: function (newSelected) {
      this.$emit("onSelect", {
        payload: newSelected,
        init: this.init
      });
      this.init = false;
    }
  },
  created(){
    if (this.state && this.state.length) {
      this.selected = [...this.state];
    }
  }
};