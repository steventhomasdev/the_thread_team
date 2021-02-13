/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import moment from 'moment';

class Utility {
  parseQueryString(path: string) {
    const parsedQueryString: any = {};

    const queryString = path?.split('?')[1];
    const queryStringList = queryString?.split('&');

        queryStringList?.forEach((item) => {
          const key = item.split('=')[0];
          const value = item.split('=')[1];
          parsedQueryString[decodeURIComponent(key)] = this.decodeValue(value);
        });

        return parsedQueryString;
  }

  decodeValue(value : any) {
    const decodedValue = decodeURIComponent(value || '');
    try {
      return JSON.parse(decodedValue);
    } catch (e) {
      return decodedValue;
    }
  }

  parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

    return JSON.parse(jsonPayload);
  }

  range(start: number, end: number) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledFutureDate(current: any) {
    return current && current > moment();
  }

  disabledFutureDateTime = () => {
    const hour = moment().hour();
    const minute = moment().minute();
    const seconds = moment().second();
    return {
      disabledHours: () => {
        if (hour < 23) {
          let start = hour;
          if (minute !== 0) {
            start += 1;
          }
          return this.range(start, 24);
        }
        return [];
      },
      disabledMinutes: () => {
        if (hour < 59) {
          if (moment().hour() === hour) {
            return this.range(minute + 1, 60);
          }
        }
        return [];
      },

      disabledSeconds: () => {
        if (moment().second() === seconds) {
          return this.range(seconds + 1, 60);
        }
        return [];
      },
    };
  }

  trimSpacesInValues(value: string) {
    if (value !== undefined || value !== null) {
      return value.trimLeft();
    }
    return '';
  }

  roundOff(num: number, places: number) {
    const x = 10 ** places;
    return Math.round(num * x) / x;
  }
}

export default new Utility();
