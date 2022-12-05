import {opacityColor} from 'utils/post';

test('color to rgba with opacity ', () => {
  expect(opacityColor('#000000', 0.6)).toBe('rgba(0, 0, 0, 0.6)');
});
