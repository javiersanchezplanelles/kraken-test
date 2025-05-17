export const localiseDate = (date: string) => {
  const newDate = new Date(date.replace(/ /g, 'T'));
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions;
  return newDate.toLocaleDateString('es', options);
};
