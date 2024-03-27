import { ConcreteObserver, ConcreteSubject } from './Observer';

const STATE = 'State';

describe('Observer ', () => {
	let subject: ConcreteSubject<string>;

	let observer1: ConcreteObserver<string>;
	let observer2: ConcreteObserver<string>;

	beforeEach(() => {
		subject = new ConcreteSubject<string>();

		observer1 = new ConcreteObserver<string>('Observer 1');
		observer2 = new ConcreteObserver<string>('Observer 2');

		jest.spyOn(observer1, 'update');
		jest.spyOn(observer2, 'update');
	});

	test('subscribes observers correctly', () => {
		subject.subscribe(observer1);
		subject.subscribe(observer2);

		subject.changeState(STATE);

		expect(observer1.update).toHaveBeenCalledWith(STATE);
		expect(observer2.update).toHaveBeenCalledWith(STATE);
	});

	test('unsubscribes observers correctly', () => {
		subject.subscribe(observer1);
		subject.subscribe(observer2);

		subject.unsubscribe(observer2);

		subject.changeState(STATE);

		expect(observer1.update).toHaveBeenCalledWith(STATE);
		expect(observer2.update).not.toHaveBeenCalledWith(STATE);
	});

	test('notifies observers correctly upon state change', () => {
		subject.subscribe(observer1);

		subject.changeState(STATE);

		expect(observer1.update).toHaveBeenCalledTimes(1);
		expect(observer1.update).toHaveBeenCalledWith(STATE);
		expect(observer1.update).toHaveReturnedWith(`Observer 1: Reacted to the event with data: ${STATE}`);
	});
});
