'use strict';
const news = [
  {
    title: `Minecraft's new frogs were briefly swallowing goats whole`,
    headerBgSrc:
      'https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft;',
    category: 'Minecraft',
    body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
    date: '2022-02-01',
  },
  {
    title: `Portal Companion Collection marks Valve's first foray into Nintendo territory`,
    headerBgSrc:
      'https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg?t=1665427328',
    category: 'Nintendo',
    body: "Nintendo hosted one of its regular Nintendo Direct showcases today, and aside from the frankly troubling new Kirby game coming later this year, which should be of concern to everyone, it was a pretty unexciting affair for PC gamers. Aside from one big announcement: Valve is bringing both Portal games to the handheld later this year, marking the very first time a Valve-developed game has featured on a Nintendo platform. Yes, Bridge Constructor Portal exists on Switch, but that was developed by ClockStone and, according to its Steam page, wasn't even published by Valve. The Portal: Companion Collection marks Valve's Nintendo debut proper, and features both the original Portal and its sequel, both ported in collaboration with NVIDIA Lightspeed Studios. As the name implies, that's an internal NVIDIA studio that has, among other things, worked on the Quake 2 RTX project.",
    date: '2022-02-02',
  },
  {
    title: `Minecraft is experimenting with frogs ahead of the next update`,
    headerBgSrc:
      'https://assets.reedpopcdn.com/-1644399852318.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1644399852318.jpg;',
    category: 'Minecraft',
    body: "Ahead of the Wild Update arriving sometime in 2022, Minecraft Bedrock is testing out those fun new frog mobs that will be joining officially in version 1.19. The new version of Minecraft for Windows includes frogs, their tiny tadpole babies, and several of their new features to test out. From what we know about the frog mobs so far, they spawn in swamp biomes where they'll spend time snapping fireflies out of the air and hopping on Dripleafs. We already knew some other neat things about frogs, like how they hatch as tadpoles and grow into one of three frog varieties based on the biome they mature in. Mojang had also let on that frogs would be useful to players in some fashion, but didn't initially let on how.",
    date: '2022-02-03',
  },
  {
    title: `You can now be a wookiee in Fortnite, but not Chewie`,
    headerBgSrc:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/02/fortnite-book-boba-fett-fennec-shand-krrsantan-skin-outfit-cosmetic.jpg',
    category: 'Fortnite',
    body: "The latest live action series set in a galaxy far, far away, The Book of Boba Fett, has introduced us to some cool new Star Wars characters, including Ming-Na Wen's Fennec Shand and new-wookiee-in-town Krrsantan, an arm-ripping fiend who towers over everybody else. Now you can play as both of them in Fortnite thanks to yet another crossover between Disney and the battle royale game. Boba Fett himself previously joined Fortnite earlier last month, and he's also back in the item shop so you can fill out your own Book of Boba.",
    date: '2022-02-03',
  },
  {
    title: `This Minecraft replica of Final Fantasy 14's Sharlayan is so good I thought it was an in-game screenshot`,
    headerBgSrc:
      'https://cdn.mos.cms.futurecdn.net/Hut2scxXhQsqm3JPdtVPJk-1200-80.jpeg',
    category: 'Minecraft',
    body: "I am undeniably an absolute sucker for people recreating cool stuff in Minecraft, and nothing has hit my interests more than this fantastic Minecraft replica of Final Fantasy 14's Old Sharlayan. The Grecian-inspired city is the first new area you visit in Endwalker, the game's latest expansion. It's become one of my favourite zones in the game and this replica has done a great job at capturing how gosh-darn pretty the whole place is. The creation comes courtesy of a BiliBili user, who posted a two-minute video of their build to the Chinese social media site. It shows off the giant statue/fountain seen in the Endwalker trailer, the sage council building and the city's main aetheryte which is even spinning in the recreation. Sadly, there doesn't seem to be a way to check this out in Minecraft ourselves, so we'll just have to admire the trailer a few times.",
    date: '2022-02-04',
  },
];

const sectionEl = document.querySelector('ul');

news.forEach(({ title, headerBgSrc, category, body, date }) => {
  const newLi = document.createElement('li');
  newLi.className = 'news';
  sectionEl.append(newLi);

  const newTitleImg = document.createElement('div');
  newTitleImg.className = 'titleImg';
  newTitleImg.style.backgroundImage = `url('${headerBgSrc}')`;

  const newLikeDiv = document.createElement('div');
  newLikeDiv.className = 'like';
  const newLike = document.createElement('i');
  newLike.className = 'far fa-heart';
  newLikeDiv.append(newLike);

  const newLikeDivHide = document.createElement('div');
  newLikeDivHide.className = 'like hide';
  const newLikeFill = document.createElement('i');
  newLikeFill.className = 'fas fa-heart fill';
  newLikeDivHide.append(newLikeFill);

  const newH2 = document.createElement('h2');
  newH2.className = 'title';
  newH2.textContent = title;
  newTitleImg.append(newLikeDiv, newLikeDivHide, newH2);

  const newBodyNews = document.createElement('div');
  newBodyNews.className = 'bodyNews';

  const newh3 = document.createElement('h3');
  newh3.className = 'category';
  newh3.textContent = category;

  const newP = document.createElement('p');
  newP.className = 'newsText';
  newP.textContent = body;

  const newButton = document.createElement('button');
  newButton.className = 'delete';
  newButton.textContent = 'delete';

  const newDate = document.createElement('p');
  newDate.className = 'date';
  newDate.textContent = date;
  newBodyNews.append(newh3, newP, newButton, newDate);

  newLi.append(newTitleImg, newBodyNews);
});

const docLikes = document.querySelectorAll('.like');
const docDeletes = document.querySelectorAll('.delete');
const docLi = document.querySelectorAll('li');

const fill = function (e) {
  e.stopPropagation();
  const likes = e.currentTarget.parentElement.querySelectorAll('.like');
  if (likes[0].className == 'like') {
    likes[0].className = 'like hide';
    likes[1].className = 'like';
  } else {
    likes[1].className = 'like hide';
    likes[0].className = 'like';
  }
};

for (const like of docLikes) {
  like.onclick = fill;
}

const paint = function () {
  if (this.style.backgroundColor == 'pink') {
    this.style.backgroundColor = '#fff';
  } else {
    this.style.backgroundColor = 'pink';
  }
};

for (const li of docLi) {
  li.onclick = paint;
}

const del = function (e) {
  e.currentTarget.parentElement.parentElement.remove();
};

for (const button of docDeletes) {
  button.onclick = del;
}
