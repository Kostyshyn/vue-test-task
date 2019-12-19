export default {
  name: "Select",
  components: {},
  props: {
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
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    searchInput: "",
    selected: [],
    showAddNewInput: false
  }),
  computed: {
    searchOptions() {
      const toSelect = this.options.filter(o => (!this.selected.some(s => s.value === o.value)));
      if (this.search && this.searchInput && this.searchInput.trim()) {
        return toSelect.filter(o => (o.label.toLowerCase().includes(this.searchInput.toLowerCase().trim())));
      } else {
        return toSelect;
      }
    }
  },
  methods: {
    select(option) {
      this.showAddNewInput = false;
      if (this.multiple && !this.nested) {
        this.selected.push(option);
      } else if (this.multiple && this.nested) {
        console.log("nested");
      } else {
        this.selected = [option];
      }
    },
    deselect(option) {
      this.showAddNewInput = false;
      this.selected = this.selected.filter(s => s.value !== option.value);
    },
    addNewInput() {
      if (this.addNew) {
        this.showAddNewInput = true;
        this.$nextTick(() => {
          this.$refs["addNewInput"].focus();
        });
      }
    },
    addNewOption() {
      this.showAddNewInput = false;
      const { value } = this.$refs["addNewInput"];
      const newOption = {
        label: value,
        value: value.toLowerCase().replace(/[.,/#!$%^&*;:{}|=\-_`~()]/g,"").replace(/\s/g, "_")
      };
      this.selected.push(newOption);
    }
  },
  created() {
    // this.$emit("onSelect", "event");
  }
};