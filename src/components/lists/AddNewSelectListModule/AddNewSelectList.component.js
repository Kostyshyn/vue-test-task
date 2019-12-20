import data from "@/components/lists/data.js";
import List from "@/components/ListModule/List.vue";
import Modal from "@/components/ModalModule/Modal.vue";
import Select from "@/components/SelectModule/Select.vue";

export default {
	name: "AddNewSelectList",
	components: {
		List,
		Modal,
		Select
	},
	data: () => ({
		title: "Add New Select List 4",
		modalOpen: false,
		items: data,
		selected: []
	}),
	computed: {},
	methods: {
		editList() {
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOpen = false;
		},
		onSelect(selected) {
			this.selected = selected;
		}
	},
	created() {

	}
};
