/* tslint:disable */
import Index from '../src/index'

describe('Index Test', () => {
  test('create class, to be instance', (done) => {
    expect(new Index()).toBeInstanceOf(Index);
    done();
  });
})
