import { format, parseISO } from 'date-fns';

export const formatDate = (timestamp) => {
  try {
    const date = parseISO(timestamp);
    const formattedDate = format(date, 'dd/MM/yyyy');

    return formattedDate;

  } catch (error) {
    console.error('Error parsing or formatting timestamp:', error);
    return 'Invalid Date';
  }
}
