class Contact {
  constructor(name, phone) {
    (this.name = name), (this.phone = phone);
  }
}

class ContactBook {
  constructor(contacts) {
    this.contacts = contacts;
  }

  saveContact() {
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }

  addContact(contact) {
    this.contacts.push(contact);
    this.saveContact();
  }

  removeContact(elem) {
    this.contacts.splice(elem, 1);
    this.saveContact();
  }
}



//?* Пример --------------

myBook = new ContactBook([]);

const contact1 = new Contact("Dima", "0702010706");
myBook.addContact(contact1);

console.log(myBook);
