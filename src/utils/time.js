import { format } from 'date-fns';

export const formatCurrentTime = (timestamp) => {
  try {
    const currentTime = new Date(timestamp);
    const formattedTime = format(currentTime, 'HH:mm:ss');

    return formattedTime;

  } catch (error) {
    console.error('Error formatting current time:', error);
    return 'Invalid Time';
  }
};
