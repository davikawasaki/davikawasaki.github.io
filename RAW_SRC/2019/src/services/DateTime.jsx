import moment from 'moment'
import 'moment/locale/pt.js';

const convertUnix = (timestamp, format, defaultMsg) => timestamp !== null && timestamp !== undefined ? new moment(parseInt(timestamp * 1000)).format(format) : defaultMsg

export default {
    convertUnix
}