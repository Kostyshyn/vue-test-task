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
		selected: []
	}),
	computed: {},
	methods: {
		...mapActions(["setHeaderItems"]),
		editList() {
			this.modalOpen = true;
		},
		closeModal() {
			this.modalOpen = false;
		},
		onSelect(selected) {
			this.selected = selected;
			this.setHeaderItems(selected);
		}
	},
	created() {

	}
};
