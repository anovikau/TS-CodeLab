interface Subject {
	request(): void;
}

export class RealSubject implements Subject {
	public request(): void {
		console.log('RealSubject: Handling request.');
	}
}

export class CustomProxy implements Subject {
	private realSubject: RealSubject;

	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	public request(): void {
		if (this.checkAccess()) {
			this.realSubject.request();
			this.logAccess();
		}
	}

	private checkAccess(): boolean {
		// Some real check should be here

		return true;
	}

	private logAccess(): void {
		console.log('Proxy: Logging the time of request.');
	}
}