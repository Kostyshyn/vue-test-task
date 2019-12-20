import { mapState } from 'vuex';

export default {
	name: "Header",
	computed: {
		...mapState({
      headerItems: state => state.headerItems
    })
	}
};
