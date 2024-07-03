import { faker } from '@faker-js/faker';
import fs from 'fs';

const generateFaultyData = () => {
  const data = [];
  
  for (let i = 0; i < 1000; i++) {
    // Generate fake data
    let entry = {
      username: faker.internet.userName(),
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      address: faker.address.streetAddress(),
      birthday: faker.date.past(50, new Date('2002-01-01')).toISOString().split('T')[0],
      taxId: faker.datatype.number({ min: 100000000, max: 999999999 }).toString(),
      taxClass: faker.datatype.number({ min: 1, max: 6 }).toString(),
      pay: faker.datatype.number({ min: 30000, max: 120000 }).toString(),
      paidVacation: faker.datatype.number({ min: 0, max: 30 }).toString()
    };

    // Introduce errors
    if (Math.random() < 0.1) {
      entry.pay = faker.lorem.word(); // String in pay section
    }
    if (Math.random() < 0.1) {
      entry.surname = faker.datatype.number({ min: 1000, max: 9999 }).toString(); // Numbers in surname
    }
    if (Math.random() < 0.1) {
      entry.taxId = ''; // Missing tax id
    }
    
    data.push(entry);
  }
  
  return data;
};

const faultyData = generateFaultyData();

// Convert the data to a JSON string
const jsonString = JSON.stringify(faultyData, null, 2);

// Write the JSON string to a file
fs.writeFileSync('generatedData.json', jsonString, 'utf8');

console.log('Data has been written to generatedData.json');
