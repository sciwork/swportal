import dayjs, { Dayjs } from "dayjs";

export class DayUtils {
  static now(): Dayjs {
    return dayjs();
  }

  static from(dateString: string | Date): Dayjs {
    return dayjs(dateString);
  }

  static toBlogFormat(date: Dayjs): string {
    return date.format("ddd DD MMM YYYY");
  }

  static getMonthAbbr(date: Dayjs): string {
    return date.format("MMM");
  }

  static getTwoDigitDay(date: Dayjs): string {
    return date.format("DD");
  }
}
