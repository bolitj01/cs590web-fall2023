import moment from 'moment'
export function convertDate(text){
    const date = moment(text);

    

const yearsAgo = moment().diff(date, 'years');
const monthsAgo = moment().diff(date, 'months');
const daysAgo = moment().diff(date, 'days');
const hoursAgo = moment().diff(date, 'hours');
const minutesAgo = moment().diff(date, 'minutes');

let result;

if (yearsAgo > 0) {
  result = yearsAgo === 1 ? '1 year ago' : `${yearsAgo} years ago`;
} else if (monthsAgo > 0) {
  result = monthsAgo === 1 ? '1 month ago' : `${monthsAgo} months ago`;
} else if (daysAgo > 0) {
  result = daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`;
} else if (hoursAgo > 0) {
  result = hoursAgo === 1 ? '1 hour ago' : `${hoursAgo} hours ago`;
} else if (minutesAgo > 0) {
  result = minutesAgo === 1 ? '1 minute ago' : `${minutesAgo} minutes ago`;
} else {
  result = 'Just now';
}

return result;

}
