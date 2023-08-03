const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],

    // Метод  использованием стрелочной функции в качестве функции обратного вызова
    startTestingArrow: function () {
        console.log('Start testing...')
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    },

    // Метод с использованием классической функции в качестве функции обратного вызова
    startTestingClassic: function () {
        console.log('Start testing...')
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    },
}

Stand.startTestingArrow();

Stand.startTestingClassic();