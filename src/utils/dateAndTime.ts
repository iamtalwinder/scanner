import { format, parseISO } from 'date-fns';

export const formatDateTime = (timestamp: any) => {
  try {
    const date: Date = parseISO(timestamp);
    const formattedDateTime = format(date, 'dd/MM/yyyy hh:mm:ss a');

    return formattedDateTime;
  } catch (error) {
    console.error('Error parsing or formatting timestamp:', error);
    return 'Invalid Date';
  }
}

