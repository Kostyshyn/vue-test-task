import MultiSelectList from "@/components/lists/MultiSelectListModule/MultiSelectList.vue";
import SearchSelectList from "@/components/lists/SearchSelectListModule/SearchSelectList.vue";
import NestedSelectList from "@/components/lists/NestedSelectListModule/NestedSelectList.vue";
import AddNewSelectList from "@/components/lists/AddNewSelectListModule/AddNewSelectList.vue";

import { mapActions } from 'vuex';

export default {
  name: "Content",
  components: {
    MultiSelectList,
    SearchSelectList,
    NestedSelectList,
    AddNewSelectList
  },
  data: () => ({}),
  methods: {
  	...mapActions(["setHeaderItems"])
  },
  created() {
  	setTimeout(() => {
  		this.setHeaderItems(["test 1", "test 2", "test 3"]);
  	}, 1000);
  }
};