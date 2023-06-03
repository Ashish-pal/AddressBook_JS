console.log("Welcome to JavaScript Address Book Problem solution");
const prompt = require("prompt-sync")();
class Contact {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
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
    const emailRegex =
      /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]{0,1}[a-zA-Z]{2,4}[.]{0,1}[a-zA-Z]{0,2}$/;
    if (!emailRegex.test(email)) {
      throw new Error(`Invalid email: ${email}`);
    }
  }
}

const addressBook = [];

function addContact() {
  const firstName = prompt("Enter First Name:");
  const lastName = prompt("Enter Last Name:");

  const existingContactIndex = findContactIndexByName(firstName, lastName);
  if (existingContactIndex !== -1) {
    console.log("Contact already exists in the address book.");
    return;
  }

  const address = prompt("Enter Address:");
  const city = prompt("Enter City:");
  const state = prompt("Enter State:");
  const zip = prompt("Enter Zip:");
  const phoneNumber = prompt("Enter Phone Number:");
  const email = prompt("Enter Email:");

  try {
    const contact = new Contact(
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      email
    );
    addressBook.push(contact);
    console.log("Contact added successfully.");
  } catch (error) {
    console.error("Error creating contact:", error.message);
  }
}

function findContactIndexByName(firstName, lastName) {
  return addressBook.findIndex(
    (contact) =>
      contact.firstName === firstName && contact.lastName === lastName
  );
}

function editContact() {
  let firstName = prompt("Enter First Name of the contact to edit:");
  let lastName = prompt("Enter Last Name of the contact to edit:");

  const contactIndex = findContactIndexByName(firstName, lastName);
  if (contactIndex === -1) {
    throw new Error("Contact not found in the address book.");
  }

  firstName = prompt("Enter New first Name:");
  lastName = prompt("Enter New last Name:");
  const address = prompt("Enter New Address:");
  const city = prompt("Enter New City:");
  const state = prompt("Enter New State:");
  const zip = prompt("Enter New Zip:");
  const phoneNumber = prompt("Enter New Phone Number:");
  const email = prompt("Enter New Email:");

  try {
    const contact = new Contact(
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      email
    );

    const existingContactIndex = findContactIndexByName(firstName, lastName);
    if (existingContactIndex !== -1) {
      throw new Error("Contact already exists in the address book.");
    }
    addressBook[contactIndex] = contact;
    console.log("Contact updated successfully!");
  } catch (error) {
    console.error("Error updating contact:", error.message);
  }
}

function deleteContact() {
  const firstName = prompt("Enter First Name of the contact to delete:");
  const lastName = prompt("Enter Last Name of the contact to delete:");

  const contactIndex = findContactIndexByName(firstName, lastName);
  if (contactIndex !== -1) {
    const deletedContact = addressBook.splice(contactIndex, 1);
    console.log("Contact deleted successfully!");
    console.log("Deleted Contact:", deletedContact[0]);
  } else {
    console.log("Contact not found.");
  }
}

function countContacts() {
  const totalCount = addressBook.reduce((count) => count + 1, 0);
  console.log("Total number of contacts:", totalCount);
}

function searchByCityOrState() {
    const searchOption = prompt(
      "Enter 1 to search by City, 2 to search by State: "
    );
  
    let searchKey, searchValue;
    if (searchOption === "1") {
      searchKey = "city";
      searchValue = prompt("Enter the City name: ");
    } else if (searchOption === "2") {
      searchKey = "state";
      searchValue = prompt("Enter the State name: ");
    } else {
      console.log("Invalid search option.");
      return;
    }
  
    const filteredContacts = addressBook.filter(
      (contact) => contact[searchKey] === searchValue
    );
  
    console.log("Search Results:");
    if (filteredContacts.length === 0) {
      console.log("No contacts found.");
    } else {
      filteredContacts.forEach((contact) => {
        console.log(contact);
      });
    }
  }

  function countContactsByCity() {
    const countByCity = addressBook.reduce((countMap, contact) => {
      const { city } = contact;
      if (countMap.hasOwnProperty(city)) {
        countMap[city] += 1;
      } else {
        countMap[city] = 1;
      }
      return countMap;
    }, {});
  
    console.log("Count by City:");
    for (const city in countByCity) {
      console.log(`${city}: ${countByCity[city]}`);
    }
  }
  
  function countContactsByState() {
    const countByState = addressBook.reduce((countMap, contact) => {
      const { state } = contact;
      if (countMap.hasOwnProperty(state)) {
        countMap[state] += 1;
      } else {
        countMap[state] = 1;
      }
      return countMap;
    }, {});
  
    console.log("Count by State:");
    for (const state in countByState) {
      console.log(`${state}: ${countByState[state]}`);
    }
  }

  function sortAddressBookBy(field) {
    let sortedAddressBook = [];
  
    switch (field) {
      case "name":
        sortedAddressBook = addressBook.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
  
      case "city":
        sortedAddressBook = addressBook.sort((a, b) => {
          const cityA = a.city.toUpperCase();
          const cityB = b.city.toUpperCase();
          if (cityA < cityB) {
            return -1;
          }
          if (cityA > cityB) {
            return 1;
          }
          return 0;
        });
        break;
  
      case "state":
        sortedAddressBook = addressBook.sort((a, b) => {
          const stateA = a.state.toUpperCase();
          const stateB = b.state.toUpperCase();
          if (stateA < stateB) {
            return -1;
          }
          if (stateA > stateB) {
            return 1;
          }
          return 0;
        });
        break;
  
      case "zip":
        sortedAddressBook = addressBook.sort((a, b) => a.zip - b.zip);
        break;
  
      default:
        console.log("Invalid field for sorting.");
        return;
    }
  
    console.log(`Address Book Sorted by ${field.charAt(0).toUpperCase() + field.slice(1)}:`);
    sortedAddressBook.forEach((contact) => {
      console.log(
        `${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phoneNumber}, ${contact.email}`
      );
    });
  }

addContact();
countContacts();
editContact();
deleteContact();
searchByCityOrState();
countContactsByCity();
countContactsByState();
sortAddressBookBy("name");
sortAddressBookBy("city");
sortAddressBookBy("state");
sortAddressBookBy("zip");