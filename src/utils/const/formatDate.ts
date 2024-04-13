const formatDateString = (dateStr: string) => {
  const [year, month, day, hours, minutes] = dateStr.split(/[-T:]/);
  return `${day}/${month}/${year} в ${hours}:${minutes}`;
};

const formatDateStringNoTime = (dateStr: string) => {
  const [year, month, day] = dateStr.split(/[-T:]/);
  return `${day}/${month}/${year} `;
};

export { formatDateString, formatDateStringNoTime };
