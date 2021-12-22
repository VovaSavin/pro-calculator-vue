function analogsInfo(
    id,
    distance,
    full_address,
    coords,
    link,
    type_b,
    wall,
    rooms,
    square,
    floor,
    price_m2,
    full_price,
    checked,
) {
    let object = {
        id: id,
        distance: distance,
        full_address: full_address,
        coords: coords,
        link: link,
        type_b: type_b,
        wall: wall,
        rooms: rooms,
        square: parseInt(square),
        floor: floor,
        price_m2: price_m2,
        full_price: parseInt(full_price),
        checked: checked,
    };
    return object;
}

function buildingTypes() {
    // Тип домов
    let temp = [
        { value: 1, text: "Дореволюційна забудова" },
        { value: 2, text: "Сталінка" },
        { value: 3, text: "Хрущовка" },
        { value: 4, text: "Чешка" },
        { value: 5, text: "Гостинка" },
        { value: 6, text: "Радмін" },
        { value: 7, text: "Забудова з 1980 по 1990 рр." },
        { value: 8, text: "Забудова з 1991 по 2000 рр." },
        { value: 9, text: "Забудова з 2001 по 2010 рр." },
        { value: 10, text: "Забудова з 2011 року" },
    ];
    return temp
}

function rooms() {
    // Комнатность
    let temp = [
        { value: 1, text: "1 - кімнатна" },
        { value: 2, text: "2 - кімнатна" },
        { value: 3, text: "3 - кімнатна" },
        { value: 4, text: "4+ - кімнатна" },
    ];
    return temp
}

function layouts() {
    // Тип планировки
    let temp = [
        { value: 1, text: "Пентхаус" },
        { value: 2, text: "Студія" },
        { value: 3, text: "Смарт-квартира" },
        { value: 4, text: "Вільне планування" },
        { value: 5, text: "Багаторівнева" },
        { value: 6, text: "Роздільна" },
        { value: 7, text: "Двостороння" },
        { value: 8, text: "Суміжня, прохідна" },
        { value: 9, text: "Малосімейка, гостинка" },
    ];
    return temp
}

function renovations() {
    // Тип ремонта
    let temp = [
        { value: 1, text: "Авторський проект" },
        { value: 2, text: "Евроремонт" },
        { value: 3, text: "Після будівельників" },
        { value: 4, text: "Під чистову обробку" },
        { value: 5, text: "Косметичний ремонт" },
        { value: 6, text: "Житловий стан" },
        { value: 7, text: "Аварійний стан" },
    ];
    return temp
}

function floors(integer) {
    // Этажность обьекта
    // Этаж обьекта
    let temp = [
    ];
    for (let x = 1; x < integer; x++) {
        temp.push(
            { value: x, text: String(x) }
        )
    }
    return temp
}


function addOrDelete(list, type, x) {
    // Удаляет или добавляет класс в HTML элемент
    if (type) {
        list.forEach(element => {
            element[x].classList.add("active_get_on_map")
        });
    } else {
        list.forEach(element => {
            element[x].classList.remove("active_get_on_map")
        });
    }
}

function setSelector(list) {
    // Проставляет нужные селекторы в нужные елемент списка
    list[0] = document.querySelectorAll(".analogs_address");
    list[1] = document.querySelectorAll(".analogs_distance");
    list[2] = document.querySelectorAll(".analogs_link");
    list[3] = document.querySelectorAll(".analogs_type_b");
    list[4] = document.querySelectorAll(".analogs_wall");
    list[5] = document.querySelectorAll(".analogs_rooms");
    list[6] = document.querySelectorAll(".analogs_square");
    list[7] = document.querySelectorAll(".analogs_floor");
    list[8] = document.querySelectorAll(".analogs_price_m2");
    list[9] = document.querySelectorAll(".analogs_full_price");
}

function pngMarkers() {
    // Возвращает изображение нужного маркера
    let png = {
        you: "https://maps.gstatic.com/mapfiles/ms2/micons/man.png",
        chekMarker: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
        blueChecked: svgMarkerBlue,
        greenChecked: svgMarkerGreen,
        googleMrk: gMapMarker,
    };
    return png;
}
const gMapMarker = {
    path: "m 817.11249,282.97118 c -1.25816,1.34277 -2.04623,3.29881 -2.01563,5.13867 0.0639,3.84476 1.79693,5.3002 4.56836,10.59179 0.99832,2.32851 2.04027,4.79237 3.03125,8.87305 0.13772,0.60193 0.27203,1.16104 0.33416,1.20948 0.0621,0.0485 0.19644,-0.51262 0.33416,-1.11455 0.99098,-4.08068 2.03293,-6.54258 3.03125,-8.87109 2.77143,-5.29159 4.50444,-6.74704 4.56836,-10.5918 0.0306,-1.83986 -0.75942,-3.79785 -2.01758,-5.14062 -1.43724,-1.53389 -3.60504,-2.66908 -5.91619,-2.71655 -2.31115,-0.0475 -4.4809,1.08773 -5.91814,2.62162 z",
    fillColor: "green",
    opacity: 1,
    fillOpacity: 0.99,
    stroke: "#d73534",
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
};

const svgMarkerBlue = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "navy",
    fillOpacity: 0.99,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: { x: 12, y: 23 },
};

const svgMarkerGreen = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "green",
    fillOpacity: 0.99,
    strokeWeight: 0,
    strokeColor: "black",
    rotation: 0,
    scale: 2,
    anchor: { x: 12, y: 23 },
};


