var app = new Vue({
    el: "#app",
    data: {
        id: 1,
        name: "Аспирин",
        fullName: "Ацетилсалициловая кислота",
        latName: "Acidum acetylsalicylicum",
        count: 120,
        cost: 18.3,
        inStock: true,

        medics: [{
                id: 1,
                name: "Аспирин",
                fullName: "Ацетилсалициловая кислота",
                latName: "Acidum acetylsalicylicum",
                count: 120,
                cost: 18.3,
                inStock: true
            },
            {
                id: 2,
                name: "Анальгин",
                fullName: "Метамизол натрия",
                latName: "Metamizol natrii",
                count: 62,
                cost: 25.8,
                inStock: true
            },
            {
                id: 3,
                name: "Найз",
                fullName: "Нимесулид",
                latName: "-",
                count: 6,
                cost: 150.2,
                inStock: false
            }
        ]
    },
    computed: {
        overall: function () {
            return this.count * this.cost;
        }
    }
});