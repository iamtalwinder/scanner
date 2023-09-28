import { format, parseISO } from 'date-fns';

export const formatDateTime = (timestamp) => {
  try {
    const date = parseISO(timestamp);
    const formattedDateTime = format(date, 'MM/dd/yyyy hh:mm:ss a');

    return formattedDateTime;
  } catch (error) {
    console.error('Error parsing or formatting timestamp:', error);
    return 'Invalid Date';
  }
}

