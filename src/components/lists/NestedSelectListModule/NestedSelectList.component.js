import data from "@/components/lists/data.js";
import List from "@/components/ListModule/List.vue";
import Modal from "@/components/ModalModule/Modal.vue";
import Select from "@/components/SelectModule/Select.vue";

export default {
	name: "NestedSelectList",
	components: {
		List,
		Modal,
		Select
	},
	data: () => ({
		title: "Nested Select List 3",
		modalOpen: false,
		items: data,
		selected: [],
		selects: []
	}),
	computed: {
		nestedItems() {
			const hasSubs = this.items.filter(i => (i.subItems && i.subItems.length));
			return hasSubs.filter(o => (!this.selects.some(s => {
				if (s.root.state[0]) {
					return s.root.state[0].value === o.value;
				} else {
					return false;
				}
			})));
		},
		complete() {
			return this.selects.filter(f => {
				return (f.root.state && f.root.state.length) && (f.sub.state && f.sub.state.length);
			});
		},
		selectHaveValue() {
			return this.selects.every(s => (s.root.state[0] && s.root.state[0].value));
		}
	},
	methods: {
		editList() {
			this.modalOpen = true;
			if (!this.selects.length) {
				this.createSelectObj();
			} else {
				this.selects = this.complete;
			}
		},
		closeModal() {
			this.modalOpen = false;
			if (!this.selected.length) {
				this.selects = [];
			}
		},
		rootOnSelect(selected, current, k) {
			current.root.state = [];
			if (!selected.init) {
				this.$refs["sub_" + k][0].clear();
			}
			if (selected.payload && selected.payload.length) {
				current.root.state = [selected.payload[0]];
				current.sub.options = [...selected.payload[0].subItems];
			}
		},
		subOnSelect(selected, current) {
			current.sub.state = [];
			if (selected.payload && selected.payload.length) {
				current.sub.state = [selected.payload[0]];
			}
		},
		addNewSelect() {
			this.createSelectObj();
		},
		createSelectObj() {
			if (this.nestedItems.length) {
				const o = {
					root: {
						state: []
					},
					sub: {
						options: [],
						state: []					
					}
				};
				this.selects.push(o);
			}
		},
		save() {
			this.selected = this.complete.map(s => {
				return  {
					label: s.root.state[0].label,
					value: s.root.state[0].value,
					subOption: s.sub.state[0]
				}
			});
			this.selects = this.complete;
			this.closeModal();
		}
	},
	created() {

	}
};
