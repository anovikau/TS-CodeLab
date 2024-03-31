interface Command {
	execute(): void;
	undo(): void;
}

export class CustomDocument {
	private text: string = '';

	public add(text: string) {
		this.text += text;
	}

	delete(length: number): string {
		const deletedText = this.text.slice(-length);

		this.text = this.text.slice(0, -length);

		return deletedText;
	}

	public setText(text: string): void {
		this.text = text;
	}

	public getText(): string {
		return this.text;
	}
}

export class AddTextCommand implements Command {
	private document: CustomDocument;
	private text: string;

	constructor(document: CustomDocument, text: string) {
		this.document = document;
		this.text = text;
	}

	public execute(): void {
		this.document.add(this.text);
	}

	public undo(): void {
		this.document.delete(this.text.length);
	}
}

export class DeleteTextCommand implements Command {
	private document: CustomDocument;
	private deletedText: string;

	constructor(document: CustomDocument) {
		this.document = document;
	}

	public execute(): void {
		this.deletedText = this.document.delete(1);
	}

	public undo(): void {
		this.document.add(this.deletedText);
	}
}

export class ReplaceTextCommand implements Command {
	private document: CustomDocument;
	private newText: string;
	private oldText: string;

	constructor(document: CustomDocument, newText: string) {
		this.document = document;
		this.newText = newText;
	}

	public execute(): void {
		this.oldText = this.document.getText();
		this.document.setText(this.newText);
	}

	public undo(): void {
		this.document.setText(this.oldText);
	}
}
