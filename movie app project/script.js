const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const fragrances = [
  {
    name: "Chanel No. 5",
    img: "https://starkmarket.ma/wp-content/uploads/2023/02/44-1.jpg", 
    description: "A bold fragrance, an opulent bouquet, abstract and mysterious with no dominant notes. A disruption in which aldehydes, opaque and exhilarating synthetic notes appear for the first time. Gabrielle Chanel gives it a code name—a name that renders all others outdated."
  },
  {
    name: "Dior Sauvage",
    img: "https://shop-beauty.dior.ma/cdn/shop/products/C099600455_E01_GHC_1850x.jpg?v=1607331049", 
      
    description: "To create the fragrance Sauvage, Dior drew inspiration from untouched expanses under a blue-hued night, at the hour when the intense scents of a crackling fire rise. Its trail is expressed through notes of mandarin, tonka bean, and sandalwood."
  },
  {
    name: "Gucci Bloom",
    img: "https://saharaperfumes.com/cdn/shop/files/Gucci_Bloom_Eau_De_Parfum_for_Women_100ML.webp?v=1725708746",
    description: "Gucci Bloom is an exceptionally feminine, luminous floral essence. Its composition begins with Indian sambac jasmine. Along with rose, jasmine is the most commonly used flower in perfumery. Also known as 'Arabian Jasmine,' sambac jasmine originates from Arabia."
  },
  {
    name: "Tom Ford Black Orchid",
    img: "https://alaouishoppi.ma/wp-content/uploads/2023/05/Tom-Ford-Black-Orchid-p_1024x1024@2x.webp", 
    description: "Black Orchid Eau de Parfum combines atypical notes in perfumery that make it unique. All its ingredients are black in color. Black truffle and black orchid give it a provocative edge, while vanilla and chocolate add an extremely voluptuous and sensual quality."
  },
  
  {
    name : "Bleu De Chanel",
    img : "https://www.olfajoy.com/181-large_default/bleu-de-Chanel-150-ml-prix-maroc-eau-de-parfum-homme-pas-cher.jpg",
    description : "BLEU DE CHANEL asserts a fulfilled character in a timeless and unexpected fragrance. The aromatic woody scent with a captivating trail embodies freedom with strength and elegance, reflecting the man who wears it"
  },
  {
    name : "Stronger With You",
    img : "https://marionnaud.ma/cdn/shop/products/Capture_d_ecran_2021-12-09_a_16.30.58.png?v=1639063890",
    description : "The fragrance for men has inherited a confident elegance, with the easy nonchalance of youth, conveyed by the sage at his aromatic heart. A long-lasting scent to tell a love story that is authentic and unstoppable."
  },
  {
    name : "AZZARO the most wanted",
    img : "https://www.fatin.ma/wp-content/uploads/2023/11/Azzaro_most_wanted_intense_100ml1.webp",
    description : "the magnetic fragrance of the new Azzarro Eau de Parfum intense encourages you to follow him, smell his skin, and be seduced by him. This is a men's perfume that reflects the game of life, where rules are made to be broken and success comes easy."
  },
  {
    name : "Le Beau Le Parfum",
    img : "https://lkadoo.ma/wp-content/uploads/2023/02/456.webp",
    description : "The intense addiction of a woody oriental eau de parfum. What might be hidden behind this addiction? The wild sensuality of ambergris and the freshness of ginger and pineapple elevate the powerful masculinity of sandalwood and tonka bean."
  },
  {
    name : "Burberry hero edp",
    img : "https://assets.goldenscent.com/catalog/product/cache/1/small_image/750x750/9df78eab33525d08d6e5fb8d27136e95/3/6/3616304679445_-_burberry_-_hero_perfum_-_100ml_-_fd.png",
    description : "An intense and invigorating scent for men Notes of incense and benzoin underpin Eau de Parfum, and Eau de Toilette is invigorated by juniper and black pepper then brightened with bergamot. Housed in angular glass bottles, the 100ml sizes of each fragrance can be replenished with our new Hero refills."
  },
  {
    name : "Kayali Vanille 28",
    img : "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwf8618f40/images/hi-res/PID_principal/PID_principal_2692/P3551017_principal.jpg?sw=585&sh=585&sm=fit",
    description : " Creamy jasmine blends with generous notes of Madagascar vanilla to highlight the sweet softness of Brazilian tonka bean. Notes of musk, amber, patchouli, and brown sugar harmonize in perfect balance to form the subtle base of this stunning woody fragrance"
  },
  {
    name : "9 PM Afnan",
    img : "https://m.media-amazon.com/images/I/61N47NLpqGL._SL1500_.jpg",
    description : "main accords. 9pm by Afnan is a Oriental Vanilla fragrance for men. 9pm was launched in 2020. Top notes are Apple, Cinnamon, Wild Lavender and Bergamot; middle notes are Orange Blossom and Lily-of-the-Valley; base notes are Vanilla, Tonka Bean, Amber and Patchouli."
  },
  {
    name : "Jean Paul Gaultier : Le male le parfum",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCng0OCjlv0im_1TxntuyFrnugwwbxOzEQA&s ",
    description : "Woody and oriental notes reinforce the masculinity of this fragrance. For added sensuality, Le Male Le Parfum also contains vanilla. Highly prized by perfumers, this raw material reveals its many facets here, alternating between animalic, smoky, smooth, and slightly powdery."
  },
    
];

showFragrances(fragrances);

function showFragrances(fragranceList) {
  main.innerHTML = '';

  fragranceList.forEach((fragrance) => {
    const { name, img, description } = fragrance;

    const fragranceEl = document.createElement('div');
    fragranceEl.classList.add('fragrance');

    fragranceEl.innerHTML = `
      <img src="${img}" alt="${name}">
      <div class="info">
        <h3>${name}</h3>
        <div class="description">${description}</div>
      </div>
    `;
    main.appendChild(fragranceEl);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.toLowerCase();

  const filteredFragrances = fragrances.filter(fragrance => fragrance.name.toLowerCase().includes(searchTerm));
  showFragrances(filteredFragrances);

  search.value = '';
});
