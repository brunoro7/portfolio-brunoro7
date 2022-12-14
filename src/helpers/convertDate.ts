const convertDate = (date: string) => {
  const data = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(data);
};

export default convertDate;
