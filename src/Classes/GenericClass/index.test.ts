import GenericClass from '.';

export { default as GenericClass } from './index';

const GenericClassTest = new GenericClass({});

describe('GenericClass', () => {
  test('example test', () => {
    expect(GenericClassTest.configExists()).toBeTruthy();
  });
});
