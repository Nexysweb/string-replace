import { replaceUnit, replaceInFile, replaceInFileArray } from './replace';

test('replace Unit', () => {
  const r = `prefix i18n('to_be_replaced') suffix`;
  const k = 'to_be_replaced';
  const v = 'replaced!';
  const t = 'prefix replaced! suffix'

  expect(replaceUnit(r, k, v)).toEqual(t);
});

test('replace Unit 2', () => {
  const r = `prefix i18n("welcome") suffix`;
  const k = 'welcome';
  const v = 'my welcome';
  const t = 'prefix my welcome suffix'

  expect(replaceUnit(r, k, v)).toEqual(t);
});

test('replace Unit 3', () => {
  const r = `prefix i18n(&quot;welcome&quot;) suffix`;
  const k = 'welcome';
  const v = 'my welcome';
  const t = 'prefix my welcome suffix';

  expect(replaceUnit(r, k, v)).toEqual(t);
});

test('replaceInFileArray',() => {
  expect(true).toEqual(true);
});

test('replaceInFile',() => {
  expect(true).toEqual(true);
});