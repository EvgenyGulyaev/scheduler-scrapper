const { getSchedulePerWeek } = require('scheduler-ita-pretty-message'),
  all = 'ALL',
  preps = 'HTML_PREPS',
  prepsChar = 'm',
  audsChar = 'a',
  auds = 'HTML_AUDS',
  group = 'HTML',
  length = 300
;

const getPromisesArray = (arrayValues, type = group, char = '') => arrayValues.map(el => getSchedulePerWeek(
  `${char}${el}`,
  type));

const getAllSchedule = async (type = all) => {
  try {
    const values = Array.from({ length }, (v, k) => k + 1);
    if (type !== all) {
      const char = type === preps ? prepsChar : type === auds ? audsChar : '';
      const res = await Promise.all(getPromisesArray(values, type, char));
      return res
    }
    const prepsData = await Promise.all(getPromisesArray(values, preps, prepsChar));
    const audsData = await Promise.all(getPromisesArray(values, auds, audsChar));
    const groupData = await Promise.all(getPromisesArray(values));
    return [...prepsData, ...audsData, ...groupData];
  }
  catch (e) {
    console.log('error', e)
    return undefined
  }
}

const getAllScheduleByCron = async (crontime, callback, type = all) => {

}

module.exports = {
  getAllSchedule
}

