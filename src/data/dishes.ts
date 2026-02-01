export interface Dish {
    category: 'tuna' | 'salmon';
    title: string;
    title_es?: string;
    title_ru?: string;
    description: string;
    description_es?: string;
    description_ru?: string;
    winePairing: string;
    winePairing_es?: string;
    winePairing_ru?: string;
    img: string;
    ingredients: string[];
    ingredients_es?: string[];
    ingredients_ru?: string[];
    sauce: string;
    sauce_es?: string;
    sauce_ru?: string;
    steps: string[];
    steps_es?: string[];
    steps_ru?: string[];
    equipment: string;
    equipment_es?: string;
    equipment_ru?: string;
    cost: string;
    pvp: string;
    margin: string;
}

export const dishData: Record<string, Dish> = {


    'salmon-rosette': {
        category: 'salmon',
        title: 'Gravlax "Cinta de Rubí" (Ruby Ribbon)',
        title_es: 'Gravlax "Cinta de Rubí" (Ruby Ribbon)',
        title_ru: 'Гравлакс "Рубиновая Лента" (Ruby Ribbon)',
        description: 'Salmon cured in beetroot and gin, sliced paper-thin. Cream cheese and zest.',
        description_es: 'Salmón curado en remolacha y ginebra, cortado fino como papel. Queso crema y piel de limón.',
        description_ru: 'Лосось, маринованный в свекле и джине, тонкая нарезка. Крем-чиз и цедра.',
        winePairing: 'Rosé / Pinot Grigio',
        winePairing_es: 'Rosado / Pinot Grigio',
        winePairing_ru: 'Розе / Пино Гриджио',
        img: '/assets/salmon_gravlax.png',
        ingredients: [
            '120g Beetroot & Gin Cured Salmon',
            '15g Cream cheese with lemon zest',
            'Fresh Dill',
            'Gin (for marinade)'
        ],
        ingredients_es: [
            '120g Salmón Curado en Remolacha y Ginebra',
            '15g Queso crema con piel de limón',
            'Eneldo fresco',
            'Ginebra (para marinado)'
        ],
        ingredients_ru: [
            '120г Лосось Гравлакс (Свекла и Джин)',
            '15г Крем-чиз с лимонной цедрой',
            'Свежий укроп',
            'Джин (для маринада)'
        ],
        sauce: '<strong>Beetroot-Gin Marinade:</strong> A mix of grated beet, gin, coarse salt, and sugar (40/10/30/20). Coats the fish, creating a ruby rim.',
        sauce_es: '<strong>Marinado Remolacha-Gin:</strong> Mezcla de remolacha rallada, ginebra, sal gruesa y azúcar. Crea un borde rubí.',
        sauce_ru: '<strong>Маринад Свекла-Джин:</strong> Смесь тертой свеклы, джина, крупной соли и сахара. Окрашивает рыбу, создавая рубиновый край.',
        steps: [
            'Marinate the fillet in the beetroot mixture for 24 hours in the fridge.',
            'Rinse under ice water and pat dry before slicing.',
            'Set the slicer to 1.5mm to create "ribbons".',
            'Arrange ribbons in a fan or rose shape on a cold plate.',
            'Add drops of lemon cream cheese between the folds of the fish.'
        ],
        steps_es: [
            'Marinar el filete en la mezcla de remolacha por 24h.',
            'Lavar con agua helada y secar.',
            'Cortar en cortafiambres a 1.5mm para crear "cintas".',
            'Disponer en forma de abanico o rosa.',
            'Añadir gotas de queso crema entre los pliegues.'
        ],
        steps_ru: [
            'Мариновать филе в свекольной смеси 24 часа.',
            'Промыть ледяной водой и обсушить.',
            'Нарезка на слайсере 1.5мм ("ленты").',
            'Выложить веером или розой на холодную тарелку.',
            'Добавить капли лимонного крем-чиза между складками рыбы.'
        ],
        equipment: 'Electric Slicer, Fridge.',
        equipment_es: 'Cortafiambres, Nevera.',
        equipment_ru: 'Слайсер, Холодильник.',
        cost: '€5.80',
        pvp: '€24.00',
        margin: '+€18.20'
    },
    'salmon-miso': {
        category: 'salmon',
        title: 'Miso Salmón "Fuego y Hielo" (Fire & Ice)',
        title_es: 'Miso Salmón "Fuego y Hielo" (Fire & Ice)',
        title_ru: 'Мисо Лосось "Огонь и Лед" (Fire & Ice)',
        description: 'Chilled salmon slice in miso glaze, caramelized by open fire.',
        description_es: 'Lámina de salmón frío con glaseado de miso, caramelizado a fuego vivo.',
        description_ru: 'Охлажденный слайс лосося в мисо-глазури, карамелизированный открытым огнем.',
        winePairing: 'Riesling / Gewürztraminer',
        winePairing_es: 'Riesling / Gewürztraminer',
        winePairing_ru: 'Рислинг / Гевюрцтраминер',
        img: '/assets/salmon_miso.png',
        ingredients: [
            '160g Salmon Prime Cut',
            '20ml Miso-Honey Glaze',
            '5g Puffed Quinoa',
            'Micro-greens'
        ],
        ingredients_es: [
            '160g Corte Premium de Salmón',
            '20ml Glaseado Miso-Miel',
            '5g Quinoa Inflada',
            'Micro-brotes'
        ],
        ingredients_ru: [
            '160г Премиум вырезка лосося',
            '20мл Мисо-Медовая глазурь',
            '5г Воздушная киноа',
            'Микро-зелень'
        ],
        sauce: '<strong>Sweet Miso Glaze:</strong> White miso paste, honey, a drop of soy sauce. Reduced to a thick syrup. Stored in a dispenser in a warm place.',
        sauce_es: '<strong>Glaseado Miso Dulce:</strong> Miso blanco, miel, gota de soja. Reducido a jarabe espeso.',
        sauce_ru: '<strong>Сладкая Мисо Глазурь:</strong> Белая мисо-паста, мед, капля соевого соуса. Уварено до густого сиропа.',
        steps: [
            'Prepare the salmon steak (chilled).',
            'Apply a layer of miso glaze to the top.',
            'Use a blowtorch: caramelize the glaze until bubbly and umami aroma appears (15-20 sec).',
            'Important: the center of the fish must remain cool and raw ("Fire & Ice" effect).',
            'Sprinkle with puffed quinoa for crunch and serve immediately.'
        ],
        steps_es: [
            'Preparar el filete de salmón (bien frío).',
            'Aplicar capa de glaseado miso.',
            'Soplete: caramelizar hasta que burbujee (15-20 seg).',
            'Importante: el centro debe quedar frío y crudo.',
            'Espolvorear quinoa inflada y servir.'
        ],
        steps_ru: [
            'Подготовить стейк лосося (охлажденный).',
            'Нанести слой мисо-глазури.',
            'Горелка: карамелизировать до пузырей и аромата умами (15-20 сек).',
            'Важно: центр рыбы должен остаться холодным и сырым.',
            'Посыпать воздушной киноа и сразу подавать.'
        ],
        equipment: 'Powerful Blowtorch, Dispenser.',
        equipment_es: 'Soplete Potente,iberón.',
        equipment_ru: 'Мощная горелка, Диспенсер.',
        cost: '€7.50',
        pvp: '€32.00',
        margin: '+€24.50'
    },
    'salmon-avocado': {
        category: 'salmon',
        title: 'Rosa "Jardín de Mar" (Sea Garden)',
        title_es: 'Rosa "Jardín de Mar" (Sea Garden)',
        title_ru: 'Роза "Морской Сад" (Sea Garden)',
        description: 'Salad constructor. Deconstructed presentation: salmon roses, avocado fan, and ice onion.',
        description_es: 'Ensalada deconstruida: rosas de salmón, abanico de aguacate y cebolla en hielo.',
        description_ru: 'Конструктор салата. Деконструкция: розы из лосося, веер из авокадо и ледяной лук.',
        winePairing: 'Sauvignon Blanc / Verdejo',
        winePairing_es: 'Sauvignon Blanc / Verdejo',
        winePairing_ru: 'Совиньон Блан / Вердехо',
        img: '/assets/salmon_avocado_rosette.png',
        ingredients: [
            '100g Smoked Salmon (Premium)',
            '1 Ripe Avocado (Ready to Eat)',
            '50g Cherry Tomatoes',
            '10g Red Onion (Ice chilled)',
            '30g Mix Salad (Iceberg/Arugula)',
            '15ml Lemon-Olive Emulsion'
        ],
        ingredients_es: [
            '100g Salmón Ahumado Premium',
            '1 Aguacate Maduro',
            '50g Tomates Cherry',
            '10g Cebolla Roja (en hielo)',
            '30g Mix Lechugas',
            '15ml Emulsión Limón-Oliva'
        ],
        ingredients_ru: [
            '100г Копченый лосось (Премиум)',
            '1 Спелый авокадо',
            '50г Томаты Черри',
            '10г Красный лук (ледяной)',
            '30г Микс салата',
            '15мл Лимонно-оливковая эмульсия'
        ],
        sauce: '<strong>Lemon-Olive Emulsion:</strong> Whipped olive oil with lemon juice, salt, and white pepper to a light emulsion. Creates shine and binds components.',
        sauce_es: '<strong>Emulsión Cítrica:</strong> Aceite de oliva montado con limón, sal y pimienta blanca. Da brillo y une los sabores.',
        sauce_ru: '<strong>Лимонно-Оливковая Эмульсия:</strong> Взбитое оливковое масло с лимонным соком, солью и белым перцем. Создает глянец и связывает вкусы.',
        steps: [
            'Lay a light bed of salad mix on the bottom of the plate.',
            'Roll thin salmon slices into three careless voluminous "roses".',
            'Slice avocado into a thin fan and place between the roses.',
            'Scatter cherry halves chaotically (cut side up for shine).',
            'Garnish with "ice" onion rings (soaked in ice water for crunch).',
            'Pour emulsion over just before serving.'
        ],
        steps_es: [
            'Base ligera de ensalada.',
            'Formar 3 rosas voluminosas de salmón.',
            'Laminar aguacate en abanico entre las rosas.',
            'Esparcir cherrys caóticamente (corte hacia arriba).',
            'Decorar con aros de cebolla "hielo" (crujientes).',
            'Salsear justo antes de servir.'
        ],
        steps_ru: [
            'Легкая подушка из микса салата.',
            'Свернуть 3 объемные розы из лосося.',
            'Нарезать авокадо веером, разместить между розами.',
            'Хаотично разложить половинки черри (срезом вверх).',
            'Украсить кольцами "ледяного" лука (для хруста).',
            'Полить эмульсией перед подачей.'
        ],
        equipment: 'Slicer (for onion), Chef Knife.',
        equipment_es: 'Mandolina (cebolla), Cuchillo Chef.',
        equipment_ru: 'Слайсер (лук), Шеф-нож.',
        cost: '€5.50',
        pvp: '€22.00',
        margin: '+€16.50'
    },
    'salmon-prawns': {
        category: 'salmon',
        title: 'Dúo "Imperial" (Royal Prawns & Salmon)',
        title_es: 'Dúo "Imperial" (Royal Prawns & Salmon)',
        title_ru: 'Дуэт "Империал" (Королевские Креветки и Лосось)',
        description: 'King prawns stuffed with garlic butter, under a "lid" of salmon in oyster glaze.',
        description_es: 'Langostinos Jumbo rellenos de mantequilla de ajo, bajo un "velo" de salmón en glaseado de ostras.',
        description_ru: 'Королевские креветки, фаршированные чесночным маслом, под "вуалью" из лосося в устричной глазури.',
        winePairing: 'Chardonnay (Oaked) / Cava',
        winePairing_es: 'Chardonnay (Barrica) / Cava',
        winePairing_ru: 'Шардоне (Выдержанное) / Кава',
        img: '/assets/salmon_prawns_vasily.png',
        ingredients: [
            '5-6 King Prawns (Jumbo)',
            '150g Salmon Fillet (Strips)',
            '30g Butter (Garlic & Dill)',
            '30ml Oyster Sauce (Glaze)',
            'Black Pepper',
            'Micro-dill'
        ],
        ingredients_es: [
            '5-6 Langostinos Jumbo',
            '150g Filete de Salmón (Tiras)',
            '30g Mantequilla (Ajo y Eneldo)',
            '30ml Salsa de Ostras (Glaseado)',
            'Pimienta Negra',
            'Micro-eneldo'
        ],
        ingredients_ru: [
            '5-6 Королевских креветок (Jumbo)',
            '150г Филе лосося (Полоски)',
            '30г Масло (Чеснок и Укроп)',
            '30мл Устричный соус (Глазурь)',
            'Черный перец',
            'Микро-укроп'
        ],
        sauce: '<strong>Oyster-Gold Glaze:</strong> Thick oyster sauce, caramelized during baking. Gives the dish a glossy "gold" look and deep umami taste.',
        sauce_es: '<strong>Glaseado Ostra-Oro:</strong> Salsa de ostras espesa, caramelizada al horno. Da brillo dorado y sabor umami profundo.',
        sauce_ru: '<strong>Устричное Золото:</strong> Густой устричный соус, карамелизированный при запекании. Придает глянцевый "золотой" вид и вкус умами.',
        steps: [
            '<strong>Prep:</strong> Peel prawns, butterfly cut deep along the back.',
            '<strong>Stuff:</strong> Mix soft butter with garlic and dill. Stuff the back of the prawn.',
            '<strong>Assemble:</strong> Cover each prawn with a strip of salmon (like a "lid").',
            '<strong>Cook:</strong> Brush with oyster sauce. Bake 10-12 min at 180°C.',
            '<strong>Finish:</strong> Serve immediately, drizzled with pan juices.'
        ],
        steps_es: [
            'Pelar langostinos, corte mariposa profundo.',
            'Rellenar el dorso con mantequilla de ajo y eneldo.',
            'Cubrir cada langostino con una tira de salmón ("velo").',
            'Pincelar con salsa de ostras. Hornear 10-12 min a 180°C.',
            'Servir con sus jugos.'
        ],
        steps_ru: [
            'Очистить креветки, сделать глубокий надрез бабочкой.',
            'Нафаршировать спинку маслом с чесноком и укропом.',
            'Накрыть каждую креветку полоской лосося ("крышка").',
            'Смазать устричным соусом. Запекать 10-12 мин при 180°C.',
            'Подавать сразу, полив соком с противня.'
        ],
        equipment: 'Combi Oven, Brush.',
        equipment_es: 'Horno Mixto, Pincel.',
        equipment_ru: 'Пароконвектомат, Кисть.',
        cost: '€7.50',
        pvp: '€29.00',
        margin: '+€21.50'
    },
    'prawn-carpaccio': {
        category: 'salmon',
        title: 'Gambero "Seda Roja" (Red Silk Carpaccio)',
        title_es: 'Gambero "Seda Roja" (Red Silk Carpaccio)',
        title_ru: 'Гамберо "Красный Шелк" (Red Silk Carpaccio)',
        description: 'Carpaccio of Gambero Rosso red prawn. Sweet as fruit. Citrus oil and flowers.',
        description_es: 'Carpaccio de Gamba Roja. Dulce como una fruta. Aceite cítrico y flores.',
        description_ru: 'Карпаччо из красной креветки Гамберо Россо. Сладкая как фрукт. Цитрусовое масло и цветы.',
        winePairing: 'Albariño / Godello',
        winePairing_es: 'Albariño / Godello',
        winePairing_ru: 'Альбариньо / Годельо',
        img: '/assets/prawn_carpaccio.png',
        ingredients: [
            '100g Gambero Rosso (Red Prawns)',
            '15ml Citrus Infused Oil (Lemon/Lime)',
            '5g Mango Puree Drops',
            'Edible Flowers (Violas)',
            'Maldon Salt'
        ],
        ingredients_es: [
            '100g Gamba Roja (Gambero Rosso)',
            '15ml Aceite Crítico (Limón/Lima)',
            '5g Gotas puré de Mango',
            'Flores Comestibles',
            'Sal Maldon'
        ],
        ingredients_ru: [
            '100г Красная креветка (Gambero Rosso)',
            '15мл Цитрусовое масло (Лимон/Лайм)',
            '5г Капли пюре манго',
            'Съедобные цветы',
            'Соль Maldon'
        ],
        sauce: '<strong>Citrus-Mango Vinaigrette:</strong> Light emulsion of olive oil, yuzu juice, and mango puree drops. Highlights the natural sweetness of the prawn.',
        sauce_es: '<strong>Vinagreta Cítrica-Mango:</strong> Emulsión ligera de aceite de oliva, yuzu y gotas de mango. Resalta el dulzor natural.',
        sauce_ru: '<strong>Цитрус-Манго Винегрет:</strong> Легкая эмульсия оливкового масла, юдзу и капли манго. Подчеркивает природную сладость креветки.',
        steps: [
            'Peel prawns, remove intestine (save head for bisque!).',
            'Place prawns between two plastic sheets and gently pound with a flat saucepan bottom into a perfect disc.',
            'Transfer disc to a cold plate (remove plastic gently).',
            'Drizzle with citrus oil.',
            'Garnish with mango puree drops and flowers.'
        ],
        steps_es: [
            'Pelar gambas, quitar intestino.',
            'Aplastar suavemente entre dos plásticos hasta lograr un disco perfecto.',
            'Transferir a plato frío.',
            'Rociar con aceite cítrico.',
            'Decorar con gotas de mango y flores.'
        ],
        steps_ru: [
            'Очистить креветки, удалить кишку.',
            'Поместить между пленками и аккуратно отбить дном сотейника в идеальный диск.',
            'Перенести на холодную тарелку.',
            'Полить цитрусовым маслом.',
            'Украсить каплями манго и цветами.'
        ],
        equipment: 'Plastic wrap, Saucepan (for pounding), Tweezers.',
        equipment_es: 'Film plástico, Cazo (para aplastar), Pinzas.',
        equipment_ru: 'Пищевая пленка, Сотейник (для отбивания), Пинцет.',
        cost: '€8.50',
        pvp: '€29.00',
        margin: '+€20.50'
    },
    'salmon-purple': {
        category: 'salmon',
        title: 'Sinfonía "Violeta Real" (Royal Violet)',
        title_es: 'Sinfonía "Violeta Real" (Royal Violet)',
        title_ru: 'Симфония "Королевский Фиолет" (Royal Violet)',
        description: 'Smoked salmon roses, purple potato, avocado, and honey-mustard emulsion.',
        description_es: 'Rosas de salmón ahumado, patata violeta, aguacate y emulsión de miel y mostaza.',
        description_ru: 'Розы из копченого лосося, фиолетовый картофель, авокадо и медово-горчичная эмульсия.',
        winePairing: 'Sauvignon Blanc / Rosé de Provence',
        winePairing_es: 'Sauvignon Blanc / Rosé de Provence',
        winePairing_ru: 'Совиньон Блан / Розе Прованс',
        img: '/assets/salmon_purple_black_plate.png',
        ingredients: [
            '120g Smoked Salmon (Premium)',
            '1 Avocado (Hass)',
            '80g Purple Potato (Vitelotte)',
            '20g Mix Salad / Lamb\'s Lettuce',
            '15ml Honey-Dijon Dressing',
            'Pink Peppercorns (Crushed)'
        ],
        ingredients_es: [
            '120g Salmón Ahumado',
            '1 Aguacate',
            '80g Patata Violeta (Vitelotte)',
            '20g Canónigos',
            '15ml Aderezo Miel-Dijon',
            'Pimienta Rosa'
        ],
        ingredients_ru: [
            '120г Копченый лосось',
            '1 Авокадо',
            '80г Фиолетовый картофель',
            '20г Салат корн',
            '15мл Заправка Мед-Дижон',
            'Розовый перец'
        ],
        sauce: '<strong>Honey-Dijon Vinaigrette:</strong> Emulsion of Extra Virgin olive oil, Dijon mustard, flower honey, and lemon juice. Balance of sweet, spicy, and sour.',
        sauce_es: '<strong>Vinagreta Miel-Dijon:</strong> Emulsión de AOVE, mostaza Dijon, miel y limón. Equilibrio dulce, picante y ácido.',
        sauce_ru: '<strong>Медово-Дижонская Винегрет:</strong> Эмульсия оливкового масла, дижонской горчицы, меда и лимона. Баланс сладкого, острого и кислого.',
        steps: [
            'Boil purple potatoes in salted water, cool, and dice.',
            'Roll smoked salmon slices into tight "roses".',
            'Slice avocado into crescents (drizzle with lemon).',
            'Assembly: Sauce on bottom. Layout salad mix, potato cubes, and avocado.',
            'Place salmon roses as the main accent.',
            'Garnish with pink peppercorns, dill, and microgreens.'
        ],
        steps_es: [
            'Cocer patata violeta, enfriar y cortar en cubos.',
            'Hacer rosas con el salmón.',
            'Cortar aguacate en lunas.',
            'Montaje: Salsa abajo. Ensalada, patata, aguacate.',
            'Rosas de salmón como acento principal.',
            'Decorar con pimienta rosa y eneldo.'
        ],
        steps_ru: [
            'Отварить фиолетовый картофель, остудить, нарезать кубиком.',
            'Свернуть розы из лосося.',
            'Нарезать авокадо полумесяцем.',
            'Сборка: Соус на дно. Салат, картофель, авокадо.',
            'Розы из лосося в центр.',
            'Украсить розовым перцем и укропом.'
        ],
        equipment: 'Chef Knife, Tweezers, Sauce Boat.',
        equipment_es: 'Cuchillo Chef, Pinzas, Salsera.',
        equipment_ru: 'Шеф-нож, Пинцет, Соусник.',
        cost: '€6.20',
        pvp: '€24.00',
        margin: '+€17.80'
    },
    'salmon-tournedos': {
        category: 'salmon',
        title: 'Tournedó "Oro Cítrico" (Citrus Gold)',
        title_es: 'Tournedó "Oro Cítrico" (Citrus Gold)',
        title_ru: 'Турнедо "Цитрусовое Золото" (Citrus Gold)',
        description: '"Fish Mignon". Sous-vide salmon steak, glazed with orange and chili. Served hot.',
        description_es: '"Mignon de Pescado". Solomillo de salmón sous-vide, glaseado con naranja y chili.',
        description_ru: '"Рыбный Миньон". Стейк лосося су-вид, глазированный апельсином и чили. Подается горячим.',
        winePairing: 'Chardonnay (Oaked) / Riesling',
        winePairing_es: 'Chardonnay / Riesling',
        winePairing_ru: 'Шардоне / Рислинг',
        img: '/assets/salmon_tournedos_gold.png',
        ingredients: [
            '180g Salmon Fillet (Rolled Tail/Trim)',
            '50ml Orange-Chili Marinade',
            '1 Orange Segment (Charred)',
            '1 Rosemary Sprig',
            'Cornstarch (for thickening)',
            'Butter (cube)'
        ],
        ingredients_es: [
            '180g Filete Salmón (Enrollado)',
            '50ml Marinada Naranja-Chili',
            '1 Gajo Naranja (Quemado)',
            'Romero',
            'Maicena',
            'Mantequilla'
        ],
        ingredients_ru: [
            '180г Филе лосося (Рулет из хвоста)',
            '50мл Маринада Апельсин-Чили',
            '1 Сегмент апельсина (обожженный)',
            'Веточка розмарина',
            'Крахмал',
            'Кубик масла'
        ],
        sauce: '<strong>Citrus-Gold Glaze:</strong> Orange fresh, pulp, soy sauce, chili, and butter. Thickened with starch in microwave to a gloss. Bright sweet & sour taste.',
        sauce_es: '<strong>Glaseado Oro-Cítrico:</strong> Zumo de naranja, pulpa, soja, chili y mantequilla. Espesado hasta brillar.',
        sauce_ru: '<strong>Цитрусовое Золото:</strong> Фреш апельсина, мякоть, соя, чили и масло. Загущено крахмалом до глянца. Яркий кисло-сладкий вкус.',
        steps: [
            '<strong>Prep:</strong> Roll fillet into a "puck", skin side out, tie with string. Vacuum with marinade.',
            '<strong>Cook:</strong> Bake in combi oven (Heat+Steam 200°C) 12-14 minutes.',
            '<strong>Finish:</strong> Remove string (!) with scissors. Torch to glaze.',
            '<strong>Plating:</strong> Pour mirror sauce, place tournedos, garnish with charred orange and rosemary.'
        ],
        steps_es: [
            'Prep: Enrollar filete como "disco", atar. Envasar con marinada.',
            'Cocción: Horno mixto (Calor+Vapor 200°C) 12-14 min.',
            'Final: Quitar hilo. Sopletear para glasear.',
            'Emplatado: Salsa espejo, tournedó, decorar con naranja y romero.'
        ],
        steps_ru: [
            'Подготовка: Свернуть филе в "шайбу", связать нитью. Вакуум с маринадом.',
            'Готовка: Пароконвектомат (Жар+Пар 200°C) 12-14 мин.',
            'Финиш: Снять нить (!). Ожечь горелкой для глазировки.',
            'Подача: Зеркальная лужа соуса, турнедо, украсить апельсином и розмарином.'
        ],
        equipment: 'Combi Oven, Microwave, Blowtorch, Culinary Thread.',
        equipment_es: 'Horno Mixto, Microondas, Soplete, Hilo bridar.',
        equipment_ru: 'Пароконвектомат, Микроволновка, Горелка, Кулинарная нить.',
        cost: '€4.00',
        pvp: '€25.00',
        margin: '+€21.00'
    },
    'salmon-ruby': {
        category: 'salmon',
        title: 'Salmón "Glaseado Rubí" (Pomegranate Glaze)',
        title_es: 'Salmón "Glaseado Rubí" (Pomegranate Glaze)',
        title_ru: 'Лосось "Рубиновая Глазурь" (Pomegranate Glaze)',
        description: 'Salmon in pomegranate glaze with velvet sweet potato puree and parmesan.',
        description_es: 'Salmón en glaseado de granada con puré aterciopelado de boniato y parmesano.',
        description_ru: 'Лосось в гранатовой глазури с бархатным пюре из батата и пармезаном.',
        winePairing: 'Pinot Noir / Full-bodied Rosé',
        winePairing_es: 'Pinot Noir / Rosado con cuerpo',
        winePairing_ru: 'Пино Нуар / Плотное Розе',
        img: '/assets/salmon_ruby_glaze.png',
        ingredients: [
            '180g Salmon Fillet',
            '150g Sweet Potato (Yam)',
            '50ml Cream 33%',
            '20g Parmesan',
            '50g Mushrooms (Champignons)',
            '30g Asparagus',
            'Narsharab & Teriyaki Mix'
        ],
        ingredients_es: [
            '180g Filete Salmón',
            '150g Boniato',
            '50ml Nata 33%',
            '20g Parmesano',
            '50g Champiñones',
            '30g Espárragos',
            'Mix Narsharab y Teriyaki'
        ],
        ingredients_ru: [
            '180г Филе лосося',
            '150г Батат',
            '50мл Сливки 33%',
            '20г Пармезан',
            '50г Шампиньоны',
            '30г Спаржа',
            'Микс Наршараб и Терияки'
        ],
        sauce: '<strong>Ruby Glaze:</strong> Narsharab (pomegranate), Teriyaki, and orange juice mix. Reduced to syrup. Deep, sweet & sour taste.',
        sauce_es: '<strong>Glaseado Rubí:</strong> Narsharab (granada), Teriyaki y naranja. Reducido a jarabe.',
        sauce_ru: '<strong>Рубиновая Глазурь:</strong> Наршараб (гранат), Терияки и апельсиновый сок. Уварено в сироп. Глубокий кисло-сладкий вкус.',
        steps: [
            '<strong>Prep:</strong> Bake sweet potato (40 min), blend with cream and parmesan, sieve ("Velvet").',
            '<strong>Cook:</strong> Brush salmon with glaze. Bake with mushrooms 8-10 min at 180°C.',
            '<strong>Finish:</strong> Torch glaze to boil. Warm puree in microwave.',
            '<strong>Plating:</strong> Puree in a "comma" shape, salmon on top, mushrooms and asparagus on side. Sprinkle sesame and chives.'
        ],
        steps_es: [
            'Prep: Asar boniato, triturar con nata y parmesano, colar ("Velvet").',
            'Cocción: Pincelar salmón. Hornear con setas 8-10 min a 180°C.',
            'Final: Sopletear glaseado. Calentar puré.',
            'Emplatado: Puré en "coma", salmón encima, guarnición al lado.'
        ],
        steps_ru: [
            'Подготовка: Запечь батат, взбить со сливками и пармезаном, протереть ("Вельвет").',
            'Готовка: Смазать лосось глазурью. Запекать с грибами 8-10 мин при 180°C.',
            'Финиш: Карамелизовать глазурь горелкой. Подогреть пюре.',
            'Подача: Пюре "запятой", лосось сверху, гарнир сбоку. Кунжут и лук.'
        ],
        equipment: 'Combi Oven, Blender, Sieve, Blowtorch.',
        equipment_es: 'Horno Mixto, Batidora, Tamiz, Soplete.',
        equipment_ru: 'Пароконвектомат, Блендер, Сито, Горелка.',
        cost: '€4.80',
        pvp: '€26.00',
        margin: '+€21.20'
    },
    'salmon-emerald': {
        category: 'salmon',
        title: 'Costra "Esmeralda" (Emerald Crust)',
        title_es: 'Costra "Esmeralda" (Emerald Crust)',
        title_ru: 'Лосось "Изумрудная Корочка" (Emerald Crust)',
        description: 'Salmon with a smooth avocado, honey & garlic mousse, encrusted with pistachios.',
        description_es: 'Salmón con mousse suave de aguacate, miel y ajo, incrustado con pistachos.',
        description_ru: 'Лосось с нежным муссом из авокадо, меда и чеснока, в фисташковой корочке.',
        winePairing: 'Sauvignon Blanc / Vermentino',
        winePairing_es: 'Sauvignon Blanc / Vermentino',
        winePairing_ru: 'Совиньон Блан / Верментино',
        img: '/assets/salmon_emerald_crust.png',
        ingredients: [
            '200g Salmon Fillet',
            '0.5 Avocado (Ripe)',
            '15g Pistachios (Chopped)',
            '20ml Cream',
            'Honey & Garlic (trace)',
            'Lemon Juice (Fresh)',
            'Olive Oil'
        ],
        ingredients_es: [
            '200g Filete Salmón',
            '0.5 Aguacate (Maduro)',
            '15g Pistachos (Picados)',
            '20ml Nata',
            'Miel y Ajo (traza)',
            'Zumo de Limón',
            'Aceite Oliva'
        ],
        ingredients_ru: [
            '200г Филе Лосося',
            '0.5 Авокадо (Спелого)',
            '15г Фисташки (Рубленые)',
            '20мл Сливки',
            'Мед и Чеснок (капля)',
            'Сок Лимона',
            'Оливковое Масло'
        ],
        sauce: '<strong>Avocado-Honey Mousse:</strong> Whipped avocado, cream, honey, garlic, and lemon juice. A perfect balance of creamy, sweet, and savory.',
        sauce_es: '<strong>Mousse Aguacate-Miel:</strong> Aguacate batido, nata, miel, ajo y limón. Balance cremoso, dulce y sabroso.',
        sauce_ru: '<strong>Авокадо-Медовый Мусс:</strong> Взбитое авокадо, сливки, мед, чеснок и лимон. Идеальный баланс сливочного, сладкого и пикантного.',
        steps: [
            '<strong>Mousse Prep:</strong> Blend avocado, cream, honey, garlic, lemon juice, salt, and pepper into a silky mousse.',
            '<strong>Salmon:</strong> Season fillet with salt, pepper, and olive oil. Bake at 180°C for 10-12 min.',
            '<strong>Crust:</strong> Cover the hot salmon with the cool mousse and sprinkle generously with chopped pistachios.',
            '<strong>Service:</strong> Serve immediately to maintain the temperature contrast.'
        ],
        steps_es: [
            'Mousse: Triturar aguacate, nata, miel, ajo, limón, sal y pimienta hasta sedoso.',
            'Salmón: Salpimentar y hornear 10-12 min a 180°C.',
            'Costra: Cubrir el salmón caliente con la mousse fría y pistachos.',
            'Servicio: Servir inmediatamente (contraste temperaturas).'
        ],
        steps_ru: [
            'Мусс: Взбить авокадо, сливки, мед, чеснок, лимон, соль и перец до шелка.',
            'Лосось: Посолить, поперчить, запекать 10-12 мин при 180°C.',
            'Корочка: Покрыть горячий лосось холодным муссом и щедро посыпать фисташками.',
            'Подача: Подавать сразу для контраста температур.'
        ],
        equipment: 'Combi Oven, Blender, Palette Knife.',
        equipment_es: 'Horno Mixto, Batidora, Espátula.',
        equipment_ru: 'Пароконвектомат, Блендер, Палетка.',
        cost: '€6.50',
        pvp: '€27.00',
        margin: '+€20.50'
    }
};
