import * as moment from 'moment';
export const dateFormatter = (dateString: number) => {
  return moment(new Date(dateString)).format('DD/MM/YYYY');
};
