console.log("Welcome to JavaScript Address Book Problem solution");
const prompt = require('prompt-sync')();
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.validateName(firstName);
      this.validateName(lastName);
      this.validateAddress(address);
      this.validateAddress(city);
      this.validateAddress(state);
      this.validateZip(zip);
      this.validatePhoneNumber(phoneNumber);
      this.validateEmail(email);
  
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  
    validateName(name) {
      const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
      if (!nameRegex.test(name)) {
        throw new Error(`Invalid name: ${name}`);
      }
    }
  
    validateAddress(address) {
      if (address.length < 4) {
        throw new Error(`Invalid address: ${address}`);
      }
    }
  
    validateZip(zip) {
      const zipRegex = /^\d{6}$/;
      if (!zipRegex.test(zip)) {
        throw new Error(`Invalid zip code: ${zip}`);
      }
    }
  
    validatePhoneNumber(phoneNumber) {
      const phoneRegex = /^[+]\d{1,3} \d{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
        throw new Error(`Invalid phone number: ${phoneNumber}`);
      }
    }
  
    validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]{0,1}[a-zA-Z]{2,4}[.]{0,1}[a-zA-Z]{0,2}$/;
      if (!emailRegex.test(email)) {
        throw new Error(`Invalid email: ${email}`);
      }
    }
  }
  
  const addressBook = [];
  
  function addContact() {
    const firstName = prompt("Enter First Name:");
    const lastName = prompt("Enter Last Name:");
    const address = prompt("Enter Address:");
    const city = prompt("Enter City:");
    const state = prompt("Enter State:");
    const zip = prompt("Enter Zip:");
    const phoneNumber = prompt("Enter Phone Number:");
    const email = prompt("Enter Email:");
  
    try {
      const contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
      addressBook.push(contact);
      console.log("Contact added successfully.");
    } catch (error) {
      console.error("Error creating contact:", error.message);
    }
  }
  
  addContact();  