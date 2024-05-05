
import { program } from "commander";
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log(allContacts);
      break;
    case "get":
      const getContact = await getContactById();
      console.log(getContact);
      break;
    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.log(action);
      return "unknown action:-(";
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

console.log(program.opts());

invokeAction(program.opts()).then(console.log).catch(console.error);
