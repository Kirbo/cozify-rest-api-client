/**
 * Generic constants are defined here.
 */

const MILLISECOND = 1;
const QUARTER_SECOND = 250 * MILLISECOND;
const HALF_SECOND = 2 * QUARTER_SECOND;
const SECOND = 2 * HALF_SECOND;
const QUARTER_MINUTE = 15 * SECOND;
const HALF_MINUTE = 2 * QUARTER_MINUTE;
const MINUTE = 2 * HALF_MINUTE;
const QUARTER_HOUR = 15 * MINUTE;
const HALF_HOUR = 2 * QUARTER_HOUR;
const HOUR = 2 * HALF_HOUR;
const QUARTER_DAY = 6 * HOUR;
const HALF_DAY = 2 * QUARTER_DAY;
const DAY = 2 * HALF_DAY;
const WEEK = 7 * DAY;
const MONTH = 4 * WEEK;
const YEAR = 12 * MONTH;

const TIMES = {
  MILLISECOND,
  QUARTER_SECOND,
  HALF_SECOND,
  SECOND,
  QUARTER_MINUTE,
  HALF_MINUTE,
  MINUTE,
  QUARTER_HOUR,
  HALF_HOUR,
  HOUR,
  QUARTER_DAY,
  HALF_DAY,
  DAY,
  WEEK,
  MONTH,
  YEAR,
};

export default {
  TIMES,
};
