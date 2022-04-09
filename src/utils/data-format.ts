import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DAE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtc(utcString: string, format: string = DAE_TIME_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
