export default (filter, hideCancelled, events) => events.filter((eventEntry) => {
  const eventData = JSON.stringify(eventEntry.event);
  const posterData = JSON.stringify(eventEntry.poster);
  const shouldHide = hideCancelled && eventEntry.event.cancelled;
  return !shouldHide && (!filter
|| eventData.includes(filter) || posterData.includes(filter));
});
