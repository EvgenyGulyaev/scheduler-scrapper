const { getSchedulePerWeek } = require('scheduler-ita-pretty-message'),
  all = 'ALL',
  preps = 'HTML_PREPS',
  prepsChar = 'm',
  audsChar = 'a',
  auds = 'HTML_AUDS',
  group = 'HTML',
  length = 300,
  { CronJob } = require('cron')
;

const getPromisesArray = (arrayValues, type = group, char = '') => arrayValues.map(el => getSchedulePerWeek(
  `${char}${el}`,
  type));

const defaultCronCallback = (data) => {
  console.log('data', data);
}

const getAllSchedule = async (type = all) => {
  try {
    const values = Array.from({ length }, (v, k) => k + 1);
    if (type !== all) {
      const char = type === preps ? prepsChar : type === auds ? audsChar : '';
      const res = await Promise.all(getPromisesArray(values, type, char));
      return res.filter(el => el);
    }
    const prepsData = await Promise.all(getPromisesArray(values, preps, prepsChar));
    const audsData = await Promise.all(getPromisesArray(values, auds, audsChar));
    const groupData = await Promise.all(getPromisesArray(values));
    return [...prepsData, ...audsData, ...groupData].filter(el => el);
  }
  catch (e) {
    console.log('error', e)
    return undefined
  }
}

const getAllScheduleByCron = async (callback = defaultCronCallback, cronTime = '0 1 * * *', type = all) => {
  try {
    new CronJob(cronTime, async function () {
      const data = await getAllSchedule(type);
      callback(data);
    }, null, true, 'Indian/Antananarivo');
  }
  catch (e) {
    console.log('error', e);
  }
}

module.exports = {
  getAllSchedule,
  getAllScheduleByCron
}