const objects = [
    analogsInfo(
        1,
        "250", "проспект Петра Григоренка, 22, Київ, Україна", "50.40899190107142,30.627197016682633",
        "Джерело", "Масова сучасна забудова", "Моноліт",
        "3", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        2,
        "270", "вулиця Анни Ахматової, 33, Київ, Україна", "50.407418859120504,30.62591672833",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "100", "2", "1000", "100000", false
    ),
    analogsInfo(
        3,
        "290", "проспект Петра Григоренка, 29, Київ, Україна", "50.40424357622064,30.632435398271607",
        "Джерело", "Масова сучасна забудова", "Моноліт",
        "3", "120", "9", "1818", "200000", false
    ),
    analogsInfo(
        4,
        "100", "проспект Петра Григоренка, 20, Київ, Україна", "50.410216826532455,30.626391555942348",
        "Джерело", "Масова сучасна забудова", "СІП панель",
        "2", "70", "2", "1071", "75000", false
    ),
    analogsInfo(
        5,
        "450", "проспект Петра Григоренка, 45, Київ, Україна", "50.40301835530999,30.631321511765883",
        "Джерело", "Масова сучасна забудова", "Моноліт",
        "2", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        6,
        "500", "проспект Петра Григоренка, 55, Київ, Україна", "50.403042508838254,30.63135549827156",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "130", "5", "1045", "115000", false
    ),
    analogsInfo(
        7,
        "500", "проспект Петра Григоренка, 39, Київ, Україна", "50.39402273059684,30.63786284060074",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "110", "5", "1045", "115000", false
    ),

    analogsInfo(
        8,
        "500", "проспект Петра Григоренка, 12, Київ, Україна", "50.41268849737978,30.623556027106993",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        9,
        "500", "проспект Петра Григоренка, 9, Київ, Україна", "50.41221199834254,30.628170098271763",
        "Джерело", "Масова сучасна забудова", "Блок",
        "2", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        10,
        "500", "проспект Петра Григоренка, 10, Київ, Україна", "50.41406138719135,30.62374800309055",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "140", "5", "1045", "115000", false
    ),
    analogsInfo(
        11,
        "500", "вулиця Срібнокільська, 22, Київ, Україна", "50.39985661186805,30.618338355942093",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        12,
        "500", "вулиця Срібнокільська, 29, Київ, Україна", "50.40110109813306,30.61764082710676",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        13,
        "500", "вулиця Срібнокільська, 28, Київ, Україна", "50.39994669501436,30.61774314060097",
        "Джерело", "Масова сучасна забудова", "Блок",
        "1", "150", "5", "1045", "115000", false
    ),
    analogsInfo(
        14,
        "500", "вулиця Срібнокільська, 26, Київ, Україна", "50.39992617853477,30.61774314060097",
        "Джерело", "Масова сучасна забудова", "Блок",
        "3", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        15,
        "500", "вулиця Срібнокільська, 35, Київ, Україна", "50.40113529141316,30.617619369436245",
        "Джерело", "Масова сучасна забудова", "Блок",
        "1", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        16,
        "500", "вулиця Срібнокільська, 49, Київ, Україна", "50.401107936791085,30.617630098271512",
        "Джерело", "Масова сучасна забудова", "Блок",
        "4", "110", "5", "1045", "115000", false
    ),
    analogsInfo(
        17,
        "550", "вулиця Срібнокільська, 16, Київ, Україна", "50.39894445402015,30.620757211765664",
        "Джерело", "Масова сучасна забудова", "Моноліт",
        "5", "190", "9", "1026", "195000", false
    ),
]

function maxValues(parametr) {
    // Возвращает максимальное значение параметра objects в списке
    // В зависимости от выбранного парамета
    let listValues = [];
    for (let x = 0; x < objects.length; x++) {
        if (parametr == "distance") {
            listValues.push(parseInt(objects[x].distance))
        } else if (parametr == "square") {
            listValues.push(parseInt(objects[x].square))
        } else if (parametr == "priceM2") {
            listValues.push(parseInt(objects[x].price_m2))
        } else if (parametr == "fullPrice") {
            listValues.push(parseInt(objects[x].full_price))
        } else if (parametr == "room") {
            listValues.push(parseInt(objects[x].rooms))
        }

    };
    return Math.max(...listValues)
}

function appendList(list, whatIsPush) {
    // Добавляет что-то в список или убирает
    if (!list.includes(whatIsPush)) {
        if (whatIsPush > 3) {
            for (let x = 4; x < maxValues("room") + 1; x++) {
                list.push(x);
            }
        } else {
            list.push(whatIsPush);
        }
    } else {
        if (whatIsPush > 3) {
            for (let x = 4; x < maxValues("room") + 1; x++) {
                list.splice(list.indexOf(x), 1);
            }
        } else {
            list.splice(list.indexOf(whatIsPush), 1);
        }
    }
}

function generateMaxListRooms() {
    // Создаёт список с колличеством комнатностей аналогов
    let temp = [];
    for (let x = 1; x < maxValues("room") + 1; x++) {
        temp.push(x)
    }
    return temp;
}


export {
    objects,
    svgMarkerBlue,
    pngMarkers,
    addOrDelete,
    maxValues,
    setSelector,
    appendList,
    generateMaxListRooms,
    buildingTypes,
    floors,
    rooms,
    layouts,
    renovations,
}


