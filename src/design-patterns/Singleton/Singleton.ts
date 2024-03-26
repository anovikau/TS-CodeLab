export class Singleton {
	private static instance: Singleton;

	constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}

	public someMethod():void {}
}
