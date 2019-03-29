import uuidv4 from 'uuid';

const db = [
  {
    id: uuidv4(),
    brand: 'Armani Exchange',
    name: 'Armani Exchange Watch AX5555',
    price: 120,
    category: 'Ladies',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100030768/main/xlarge/AX5555.jpg'
  },
  {
    id: uuidv4(),
    brand: 'Fossil',
    name: 'Ladies Fossil Georgia Watch ES4000',
    price: 118,
    category: 'Ladies',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/99999391/main/xlarge/es4000-1460121928-8072.jpg'
  },
  {
    id: uuidv4(),
    brand: 'Guess',
    name: 'Guess Watch W1206L1',
    price: 124,
    category: 'Ladies',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100031578/main/xlarge/W1206L1.jpg'
  },
  {
    id: uuidv4(),
    brand: 'Casio',
    name: 'Casio Retro Diamond Watch A158WEAD-1EF',
    price: 40,
    category: 'Mans',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100030533/main/xlarge/A158WEAD-1EF.jpg'
  },
  {
    id: uuidv4(),
    brand: 'Citizen',
    name: 'Mens Citizen Promaster Bullhead Alarm Chronograph Watch AV0078-04X',
    price: 802,
    category: 'Mans',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100027025/main/xlarge/av0078-04x.jpg'
  },
  {
    id: uuidv4(),
    brand: 'Suunto',
    name: 'Unisex Suunto Spartan Sport Bluetooth Blue HR bundle Alarm Chronograph Watch SS022652000',
    price: 414,
    category: 'Mans',
    imagePath: 'https://d1rkccsb0jf1bk.cloudfront.net/products/100005273/main/xlarge/ss022652000_-_hr-1474029762-1137.jpg'
  },
]

export default db;
