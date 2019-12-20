import data from "@/components/lists/data.js";
import List from "@/components/ListModule/List.vue";
import Modal from "@/components/ModalModule/Modal.vue";
import Select from "@/components/SelectModule/Select.vue";

export default {
	name: "SearchSelectList",
	components: {
		List,
		Modal,
		Select
	},
	data: () => ({
		title: "Search Select List 2",
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
