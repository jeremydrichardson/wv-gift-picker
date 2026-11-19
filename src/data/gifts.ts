// Gifts and "starting at" prices from the World Vision 2026 Gift Catalog
// (https://donate.worldvision.org/giftcatalog), captured November 2026.

export type CategoryId =
  | 'animals'
  | 'child-protection'
  | 'clean-water'
  | 'disaster-relief'
  | 'economic-empowerment'
  | 'education'
  | 'girls-women'
  | 'health'
  | 'hunger-relief'
  | 'poverty-in-america';

export interface Gift {
  id: string;
  name: string;
  price: number;
  emoji: string;
  image: string;
  url: string;
  categories: CategoryId[];
}

export const CATEGORIES: { id: CategoryId; label: string; emoji: string }[] = [
  {
    "id": "animals",
    "label": "Animals",
    "emoji": "🐐"
  },
  {
    "id": "child-protection",
    "label": "Child Protection",
    "emoji": "🛡️"
  },
  {
    "id": "clean-water",
    "label": "Clean Water",
    "emoji": "💧"
  },
  {
    "id": "disaster-relief",
    "label": "Disaster Relief",
    "emoji": "🆘"
  },
  {
    "id": "economic-empowerment",
    "label": "Jobs & Business",
    "emoji": "📈"
  },
  {
    "id": "education",
    "label": "Education",
    "emoji": "🎓"
  },
  {
    "id": "girls-women",
    "label": "Girls & Women",
    "emoji": "💜"
  },
  {
    "id": "health",
    "label": "Health",
    "emoji": "🩺"
  },
  {
    "id": "hunger-relief",
    "label": "Hunger Relief",
    "emoji": "🍲"
  },
  {
    "id": "poverty-in-america",
    "label": "Help in the U.S.",
    "emoji": "🇺🇸"
  }
];

