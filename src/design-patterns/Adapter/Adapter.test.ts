import { SmsAdapter, EmailService, SmsService } from './Adapter';

const EMAIL = 'anton.novikau@gmail.com';
const MESSAGE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const PHONE_NUMBER = '+48111222333';
const CONTENT = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

describe('EmailService', (): void => {
	test('should return a valid string after calling "send" method', () => {
		const emailService = new EmailService();

		const value = emailService.send(EMAIL, MESSAGE);

		expect(value).toBe(`Send to ${EMAIL} with text: ${MESSAGE}`);
	});
});

describe('SmsService', (): void => {
	test('should return a valid string after calling "send" method', () => {
		const smsService = new SmsService();

		const value = smsService.send(PHONE_NUMBER, CONTENT);

		expect(value).toBe(`Send to phone number: ${PHONE_NUMBER}, with content: ${CONTENT}`);
	});
});

describe('SmsAdapter', (): void => {
	let smsService: SmsService;
	let smsAdapter: SmsAdapter;

	beforeEach(() => {
		smsService = new SmsService();
		smsAdapter = new SmsAdapter(smsService);
	});

	test('should call "send" method from SmsService', () => {
		jest.spyOn(smsService, 'send');

		smsAdapter.send(PHONE_NUMBER, CONTENT);

		expect(smsService.send).toHaveBeenCalledTimes(1);
	});

	test('should return a correct string after calling "send" method', () => {
		const value = smsAdapter.send(PHONE_NUMBER, CONTENT);

		expect(value).toBe(`Send to phone number: ${PHONE_NUMBER}, with content: ${CONTENT}`);
	});
});
