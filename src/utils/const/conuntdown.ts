export const countdown = (
  startingTime: number,
  setCountdown: React.Dispatch<React.SetStateAction<string>>
) => {
  const now = new Date().getTime();
  const distance = startingTime - now;

  // Calculate the remaining time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Format the time for display
  return `${days} д : ${hours} ч : ${minutes} мин`;
};
