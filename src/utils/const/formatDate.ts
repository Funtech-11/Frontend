const formatDateString = (dateStr: string) => {
  const [year, month, day, hours, minutes] = dateStr.split(/[-T:]/);
  return `${day}.${month}.${year} в ${hours}:${minutes}`;
};

const formatDateStringNoTime = (dateStr: string) => {
  const [year, month, day] = dateStr.split(/[-T:]/);
  return `${day}.${month}.${year} `;
};

const formatDateStringReg = (dateStr: string) => {
  const [year, month, day, hours, minutes] = dateStr.split(/[-T:]/);
  return `${day}.${month}.${year} до ${hours}:${minutes}`;
};

const formatDateStringTime = (dateStr: string) => {
  const [, , , hours, minutes] = dateStr.split(/[-T:]/);
  return `${hours}:${minutes}`;
};

export {
  formatDateString,
  formatDateStringNoTime,
  formatDateStringReg,
  formatDateStringTime,
};
