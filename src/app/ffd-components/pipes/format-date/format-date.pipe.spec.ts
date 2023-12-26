import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;

  beforeEach(() => {
    pipe = new FormatDatePipe();
  });

  it('should transform the date correctly', () => {
    const input = '2023-07-18T17:22:53.674845Z';
    const output = pipe.transform(input);
    expect(output).toBe('18.07.2023 17:22');
  });

  it('should handle different input date formats', () => {
    const input = '2022-01-01T12:30:00.000Z';
    const output = pipe.transform(input);
    expect(output).toBe('01.01.2022 12:30');
  });

  it('should pad single-digit time features with leading zeros', () => {
    const input = '2023-07-18T05:07:00.000Z';
    const output = pipe.transform(input);
    expect(output).toBe('18.07.2023 05:07');
  });
});
