interface Observer<T> {
	update: (data: T) => void;
}

interface Subject<T> {
	subscribe: (observer: Observer<T>) => void;
	unsubscribe: (observer: Observer<T>) => void;
	notifyObservers: () => void;
}

export class ConcreteSubject<T> implements Subject<T> {
	private observers: Observer<T>[] = [];
	private state: T;

	public subscribe(observer: Observer<T>): void {
		const exist = this.observers.includes(observer);

		if (!exist) {
			this.observers.push(observer);
		}
	}

	public unsubscribe(observer: Observer<T>): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex !== -1) {
			this.observers.splice(observerIndex, 1);
		}
	}

	public notifyObservers(): void {
		for (const observer of this.observers) {
			observer.update(this.state);
		}
	}

	public changeState(state: T): void {
		this.state = state;
		this.notifyObservers();
	}
}

export class ConcreteObserver<T> implements Observer<T> {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	public update(data: T): string {
		return `${this.name}: Reacted to the event with data: ${data}`;
	}
}
