export default {
  name: "Modal",
  components: {},
  props: {
    title: String
  },
  data: () => ({}),
  computed: {},
  methods: {
    close() {
      const data = "test";
      this.$emit("close", data);
    }
  },
  created() {

  }
};