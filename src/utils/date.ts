import { format, parseISO } from 'date-fns';

export const formatDate = (timestamp: any) => {
  try {
    const date: any = new Date(timestamp);
    if (isNaN(date)) {
      return 'Invalid Date';
    }
    // const date = parseISO(timestamp);
    const formattedDate = format(date, 'dd/MM/yyyy');

    return formattedDate;

  } catch (error) {
    console.error('Error parsing or formatting timestamp:', error);
    return 'Invalid Date';
  }
}

