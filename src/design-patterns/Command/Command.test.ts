import { CustomDocument, AddTextCommand, DeleteTextCommand, ReplaceTextCommand } from './Command';

describe('Command: ', () => {
	let document: CustomDocument;

	beforeEach(() => {
		document = new CustomDocument();
	});

	test('AddTextCommand should add text to the document', () => {
		const command = new AddTextCommand(document, 'Hello');

		command.execute();
		expect(document.getText()).toBe('Hello');

		command.undo();
		expect(document.getText()).toBe('');
	});

	test('DeleteTextCommand should delete the last character from the document', () => {
		document.add('Hello');
		const command = new DeleteTextCommand(document);

		command.execute();
		expect(document.getText()).toBe('Hell');

		command.undo();
		expect(document.getText()).toBe('Hello');
	});

	test('ReplaceTextCommand should replace the document text', () => {
		document.add('Hello');
		const command = new ReplaceTextCommand(document, 'Goodbye');

		command.execute();
		expect(document.getText()).toBe('Goodbye');

		command.undo();
		expect(document.getText()).toBe('Hello');
	});
});
