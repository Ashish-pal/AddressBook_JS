console.log("Welcome to JavaScript Address Book Problem solution");
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
  
  try {
    const contact1 = new Contact(
      "Ashish",
      "Pal",
      "123 Main St",
      "Cityville",
      "Stateville",
      "123456",
      "+91 1234567890",
      "ashish.abc@gmail.com"
    );
  
    console.log("First Name:", contact1.firstName);
    console.log("Last Name:", contact1.lastName);
    console.log("Address:", contact1.address);
    console.log("City:", contact1.city);
    console.log("State:", contact1.state);
    console.log("Zip:", contact1.zip);
    console.log("Phone Number:", contact1.phoneNumber);
    console.log("Email:", contact1.email);
  } catch (error) {
    console.error("Error creating contact:", error.message);
  }  