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
		items: [
			{
				label: "test item 1",
				value: "test_item_1",
				subItems: [
					{
						label: "sub item",
						value: "sub_item"
					}
				]
			},
			{
				label: "test item 2",
				value: "test_item_2"
			}
		]
	}),
	computed: {},
	methods: {
		editList() {
			this.modalOpen = true;
		},
		closeModal(e) {
			this.modalOpen = false;
			console.log("Modal event:", e);
		},
		onSelect(e) {
			console.log("Selected", e);
		}
	},
	created() {

	}
};
