var app = new Vue({
    el: "#app",
    data: {
        id: 1,
        name: "Аспирин",
        fullName: "Ацетилсалициловая кислота",
        latName: "Acidum acetylsalicylicum",
        count: 120,
        cost: 18.3
    },
    computed: {
        overall: function () {
            return this.count * this.cost;
        }
    }
});