import { str } from '../src/';

describe('📌 String Check', () => {
	it('Matching', () => str === 'Hello World');
	it('Not Matching', () => str !== 'Bye World');
});
