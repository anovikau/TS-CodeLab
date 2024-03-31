import { CustomProxy, RealSubject } from './Proxy';

describe('Custom Proxy', () => {
	let realSubject: RealSubject;
	let proxy: CustomProxy;

	beforeEach(() => {
		realSubject = new RealSubject();
		proxy = new CustomProxy(realSubject);

		console.log = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should call realSubject.request() and log the access when access is granted', () => {
		proxy['checkAccess'] = jest.fn().mockReturnValue(true);
		proxy['logAccess'] = jest.fn();

		proxy.request();

		expect(proxy['checkAccess']).toHaveBeenCalled();
		expect(proxy['logAccess']).toHaveBeenCalled();
		expect(console.log).toHaveBeenCalledWith('RealSubject: Handling request.');
	});

	test('should not call realSubject.request() nor log the access when access is denied', () => {
		proxy['checkAccess'] = jest.fn().mockReturnValue(false);
		proxy['logAccess'] = jest.fn();

		proxy.request();

		expect(proxy['checkAccess']).toHaveBeenCalled();
		expect(proxy['logAccess']).not.toHaveBeenCalled();
		expect(console.log).not.toHaveBeenCalledWith('RealSubject: Handling request.');
	});
});
