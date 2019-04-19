import uuidv4 from 'uuid';

const db = [
  {
    id: uuidv4(),
    brand: 'Armani Exchange',
    name: 'Armani Exchange Watch AX5555',
    price: 120,
    category: 'Ladies',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100030768/main/xlarge/AX5555.jpg',
    description: `Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Blue dial with silver-tone hands and index hour markers. Minute markers around the outer rim. The Armani Exchange AX logo appears at the 12 o'clock position. Dial Type: Analog. Chronograph - three sub-dials displaying: 60 second, 60 minute and 1/10th of a second. Quartz movement. Scratch resistant mineral crystal. Solid case back. Case diameter: 46 mm. Case thickness: 7 mm. Round case shape. Band width: 22 mm. Fold over clasp. Water resistant at 50 meters / 165 feet. Functions: chronograph, hour, minute, second. Casual watch style. Armani Exchange Chronograph Blue Dial Stainless Steel Mens Watch AX2155.`
  },
  {
    id: uuidv4(),
    brand: 'Fossil',
    name: 'Ladies Fossil Georgia Watch ES4000',
    price: 118,
    category: 'Ladies',
    imagePath:
      'https://d1rkccsb0jf1bk.cloudfront.net/products/99999391/main/xlarge/es4000-1460121928-8072.jpg',
    description: `FOSSIL GEORGIA MINI watch ES4000, 26 mm stainless steel IP gold case with mineral dial window and snapped caseback, silver dial with analog display, brown leather strap with buckle steel closure, width: 8 mm. Brand new and delivered with manufacturer warranty and genuine FOSSIL presentation box.`
  },
  {
    id: uuidv4(),
    brand: 'Guess',
    name: 'Guess Watch W1206L1',
    price: 124,
    category: 'Ladies',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100031578/main/xlarge/W1206L1.jpg',
    description:
      'A white analog watch that will add a luxe touch to any look. Complete with rose gold-tone trim, a logo detail and a leather strap. Rose gold-tone case.'
  },
  {
    id: uuidv4(),
    brand: 'Casio',
    name: 'Casio Retro Diamond Watch A158WEAD-1EF',
    price: 40,
    category: 'Mans',
    imagePath:
      'https://d1rkccsb0jf1bk.cloudfront.net/products/100030533/main/xlarge/A158WEAD-1EF.jpg',
    description: `➽Guarantee 
    ➽100% brand new and high quality. During the new store promotion period, all product prices are at cost, and it is definitely worth buying. 
    ➽The logistics time is usually 15 to 25 days. If you need urgently, please contact us to change the logistics. You may incur additional charges. If you have not received your product after 35 days, please contact us. 
    ➽If you don't love our products, please contact us and attach some pictures about product, we will exchange a new correct item to you after the confirmation.`
  },
  {
    id: uuidv4(),
    brand: 'Citizen',
    name: 'Mens Citizen Promaster Bullhead Alarm Chronograph Watch AV0078-04X',
    price: 802,
    category: 'Mans',
    imagePath:
      'https://d1rkccsb0jf1bk.cloudfront.net/products/100027025/main/xlarge/av0078-04x.jpg',
    description: `This Stainless Steel Nighthawk Chronograph features a 200 meter water resistance and tachymeter scale. Black dial with Thin Blue Line going thru the dial. Stainless steel case and bracelet 1/5 second chronograph, measures up to 60 minutes 12/24 hour time Mineral glass crystal Tachymeter scale Date window at the 3 o'clock position Screw-back case Bracelet features a safety fold-over clasp with push-button release Solar-powered, never requires a battery change 210 day power reserve when fully charged Water resistant to 200 meters (660 feet) Case width 42mm (approximately 1 5/8 inches)`
  },
  {
    id: uuidv4(),
    brand: 'Suunto',
    name:
      'Unisex Suunto Spartan Sport Bluetooth Blue HR bundle Alarm Chronograph Watch SS022652000',
    price: 414,
    category: 'Mans',
    imagePath:
      'https://d1rkccsb0jf1bk.cloudfront.net/products/100005273/main/xlarge/ss022652000_-_hr-1474029762-1137.jpg',
    description: `Suunto was born in 1936 when Finnish orienteer and engineer Tuomas Vohlonen invented the mass production method for the liquid-filled compass. Since then, Suunto has been at the forefront of design and innovation for sports watches, dive computers and sports instruments used by adventurers all over the globe. From the highest mountains to the deepest oceans, Suunto physically and mentally equips outdoor adventurers to conquer new territory.`
  }
];

export default db;