export const GIFTS: Gift[] = [
  {
    "id": "animal-agriculture-fund",
    "name": "Animal and Agriculture Fund",
    "price": 30,
    "emoji": "🐾",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02114109/D395-0938-127-1.jpg",
    "url": "https://donate.worldvision.org/give/animal-agriculture-fund",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "goat-for-a-woman",
    "name": "Goat for a woman",
    "price": 100,
    "emoji": "🐐",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173135/goat-for-a-woman.jpg",
    "url": "https://donate.worldvision.org/give/goat-for-a-woman",
    "categories": [
      "animals",
      "girls-women"
    ]
  },
  {
    "id": "10-chickens-for-a-woman",
    "name": "10 chickens for a woman",
    "price": 125,
    "emoji": "🐔",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/chickens-for-a-woman.png",
    "url": "https://donate.worldvision.org/give/10-chickens-for-a-woman",
    "categories": [
      "animals",
      "girls-women"
    ]
  },
  {
    "id": "dairy-cow-for-a-woman",
    "name": "Dairy cow for a woman",
    "price": 850,
    "emoji": "🐄",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02130623/dairy.jpg",
    "url": "https://donate.worldvision.org/give/dairy-cow-for-a-woman",
    "categories": [
      "animals",
      "girls-women"
    ]
  },
  {
    "id": "goat-2chicken",
    "name": "Goat and 2 chickens",
    "price": 125,
    "emoji": "🐐",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19094011/D232-0579-476-1.jpg",
    "url": "https://donate.worldvision.org/give/goat-2chicken",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "chickens",
    "name": "Chickens",
    "price": 25,
    "emoji": "🐔",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02124513/D145-0336-65.jpg",
    "url": "https://donate.worldvision.org/give/chickens",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "1-goat-2-ducks-3-rabbits-4-chickens",
    "name": "1 goat, 2 ducks, 3 rabbits, and 4 chickens",
    "price": 240,
    "emoji": "🐇",
    "image": "https://wvusstatic.com/donate/uploads/2017/09/19094456/1-2-3-4-1.jpg",
    "url": "https://donate.worldvision.org/give/1-goat-2-ducks-3-rabbits-4-chickens",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "goats",
    "name": "Goat",
    "price": 100,
    "emoji": "🐐",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02131454/girl-goat.jpg",
    "url": "https://donate.worldvision.org/give/goats",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "ducks",
    "name": "Ducks",
    "price": 45,
    "emoji": "🦆",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/ducks.png",
    "url": "https://donate.worldvision.org/give/ducks",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "16-farm-animals",
    "name": "16 farm animals",
    "price": 535,
    "emoji": "🚜",
    "image": "https://wvusstatic.com/donate/uploads/2017/09/19095155/16-farm-animals.jpg",
    "url": "https://donate.worldvision.org/give/16-farm-animals",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "sheep",
    "name": "Sheep",
    "price": 50,
    "emoji": "🐑",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/18142247/W256-0239-056-2.jpg",
    "url": "https://donate.worldvision.org/give/sheep",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "pig",
    "name": "Pig",
    "price": 50,
    "emoji": "🐖",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173217/pig-2.jpg",
    "url": "https://donate.worldvision.org/give/pig",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "10-small-farm-animals",
    "name": "10 small farm animals",
    "price": 155,
    "emoji": "🚜",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19095113/10-small-farm-animals.jpg",
    "url": "https://donate.worldvision.org/give/10-small-farm-animals",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "fishing-kit",
    "name": "Family Fishing Kit",
    "price": 85,
    "emoji": "🐟",
    "image": "https://wvusstatic.com/donate/uploads/2017/07/18141421/D155-0587-144.jpg",
    "url": "https://donate.worldvision.org/give/fishing-kit",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "5-ducks-2-chickens",
    "name": "5 ducks and 2 chickens",
    "price": 100,
    "emoji": "🦆",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19095028/5-ducks-2-chickens-1.jpg",
    "url": "https://donate.worldvision.org/give/5-ducks-2-chickens",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "3-ducks-1-goat",
    "name": "3 ducks and 1 goat",
    "price": 145,
    "emoji": "🐐",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19094757/3-ducks-1-goat.jpg",
    "url": "https://donate.worldvision.org/give/3-ducks-1-goat",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "fish-pond",
    "name": "Fish pond",
    "price": 35,
    "emoji": "🐟",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19095432/Fishing-pond.jpg",
    "url": "https://donate.worldvision.org/give/fish-pond",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "28-farm-animals",
    "name": "28 farm animals",
    "price": 2950,
    "emoji": "🚜",
    "image": "https://wvusstatic.com/donate/uploads/2017/09/19095240/28-farm-animals.jpg",
    "url": "https://donate.worldvision.org/give/28-farm-animals",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "sheep-goat",
    "name": "Sheep and goat",
    "price": 250,
    "emoji": "🐑",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02132144/sheep-and-goat-2.jpg",
    "url": "https://donate.worldvision.org/give/sheep-goat",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "dairy-cow",
    "name": "Dairy cow",
    "price": 75,
    "emoji": "🐄",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19094347/D155-0589-023.jpg",
    "url": "https://donate.worldvision.org/give/dairy-cow",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "fishing-kit-2-chickens",
    "name": "Fishing kit and 2 chickens",
    "price": 110,
    "emoji": "🐔",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19095357/Fishing-kit-and-two-chickens.jpg",
    "url": "https://donate.worldvision.org/give/fishing-kit-2-chickens",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "dairy-animals",
    "name": "Dairy animals",
    "price": 50,
    "emoji": "🥛",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/12124558/W200-0475-014.jpg",
    "url": "https://donate.worldvision.org/give/dairy-animals",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "alpaca",
    "name": "Alpaca",
    "price": 50,
    "emoji": "🦙",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19100130/D095-0187-431.jpg",
    "url": "https://donate.worldvision.org/give/alpaca",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "10-goats-20-chickens",
    "name": "10 goats and 20 chickens",
    "price": 1250,
    "emoji": "🐐",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02113129/10-goats-20-chickens.jpg",
    "url": "https://donate.worldvision.org/give/10-goats-20-chickens",
    "categories": [
      "animals"
    ]
  },
  {
    "id": "child-protection",
    "name": "Child protection",
    "price": 25,
    "emoji": "🛡️",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/child-protection-fund.png",
    "url": "https://donate.worldvision.org/give/child-protection",
    "categories": [
      "child-protection"
    ]
  },
  {
    "id": "girls-women-in-crisis",
    "name": "Girls & Women in Crisis Fund",
    "price": 50,
    "emoji": "🆘",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173131/girls-women-in-crisis.jpg",
    "url": "https://donate.worldvision.org/give/girls-women-in-crisis",
    "categories": [
      "child-protection",
      "girls-women"
    ]
  },
  {
    "id": "hope-for-sexually-exploited-girls",
    "name": "Hope for sexually exploited girls",
    "price": 40,
    "emoji": "💜",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173145/hope-for-sexually-exploited-girls.jpg",
    "url": "https://donate.worldvision.org/give/hope-for-sexually-exploited-girls",
    "categories": [
      "child-protection",
      "girls-women"
    ]
  },
  {
    "id": "home-for-a-mother-and-children",
    "name": "Home for a mother and her children",
    "price": 75,
    "emoji": "🏠",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19090136/D395-0938-036.jpg",
    "url": "https://donate.worldvision.org/give/home-for-a-mother-and-children",
    "categories": [
      "child-protection",
      "girls-women"
    ]
  },
  {
    "id": "home-for-vulnerable-children",
    "name": "Home for vulnerable children",
    "price": 50,
    "emoji": "🏠",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/16152642/D065-0150-003.jpg",
    "url": "https://donate.worldvision.org/give/home-for-vulnerable-children",
    "categories": [
      "child-protection"
    ]
  },
  {
    "id": "clothing-for-children",
    "name": "Clothing for children",
    "price": 60,
    "emoji": "👕",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02130336/W373-0138-004.jpg",
    "url": "https://donate.worldvision.org/give/clothing-for-children",
    "categories": [
      "child-protection"
    ]
  },
  {
    "id": "mongolian-ger",
    "name": "Mongolian ger",
    "price": 50,
    "emoji": "⛺",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173205/mongolian-ger.jpg",
    "url": "https://donate.worldvision.org/give/mongolian-ger",
    "categories": [
      "child-protection"
    ]
  },
  {
    "id": "clean-water",
    "name": "Clean Water Fund",
    "price": 25,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/clean-water-fund.png",
    "url": "https://donate.worldvision.org/give/clean-water",
    "categories": [
      "clean-water"
    ]
  },
  {
    "id": "deep-well",
    "name": "Deep well",
    "price": 150,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19090544/D485-1465-274-2.jpg",
    "url": "https://donate.worldvision.org/give/deep-well",
    "categories": [
      "clean-water"
    ]
  },
  {
    "id": "clean-water-for-a-family",
    "name": "Clean water for a family",
    "price": 50,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19103051/D232-0601-301.jpg",
    "url": "https://donate.worldvision.org/give/clean-water-for-a-family",
    "categories": [
      "clean-water"
    ]
  },
  {
    "id": "mechanized-water-system-tap",
    "name": "Mechanized water system tap",
    "price": 150,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2019/02/19103637/BAX_SL5_print-451.jpg",
    "url": "https://donate.worldvision.org/give/mechanized-water-system-tap",
    "categories": [
      "clean-water"
    ]
  },
  {
    "id": "clean-water-american-families",
    "name": "Clean water for families in the U.S.",
    "price": 50,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2018/09/02130016/D400-2344-12.jpg",
    "url": "https://donate.worldvision.org/give/clean-water-american-families",
    "categories": [
      "clean-water",
      "poverty-in-america"
    ]
  },
  {
    "id": "safe-school-latrines",
    "name": "Safe school latrines",
    "price": 150,
    "emoji": "🚻",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173228/safe-school-latrines.jpg",
    "url": "https://donate.worldvision.org/give/safe-school-latrines",
    "categories": [
      "clean-water",
      "education",
      "health"
    ]
  },
  {
    "id": "disaster-relief-fund-1",
    "name": "Disaster Relief Fund",
    "price": 50,
    "emoji": "🆘",
    "image": "https://wvusstatic.com/donate/uploads/2023/03/13090324/W005-0506-001-1.jpg",
    "url": "https://donate.worldvision.org/give/disaster-relief-fund-1",
    "categories": [
      "disaster-relief"
    ]
  },
  {
    "id": "sudan-crisis-fund",
    "name": "Sudan Crisis Fund",
    "price": 150,
    "emoji": "🆘",
    "image": "https://wvusstatic.com/donate/uploads/2024/06/14084919/sudan-crisis.jpg",
    "url": "https://donate.worldvision.org/give/sudan-crisis-fund",
    "categories": [
      "disaster-relief"
    ]
  },
  {
    "id": "refugee-childrens-crisis-fund",
    "name": "Refugee Children’s Crisis Fund",
    "price": 65,
    "emoji": "🆘",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/Disaster_Relief-Refugee_Crisis-1-e1705453865324.jpg",
    "url": "https://donate.worldvision.org/give/refugee-childrens-crisis-fund",
    "categories": [
      "disaster-relief"
    ]
  },
  {
    "id": "disaster-relief-in-the-usa-1",
    "name": "Disaster relief in the U.S.",
    "price": 50,
    "emoji": "🆘",
    "image": "https://wvusstatic.com/donate/uploads/2024/03/19092550/D400-2364-335.jpg",
    "url": "https://donate.worldvision.org/give/disaster-relief-in-the-usa-1",
    "categories": [
      "disaster-relief",
      "poverty-in-america"
    ]
  },
  {
    "id": "hunger-relief-fund",
    "name": "Hunger Relief Fund",
    "price": 100,
    "emoji": "🍚",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19104205/D232-0611-136.jpg",
    "url": "https://donate.worldvision.org/give/hunger-relief-fund",
    "categories": [
      "disaster-relief",
      "hunger-relief"
    ]
  },
  {
    "id": "food-kits-for-refugees",
    "name": "Food kits for refugees",
    "price": 16,
    "emoji": "🍲",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19104343/D115-0747-146.jpg",
    "url": "https://donate.worldvision.org/give/food-kits-for-refugees",
    "categories": [
      "disaster-relief",
      "hunger-relief"
    ]
  },
  {
    "id": "u-s-family-emergency-kits",
    "name": "U.S. Family Emergency Kits",
    "price": 75,
    "emoji": "🧰",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173257/us-family-emergency-kits.jpg",
    "url": "https://donate.worldvision.org/give/u-s-family-emergency-kits",
    "categories": [
      "disaster-relief",
      "poverty-in-america"
    ]
  },
  {
    "id": "haiti-emergency-response-2",
    "name": "Haiti Emergency Response",
    "price": 50,
    "emoji": "🧰",
    "image": "https://wvusstatic.com/donate/uploads/2021/08/haiti-emergency-response-2.jpg",
    "url": "https://donate.worldvision.org/give/haiti-emergency-response-2",
    "categories": [
      "disaster-relief"
    ]
  },
  {
    "id": "solar-lanterns",
    "name": "Solar lanterns",
    "price": 20,
    "emoji": "🏮",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/Solar_lamps_ethiopia.jpg",
    "url": "https://donate.worldvision.org/give/solar-lanterns",
    "categories": [
      "disaster-relief"
    ]
  },
  {
    "id": "economic-empowerment",
    "name": "Economic Empowerment Fund",
    "price": 35,
    "emoji": "📈",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/18142857/D232-0615-60.jpg",
    "url": "https://donate.worldvision.org/give/economic-empowerment",
    "categories": [
      "economic-empowerment"
    ]
  },
  {
    "id": "fruit-trees",
    "name": "Fruit trees",
    "price": 27,
    "emoji": "🍊",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/18143239/W410-0199-139.jpg",
    "url": "https://donate.worldvision.org/give/fruit-trees",
    "categories": [
      "economic-empowerment",
      "hunger-relief"
    ]
  },
  {
    "id": "seeds",
    "name": "Seeds",
    "price": 45,
    "emoji": "🌱",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173232/seeds.jpg",
    "url": "https://donate.worldvision.org/give/seeds",
    "categories": [
      "economic-empowerment",
      "hunger-relief"
    ]
  },
  {
    "id": "small-business-loan-for-women",
    "name": "Small business loan for women",
    "price": 75,
    "emoji": "💰",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173248/small-business-loan.jpg",
    "url": "https://donate.worldvision.org/give/small-business-loan-for-women",
    "categories": [
      "economic-empowerment",
      "girls-women"
    ]
  },
  {
    "id": "sewing-machine",
    "name": "Sewing machine",
    "price": 50,
    "emoji": "🧵",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19074830/D232-0596-109.jpg",
    "url": "https://donate.worldvision.org/give/sewing-machine",
    "categories": [
      "economic-empowerment",
      "girls-women"
    ]
  },
  {
    "id": "career-training-for-girls-women",
    "name": "Career training for girls and women",
    "price": 25,
    "emoji": "💼",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173046/career-training.jpg",
    "url": "https://donate.worldvision.org/give/career-training-for-girls-women",
    "categories": [
      "economic-empowerment",
      "education",
      "girls-women"
    ]
  },
  {
    "id": "tools-training-seeds",
    "name": "Tools, training, and seeds",
    "price": 95,
    "emoji": "🌱",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19074559/Nashira_Peru-W305-0065-083.jpg",
    "url": "https://donate.worldvision.org/give/tools-training-seeds",
    "categories": [
      "economic-empowerment",
      "hunger-relief"
    ]
  },
  {
    "id": "education-for-girls",
    "name": "Education for girls",
    "price": 50,
    "emoji": "🎓",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19080646/Spon-Sri-A-042.jpg",
    "url": "https://donate.worldvision.org/give/education-for-girls",
    "categories": [
      "education",
      "girls-women"
    ]
  },
  {
    "id": "education-for-children",
    "name": "Education for children",
    "price": 50,
    "emoji": "🎓",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173112/education-for-children.jpg",
    "url": "https://donate.worldvision.org/give/education-for-children",
    "categories": [
      "education"
    ]
  },
  {
    "id": "school-supplies",
    "name": "School supplies",
    "price": 25,
    "emoji": "✏️",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19092319/D155-0593-164.jpg",
    "url": "https://donate.worldvision.org/give/school-supplies",
    "categories": [
      "education"
    ]
  },
  {
    "id": "sign-language-training-for-a-child",
    "name": "Sign language training for a child",
    "price": 150,
    "emoji": "🤟",
    "image": "https://wvusstatic.com/donate/uploads/2021/02/13063612/IMG_4431-1.jpg",
    "url": "https://donate.worldvision.org/give/sign-language-training-for-a-child",
    "categories": [
      "education"
    ]
  },
  {
    "id": "school-textbooks-in-braille",
    "name": "School textbooks in Braille",
    "price": 50,
    "emoji": "📚",
    "image": "https://wvusstatic.com/donate/uploads/2021/02/02131135/braille.jpg",
    "url": "https://donate.worldvision.org/give/school-textbooks-in-braille",
    "categories": [
      "education"
    ]
  },
  {
    "id": "bibles",
    "name": "Bibles",
    "price": 10,
    "emoji": "📖",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19091730/D232-0597-113.jpg",
    "url": "https://donate.worldvision.org/give/bibles",
    "categories": [
      "education"
    ]
  },
  {
    "id": "sunday-school",
    "name": "Sunday school",
    "price": 60,
    "emoji": "⛪",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173252/sunday-school-1.jpg",
    "url": "https://donate.worldvision.org/give/sunday-school",
    "categories": [
      "education"
    ]
  },
  {
    "id": "school-supplies-for-usa",
    "name": "School supplies for the U.S.",
    "price": 50,
    "emoji": "✏️",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/12130207/D400-2211-116.jpg",
    "url": "https://donate.worldvision.org/give/school-supplies-for-usa",
    "categories": [
      "education",
      "poverty-in-america"
    ]
  },
  {
    "id": "clean-and-safe-births",
    "name": "Clean and safe births",
    "price": 150,
    "emoji": "👶",
    "image": "https://wvusstatic.com/donate/uploads/2025/02/19090350/D395-0936-035.jpg",
    "url": "https://donate.worldvision.org/give/clean-and-safe-births",
    "categories": [
      "girls-women",
      "health"
    ]
  },
  {
    "id": "lifesaving-healthcare",
    "name": "Lifesaving Healthcare",
    "price": 50,
    "emoji": "🩺",
    "image": "https://wvusstatic.com/donate/uploads/2021/01/19103913/D232-0604-294-2.jpg",
    "url": "https://donate.worldvision.org/give/lifesaving-healthcare",
    "categories": [
      "health"
    ]
  },
  {
    "id": "lifesaving-treatments-for-sick-children",
    "name": "Lifesaving treatments for sick children",
    "price": 50,
    "emoji": "💊",
    "image": "https://wvusstatic.com/donate/uploads/2025/08/02131818/lifeaving-treatment.jpg",
    "url": "https://donate.worldvision.org/give/lifesaving-treatments-for-sick-children",
    "categories": [
      "health"
    ]
  },
  {
    "id": "bed-nets",
    "name": "Bed nets",
    "price": 21,
    "emoji": "🛏️",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19091021/D232-0602-33.jpg",
    "url": "https://donate.worldvision.org/give/bed-nets",
    "categories": [
      "health"
    ]
  },
  {
    "id": "child-health-nutrition",
    "name": "Child Health and Nutrition Fund",
    "price": 40,
    "emoji": "🥕",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/02124900/D115-0713-30.jpg",
    "url": "https://donate.worldvision.org/give/child-health-nutrition",
    "categories": [
      "health"
    ]
  },
  {
    "id": "bicycle-for-a-community-health-worker",
    "name": "Bicycle for a community health worker",
    "price": 25,
    "emoji": "🚲",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173042/bicycle-health-worker.jpg",
    "url": "https://donate.worldvision.org/give/bicycle-for-a-community-health-worker",
    "categories": [
      "health"
    ]
  },
  {
    "id": "equip-a-health-care-worker",
    "name": "Equip a healthcare worker",
    "price": 50,
    "emoji": "🩺",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173117/equip-a-healthcare-worker.jpg",
    "url": "https://donate.worldvision.org/give/equip-a-health-care-worker",
    "categories": [
      "health"
    ]
  },
  {
    "id": "food-for-malnourished-children",
    "name": "Food for malnourished children",
    "price": 100,
    "emoji": "🍲",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173121/food-for-malnourished-children.jpg",
    "url": "https://donate.worldvision.org/give/food-for-malnourished-children",
    "categories": [
      "health",
      "hunger-relief"
    ]
  },
  {
    "id": "ship-and-deliver-a-wheelchair",
    "name": "Wheelchair for a Child",
    "price": 200,
    "emoji": "♿",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19091537/Senegal_2025_0041.jpg",
    "url": "https://donate.worldvision.org/give/ship-and-deliver-a-wheelchair",
    "categories": [
      "health"
    ]
  },
  {
    "id": "children-with-disabilities",
    "name": "Children with disabilities fund",
    "price": 25,
    "emoji": "🤝",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/help-children-with-disabilities.png",
    "url": "https://donate.worldvision.org/give/children-with-disabilities",
    "categories": [
      "health"
    ]
  },
  {
    "id": "feed-a-family-in-the-usa",
    "name": "Feed a family in the U.S.",
    "price": 18,
    "emoji": "🍲",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/Poverty_in_America-Feed_a_Family_USA.jpg",
    "url": "https://donate.worldvision.org/give/feed-a-family-in-the-usa",
    "categories": [
      "hunger-relief",
      "poverty-in-america"
    ]
  },
  {
    "id": "food-aid-for-africa",
    "name": "Food aid for Africa",
    "price": 25,
    "emoji": "🍲",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/16192324/D345-0163-561.jpg",
    "url": "https://donate.worldvision.org/give/food-aid-for-africa",
    "categories": [
      "hunger-relief"
    ]
  },
  {
    "id": "poverty-in-america",
    "name": "Poverty in America",
    "price": 25,
    "emoji": "🇺🇸",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/17173223/poverty-in-america.jpg",
    "url": "https://donate.worldvision.org/give/poverty-in-america",
    "categories": [
      "poverty-in-america"
    ]
  },
  {
    "id": "necessities-in-the-usa",
    "name": "Necessities in the U.S.",
    "price": 25,
    "emoji": "🧺",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/19104741/D400-2211-116-1.jpg",
    "url": "https://donate.worldvision.org/give/necessities-in-the-usa",
    "categories": [
      "poverty-in-america"
    ]
  },
  {
    "id": "diapers-baby-basics-in-the-usa",
    "name": "Diapers and baby basics in the U.S.",
    "price": 45,
    "emoji": "👶",
    "image": "https://wvusstatic.com/donate/uploads/2017/08/Poverty_in_America-Diapers-1.jpg",
    "url": "https://donate.worldvision.org/give/diapers-baby-basics-in-the-usa",
    "categories": [
      "poverty-in-america"
    ]
  },
  {
    "id": "heating-american-homes",
    "name": "Heating homes in the U.S.",
    "price": 50,
    "emoji": "🔥",
    "image": "https://wvusstatic.com/donate/uploads/2017/09/Poverty_in_America-Heating_American_Homes.jpg",
    "url": "https://donate.worldvision.org/give/heating-american-homes",
    "categories": [
      "poverty-in-america"
    ]
  },
  {
    "id": "classroomkit",
    "name": "Classroom Wellbeing Kit",
    "price": 100,
    "emoji": "💧",
    "image": "https://wvusstatic.com/donate/uploads/2022/11/02125114/D400-2337-133.jpg",
    "url": "https://donate.worldvision.org/give/classroomkit",
    "categories": [
      "poverty-in-america"
    ]
  }
];
