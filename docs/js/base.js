new Vue({
  el: "#app",
  data() {
    return {
      info: [],
      term: "",
      offer: ""
    };
  },
  methods: {
    search: function () {
      this.searching = true;
      axios
        .get(`https://novoml.online/index7.php?url=` + this.term)
        .then(response => (this.info = response.data));
      console.log(this.info);
    },
    categoria: function () {
      this.searching = true;
      axios
        .get(
          `https://api.mercadolibre.com/sites/MLB/category_predictor/predict?title=` +
          encodeURIComponent(this.term)
        )
        .then(response => (this.info = response));
      console.log(this.info);
    }
  }
});