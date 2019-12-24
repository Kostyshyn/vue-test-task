import data from "@/components/lists/data.js";
import List from "@/components/ListModule/List.vue";
import Modal from "@/components/ModalModule/Modal.vue";
import Select from "@/components/SelectModule/Select.vue";

export default {
	name: "MultiSelectList",
	components: {
		List,
		Modal,
		Select
	},
	data: () => ({
		title: "Multi Select List 1",
		modalOpen: false,
		items: data,
		selected: [],
		toSelect: []
	}),
	computed: {},
	methods: {
		editList() {
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOpen = false;
			this.toSelect = [];
		},
		onSelect(selected) {
			this.toSelect = selected.payload;
		},
		save() {
			this.selected = [...this.toSelect];
			this.toSelect = [];
			this.closeModal();
		}
	},
	created() {

	}
};
