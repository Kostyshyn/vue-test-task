import data from "@/components/lists/data.js";
import List from "@/components/ListModule/List.vue";
import Modal from "@/components/ModalModule/Modal.vue";
import Select from "@/components/SelectModule/Select.vue";
import { mapActions } from 'vuex';

export default {
	name: "CustomSelectList",
	components: {
		List,
		Modal,
		Select
	},
	data: () => ({
		title: "Custom Select List 5",
		modalOpen: false,
		items: data,
		selected: [],
		toSelect: []
	}),
	computed: {},
	methods: {
		...mapActions(["setHeaderItems"]),
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
			this.setHeaderItems(this.toSelect);
			this.toSelect = [];
			this.closeModal();
		}
	},
	created() {

	}
};
