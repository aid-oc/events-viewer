import filterEvents from '../filterEvents';

const generateEvent = (email, cancelled = false) => ({
  event: {
    description: 'awesomeEvent',
    cancelled,
  },
  poster: {
    email,
  },
});

const exampleEventList = [generateEvent('person1@feasttest.foo', true), generateEvent('person2@feasttest.foo')];

describe('filterEvents', () => {
  it('Should return the original event list if no filters are set', () => {
    const filteredEventList = filterEvents(null, false, exampleEventList);
    expect(filteredEventList.length).toBe(exampleEventList.length);
  });

  it('Should filter out any cancelled events, if a cancellation filter is set', () => {
    const filteredEventList = filterEvents(null, true, exampleEventList);
    expect(filteredEventList.length).toBe(1);
    expect(filteredEventList.filter(
      (event) => !event.cancelled,
    ).length).toBe(filteredEventList.length);
  });

  it('Should filter out any events which do not contain the search term, if one is set', () => {
    const filteredEventList = filterEvents('person2', false, exampleEventList);
    expect(filteredEventList.length).toBe(1);
    expect(filteredEventList[0]).toMatchObject(exampleEventList[1]);
  });

  it('Should filter both by search term and cancellation if both are set', () => {
    const filteredEventList = filterEvents('person1', true, exampleEventList);
    expect(filteredEventList.length).toBe(0);
  });
});
