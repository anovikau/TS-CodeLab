interface INotification {
	send(email: string, message: string): string;
}

export class EmailService implements INotification {
	send(email: string, message: string): string {
		return `Send to ${email} with text: ${message}`;
	}
}

export class SmsService {
	send(phoneNumber: string, content: string): string {
		return `Send to phone number: ${phoneNumber}, with content: ${content}`;
	}
}

export class SmsAdapter implements INotification {
	private smsService: SmsService;

	constructor(smsService: SmsService) {
		this.smsService = smsService;
	}

	send(email: string, message: string): string {
		return this.smsService.send(email, message);
	}
}
