'use strict';

export function createYearList() {
  return [...Array(33)].map((_, idx) => {
    let str = idx < 21 ? '昭和' : '平成';
    let num = idx < 21 ? idx + 43 : idx - 20;
    return {
      key: `${idx + 1968}年 (${str}${num})`,
      val: `${idx + 1968}`
    };
  });
}

export function createMonthList() {
  return [...Array(12)].map((_, idx) => idx + 1);
}