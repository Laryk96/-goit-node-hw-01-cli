const { argv } = require('./helpers/command')
const {
	addContact,
	removeContact,
	getContactById,
	listContacts,
} = require('./contacts')

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case 'list':
			const contacts = await listContacts()
			console.log(contacts)

			break

		case 'get':
			const contact = await getContactById(id)
			console.log(contact)

			break

		case 'add':
			const newContact = await addContact({ name, email, phone })
			console.log(newContact)
			break

		case 'remove':
			const result = await removeContact(id)
			console.log(result)
			break

		default:
			console.warn('\x1B[31m Unknown action type!')
	}
}

// invokeAction({ action: 'list' })
// invokeAction({ action: 'get', id: '1DEXoP8AuCGYc1YgoQ6hw' })
// invokeAction({ action: 'remove', id: 'C9sjBfCo4UJCWjzBnOtxl' })
// invokeAction({
// 	action: 'add',
// 	name: 'Mango',
// 	phone: '093-050-50-05',
// 	email: 'mango@gmail.com',
// })

invokeAction(argv)
