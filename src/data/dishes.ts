export interface Dish {
    category: 'tuna' | 'salmon';
    title: string;
    description: string;
    winePairing: string;
    img: string;
    ingredients: string[];
    sauce: string;
    steps: string[];
    equipment: string;
    cost: string;
    pvp: string;
    margin: string;
}

export const dishData: Record<string, Dish> = {
    tataki: {
        category: 'tuna',
        title: 'Tuna Tataki "Smoky Aburi"',
        description: 'Lightly seared Bluefin tuna with a blowtorch, citrus ponzu, microgreens, and toasted sesame.',
        winePairing: 'Pinot Noir / Rosado',
        img: '/assets/tuna_tataki_aburi.png',
        ingredients: [
            '150g Lomo de Atún Rojo de Almadraba',
            '15ml Soja Premium (Kikkoman)',
            '5ml Mirin Hontery',
            '10g Micro-mezcla de brotes',
            '2g Sésamo tostado bicolor',
            '20ml Yuzu-Ponzu Dressing'
        ],
        sauce: '<strong>Citrus Ponzu "Smoked":</strong> Mix soy sauce, mirin, and yuzu juice (3:1:1). Add a drop of liquid smoke or smoke the sauce in a vacuum. Let it infuse for 4 hours.',
        steps: [
            'Marinate the tuna loin in soy and mirin for 15 minutes.',
            'Use a blowtorch on full power: sear the outer 2mm on all sides until caramelized.',
            'Cool immediately in a blast chiller for 2 minutes to stop the cooking.',
            'Slice on level 5 for perfect 0.5cm cuts.',
            'Arrange like a fan, pour cold Ponzu sauce over.'
        ],
        equipment: 'Industrial Blowtorch, Slicer, Vacuum Sealer.',
        cost: '€7.50',
        pvp: '€26.00',
        margin: '+€18.50'
    },
    crispy: {
        category: 'tuna',
        title: 'Crispy Rice & Spicy Tuna',
        description: 'Golden deep-fried rice blocks topped with spicy tuna tartare, truffle aioli, and jalapeño.',
        winePairing: 'Cava / Champagne',
        img: '/assets/crispy_rice_tuna_tartare.png',
        ingredients: [
            '80g Recortes de Atún (Cost Saving)',
            '2 брусочка риса для суши (прессованный)',
            '15ml Spicy Mayo Mix',
            '2ml Truffle Oil (Black)',
            '1 слайс Халапеньо',
            '1g Черная морская соль'
        ],
        sauce: '<strong>Spicy Truffle Mayo:</strong> Mix Japanese Kewpie mayo with Sriracha (20%) and truffle oil (5%). Blend until silky. Store in a dispenser.',
        steps: [
            'Heat the deep fryer to 180°C.',
            'Fry the rice blocks for 2.5 mins until hard golden crust forms.',
            'Chop the tuna trimmings (cost-saving) into small cubes and mix with Spicy Mayo.',
            'Place cold tartare on top of hot rice (temperature contrast).',
            'Garnish with a slice of jalapeño (Slicer G1).'
        ],
        equipment: 'Deep Fryer, Immersion Blender, Slicer.',
        cost: '€4.20',
        pvp: '€21.00',
        margin: '+€16.80'
    },
    mosaic: {
        category: 'tuna',
        title: 'Mediterranean Tuna "Mosaic"',
        description: 'Ultra-thin slices of Bluefin tuna, capers, lemon zest, and premium EVOO. Pure elegance.',
        winePairing: 'Albariño / Sauvignon Blanc',
        img: '/assets/tuna_carpaccio_mosaic.png',
        ingredients: [
            '110g Akami de Atún Rojo (Grade A)',
            '10g Каперсы соленые (промытые)',
            '5g Цедра лимона (свежая)',
            '25ml ACEITE Arbequina Extra Virgen',
            'Микрозелень Borage',
            'Кристаллы соли Maldon'
        ],
        sauce: '<strong>Arbequina Infusion:</strong> Whip Arbequina oil with a drop of lemon juice and finely chopped capers (50/50). Create an emulsion that coats the fish.',
        steps: [
            'Freeze the tuna for 30 mins to firm it up.',
            'Set the slicer to Level 1 (transparent slice).',
            'Arrange slices on a plate in a circular overlapping pattern.',
            'Evenly brush with Arbequina emulsion.',
            'Sprinkle with zest and salt crystals.'
        ],
        equipment: 'Electric Slicer, Microplane Zester.',
        cost: '€5.50',
        pvp: '€24.00',
        margin: '+€18.50'
    },
    gilda: {
        category: 'tuna',
        title: 'VIP Gilda "Roses"',
        description: 'A reinvented classic: Iberico Ham roses, premium olives, and guindilla peppers on a skewer.',
        winePairing: 'Fino Sherry / White Dry',
        img: '/assets/vip_gilda_collection.png',
        ingredients: [
            '40g Jamón Ibérico de Bellota',
            '2 шт. Оливки Гордаль (Jumbo)',
            '2 шт. Перец Гиндилья',
            '10ml EVOO Infusion',
            'Авторская шпажка'
        ],
        sauce: '<strong>Ibérico Infusion:</strong> Oil infused with garlic and rosemary. Used to highlight the aroma of ham and bind the spiciness of the pepper and the saltiness of the olive.',
        steps: [
            'Slice the ham on the slicer as thinly as possible.',
            'Form a "Rose" from the slices, twisting them tightly around the center.',
            'Assembly: Olive -> Ham Rose -> Guindilla Pepper.',
            'Drizzle with infused oil just before serving.'
        ],
        equipment: 'Electric Slicer, Designer Skewers.',
        cost: '€3.80',
        pvp: '€16.00',
        margin: '+€12.20'
    },
    'tuna-toast': {
        category: 'tuna',
        title: 'Bluefin Tuna "Truffle Toast"',
        description: 'Golden brioche, Bluefin tuna tartare, fresh truffle, and gold leaf.',
        winePairing: 'Champagne / Pinot Noir',
        img: '/assets/tuna_truffle_toast.png',
        ingredients: [
            '70g Tuna Tartare (Bluefin Akami)',
            '1 Thick Slice Brioche Bread',
            '15ml Truffle Mayo',
            '2g Fresh Black Truffle (Shaved)',
            'Gold Leaf (24K)',
            'Micro-greens'
        ],
        sauce: '<strong>Truffle Emulsion:</strong> Japanese Mayo + Truffle Paste (10%) + Lemon Fresh. Rich umami taste that soaks into the warm bread.',
        steps: [
            'Cut the crusts off the brioche to get a perfect rectangle.',
            'Pan-fry the brioche in plenty of butter until golden crust forms.',
            'Season the tuna tartare with truffle oil and salt.',
            'Pile the tartare high on the warm toast.',
            'Pipe dots of truffle mayo over the fish.',
            'Garnish with a slice of fresh truffle and gold leaf.'
        ],
        equipment: 'Frying Pan, Tweezers, Piping Bag.',
        cost: '€6.20',
        pvp: '€25.00',
        margin: '+€18.80'
    },
    'salmon-nordic': {
        category: 'salmon',
        title: 'Salmón "Terciopelo" (Nordic Velvet)',
        description: 'Salmon "Mi-Cuit" (medium rare). Butter-like texture, dill emulsion, and horseradish snow.',
        winePairing: 'Chardonnay / Chablis',
        img: '/assets/salmon_velvet.png',
        ingredients: [
            '140g Lomo de Salmón Atlántico',
            '10ml Dill-infused Oil (vibrant green)',
            '10g Snow from Horseradish',
            '5ml Dill Emulsion',
            'Maldon Salt Crystals'
        ],
        sauce: '<strong>Dill & Horseradish Snow:</strong> Rich dill oil (blended at 60°C and strained) + grated frozen horseradish root. Horseradish is grated on a Microplane just before serving for a "snow" effect.',
        steps: [
            'Use Sous-Vide technology: 45°C for 18-20 minutes until butter-like texture.',
            'Cool rapidly in ice (without opening the bag) to stabilize color.',
            'Prep can be stored in vacuum for up to 3 days.',
            'Service (30 sec): Remove from bag, pat dry, arrange on plate.',
            'Garnish with drops of green oil and fresh horseradish "snow".'
        ],
        equipment: 'Vacuum Sealer, Combi Oven (steam mode) or Sous-vide, Microplane.',
        cost: '€6.50',
        pvp: '€28.00',
        margin: '+€21.50'
    },
    'salmon-rosette': {
        category: 'salmon',
        title: 'Gravlax "Cinta de Rubí" (Ruby Ribbon)',
        description: 'Salmon cured in beetroot and gin, sliced paper-thin. Cream cheese and zest.',
        winePairing: 'Rosé / Pinot Grigio',
        img: '/assets/salmon_gravlax.png',
        ingredients: [
            '120g Beetroot & Gin Cured Salmon',
            '15g Cream cheese with lemon zest',
            'Fresh Dill',
            'Gin (for marinade)'
        ],
        sauce: '<strong>Beetroot-Gin Marinade:</strong> A mix of grated beet, gin, coarse salt, and sugar (40/10/30/20). Coats the fish, creating a ruby rim.',
        steps: [
            'Marinate the fillet in the beetroot mixture for 24 hours in the fridge.',
            'Rinse under ice water and pat dry before slicing.',
            'Set the slicer to 1.5mm to create "ribbons".',
            'Arrange ribbons in a fan or rose shape on a cold plate.',
            'Add drops of lemon cream cheese between the folds of the fish.'
        ],
        equipment: 'Electric Slicer, Fridge.',
        cost: '€5.80',
        pvp: '€24.00',
        margin: '+€18.20'
    },
    'salmon-miso': {
        category: 'salmon',
        title: 'Miso Salmón "Fuego y Hielo" (Fire & Ice)',
        description: 'Chilled salmon slice in miso glaze, caramelized by open fire.',
        winePairing: 'Riesling / Gewürztraminer',
        img: '/assets/salmon_miso.png',
        ingredients: [
            '160g Salmon Prime Cut',
            '20ml Miso-Honey Glaze',
            '5g Puffed Quinoa',
            'Micro-greens'
        ],
        sauce: '<strong>Sweet Miso Glaze:</strong> White miso paste, honey, a drop of soy sauce. Reduced to a thick syrup. Stored in a dispenser in a warm place.',
        steps: [
            'Prepare the salmon steak (chilled).',
            'Apply a layer of miso glaze to the top.',
            'Use a blowtorch: caramelize the glaze until bubbly and umami aroma appears (15-20 sec).',
            'Important: the center of the fish must remain cool and raw ("Fire & Ice" effect).',
            'Sprinkle with puffed quinoa for crunch and serve immediately.'
        ],
        equipment: 'Powerful Blowtorch, Dispenser.',
        cost: '€7.50',
        pvp: '€32.00',
        margin: '+€24.50'
    },
    'salmon-avocado': {
        category: 'salmon',
        title: 'Rosa "Jardín de Mar" (Sea Garden)',
        description: 'Salad constructor. Deconstructed presentation: salmon roses, avocado fan, and ice onion.',
        winePairing: 'Sauvignon Blanc / Verdejo',
        img: '/assets/salmon_avocado_rosette.png',
        ingredients: [
            '100g Smoked Salmon (Premium)',
            '1 Ripe Avocado (Ready to Eat)',
            '50g Cherry Tomatoes',
            '10g Red Onion (Ice chilled)',
            '30g Mix Salad (Iceberg/Arugula)',
            '15ml Lemon-Olive Emulsion'
        ],
        sauce: '<strong>Lemon-Olive Emulsion:</strong> Whipped olive oil with lemon juice, salt, and white pepper to a light emulsion. Creates shine and binds components.',
        steps: [
            'Lay a light bed of salad mix on the bottom of the plate.',
            'Roll thin salmon slices into three careless voluminous "roses".',
            'Slice avocado into a thin fan and place between the roses.',
            'Scatter cherry halves chaotically (cut side up for shine).',
            'Garnish with "ice" onion rings (soaked in ice water for crunch).',
            'Pour emulsion over just before serving.'
        ],
        equipment: 'Slicer (for onion), Chef Knife.',
        cost: '€5.50',
        pvp: '€22.00',
        margin: '+€16.50'
    },
    'salmon-prawns': {
        category: 'salmon',
        title: 'Dúo "Imperial" (Royal Prawns & Salmon)',
        description: 'King prawns stuffed with garlic butter, under a "lid" of salmon in oyster glaze.',
        winePairing: 'Chardonnay (Oaked) / Cava',
        img: '/assets/salmon_prawns_vasily.png',
        ingredients: [
            '5-6 King Prawns (Jumbo)',
            '150g Salmon Fillet (Strips)',
            '30g Butter (Garlic & Dill)',
            '30ml Oyster Sauce (Glaze)',
            'Black Pepper',
            'Micro-dill'
        ],
        sauce: '<strong>Oyster-Gold Glaze:</strong> Thick oyster sauce, caramelized during baking. Gives the dish a glossy "gold" look and deep umami taste.',
        steps: [
            '<strong>Prep:</strong> Peel prawns, butterfly cut deep along the back.',
            '<strong>Stuff:</strong> Mix soft butter with garlic and dill. Stuff the back of the prawn.',
            '<strong>Assemble:</strong> Cover each prawn with a strip of salmon (like a "lid").',
            '<strong>Cook:</strong> Brush with oyster sauce. Bake 10-12 min at 180°C.',
            '<strong>Finish:</strong> Serve immediately, drizzled with pan juices.'
        ],
        equipment: 'Combi Oven, Brush.',
        cost: '€7.50',
        pvp: '€29.00',
        margin: '+€21.50'
    },
    'prawn-carpaccio': {
        category: 'salmon',
        title: 'Gambero "Seda Roja" (Red Silk Carpaccio)',
        description: 'Carpaccio of Gambero Rosso red prawn. Sweet as fruit. Citrus oil and flowers.',
        winePairing: 'Albariño / Godello',
        img: '/assets/prawn_carpaccio.png',
        ingredients: [
            '100g Gambero Rosso (Red Prawns)',
            '15ml Citrus Infused Oil (Lemon/Lime)',
            '5g Mango Puree Drops',
            'Edible Flowers (Violas)',
            'Maldon Salt'
        ],
        sauce: '<strong>Citrus-Mango Vinaigrette:</strong> Light emulsion of olive oil, yuzu juice, and mango puree drops. Highlights the natural sweetness of the prawn.',
        steps: [
            'Peel prawns, remove intestine (save head for bisque!).',
            'Place prawns between two plastic sheets and gently pound with a flat saucepan bottom into a perfect disc.',
            'Transfer disc to a cold plate (remove plastic gently).',
            'Drizzle with citrus oil.',
            'Garnish with mango puree drops and flowers.'
        ],
        equipment: 'Plastic wrap, Saucepan (for pounding), Tweezers.',
        cost: '€8.50',
        pvp: '€29.00',
        margin: '+€20.50'
    },

    'salmon-purple': {
        category: 'salmon',
        title: 'Sinfonía "Violeta Real" (Royal Violet)',
        description: 'Smoked salmon roses, purple potato, avocado, and honey-mustard emulsion.',
        winePairing: 'Sauvignon Blanc / Rosé de Provence',
        img: '/assets/salmon_purple_black_plate.png',
        ingredients: [
            '120g Smoked Salmon (Premium)',
            '1 Avocado (Hass)',
            '80g Purple Potato (Vitelotte)',
            '20g Mix Salad / Lamb\'s Lettuce',
            '15ml Honey-Dijon Dressing',
            'Pink Peppercorns (Crushed)'
        ],
        sauce: '<strong>Honey-Dijon Vinaigrette:</strong> Emulsion of Extra Virgin olive oil, Dijon mustard, flower honey, and lemon juice. Balance of sweet, spicy, and sour.',
        steps: [
            'Boil purple potatoes in salted water, cool, and dice.',
            'Roll smoked salmon slices into tight "roses".',
            'Slice avocado into crescents (drizzle with lemon).',
            'Assembly: Sauce on bottom. Layout salad mix, potato cubes, and avocado.',
            'Place salmon roses as the main accent.',
            'Garnish with pink peppercorns, dill, and microgreens.'
        ],
        equipment: 'Chef Knife, Tweezers, Sauce Boat.',
        cost: '€6.20',
        pvp: '€24.00',
        margin: '+€17.80'
    },
    'salmon-tournedos': {
        category: 'salmon',
        title: 'Tournedó "Oro Cítrico" (Citrus Gold)',
        description: '"Fish Mignon". Sous-vide salmon steak, glazed with orange and chili. Served hot.',
        winePairing: 'Chardonnay (Oaked) / Riesling',
        img: '/assets/salmon_tournedos_gold.png',
        ingredients: [
            '180g Salmon Fillet (Rolled Tail/Trim)',
            '50ml Orange-Chili Marinade',
            '1 Orange Segment (Charred)',
            '1 Rosemary Sprig',
            'Cornstarch (for thickening)',
            'Butter (cube)'
        ],
        sauce: '<strong>Citrus-Gold Glaze:</strong> Orange fresh, pulp, soy sauce, chili, and butter. Thickened with starch in microwave to a gloss. Bright sweet & sour taste.',
        steps: [
            '<strong>Prep:</strong> Roll fillet into a "puck", skin side out, tie with string. Vacuum with marinade.',
            '<strong>Cook:</strong> Bake in combi oven (Heat+Steam 200°C) 12-14 minutes.',
            '<strong>Finish:</strong> Remove string (!) with scissors. Torch to glaze.',
            '<strong>Plating:</strong> Pour mirror sauce, place tournedos, garnish with charred orange and rosemary.'
        ],
        equipment: 'Combi Oven, Microwave, Blowtorch, Culinary Thread.',
        cost: '€4.00',
        pvp: '€25.00',
        margin: '+€21.00'
    },
    'salmon-ruby': {
        category: 'salmon',
        title: 'Salmón "Glaseado Rubí" (Pomegranate Glaze)',
        description: 'Salmon in pomegranate glaze with velvet sweet potato puree and parmesan.',
        winePairing: 'Pinot Noir / Full-bodied Rosé',
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
        sauce: '<strong>Ruby Glaze:</strong> Narsharab (pomegranate), Teriyaki, and orange juice mix. Reduced to syrup. Deep, sweet & sour taste.',
        steps: [
            '<strong>Prep:</strong> Bake sweet potato (40 min), blend with cream and parmesan, sieve ("Velvet").',
            '<strong>Cook:</strong> Brush salmon with glaze. Bake with mushrooms 8-10 min at 180°C.',
            '<strong>Finish:</strong> Torch glaze to boil. Warm puree in microwave.',
            '<strong>Plating:</strong> Puree in a "comma" shape, salmon on top, mushrooms and asparagus on side. Sprinkle sesame and chives.'
        ],
        equipment: 'Combi Oven, Blender, Sieve, Blowtorch.',
        cost: '€4.80',
        pvp: '€26.00',
        margin: '+€21.20'
    },
    'salmon-emerald': {
        category: 'salmon',
        title: 'Costra "Esmeralda" (Emerald Crust)',
        description: 'Baked salmon under a warm avocado mousse with a crunchy pistachio crust.',
        winePairing: 'Sauvignon Blanc / Vermentino',
        img: '/assets/salmon_emerald_crust.png',
        ingredients: [
            '180g Salmon Fillet',
            '1 Avocado (Ripe)',
            '30g Pistachios (Chopped)',
            '20g Sun-dried Tomatoes',
            'Micro-greens (for garnish)',
            'Cream 33%'
        ],
        sauce: '<strong>Avocado-Pistachio Mousse:</strong> Warm cream of avocado and parmesan. Nutty, creamy, and vibrant green.',
        steps: [
            '<strong>Prep:</strong> Blend avocado, cream, and sun-dried tomatoes into a mousse. Chop pistachios.',
            '<strong>Cook:</strong> Bake salmon fillet at 180°C for 10 min (80% done).',
            '<strong>Crust:</strong> Pipe avocado mousse on top, cover generously with pistachio crumbs.',
            '<strong>Finish:</strong> Bake for 2 more mins (Gratin) to warm the mousse without browning.',
            '<strong>Plating:</strong> Serve on a dark plate. The green emerald crust is the star.'
        ],
        equipment: 'Combi Oven, Blender, Piping Bag.',
        cost: '€6.00',
        pvp: '€27.00',
        margin: '+€21.00'
    }
};
