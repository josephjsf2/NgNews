import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publishAt'
})
export class PublishAtPipe implements PipeTransform {

  static ONE_MINUTE = 60 * 1000;
  static ONE_HOUR = 60 * PublishAtPipe.ONE_MINUTE;
  static ONE_DAY = 24 * PublishAtPipe.ONE_HOUR;
  static ONE_MONTH = 30 * PublishAtPipe.ONE_DAY;
  static ONE_YEAR = 12 * PublishAtPipe.ONE_MONTH;

  transform(value: string | undefined | null, ...args: unknown[]): unknown {

    if (!value) {
      return '';
    }
    const publishTime = new Date(value).getTime();
    const now = new Date().getTime();

    const diff = now - publishTime;

    if (diff < PublishAtPipe.ONE_MINUTE) {
      return `${Math.floor(diff / 1000)} seconds ago`;
    } else if (diff < PublishAtPipe.ONE_HOUR) {
      return `${Math.floor(diff / PublishAtPipe.ONE_MINUTE)}minutes ago`;
    } else if (diff < PublishAtPipe.ONE_DAY) {
      return `${Math.floor(diff / PublishAtPipe.ONE_HOUR)} hours ago`;
    } else if (diff < PublishAtPipe.ONE_MONTH) {
      return `${Math.floor(diff / PublishAtPipe.ONE_DAY)} days ago`;
    } else if (diff < PublishAtPipe.ONE_YEAR) {
      return `${Math.floor(diff / PublishAtPipe.ONE_MONTH)} months ago`;
    }
    return `${Math.floor(diff / PublishAtPipe.ONE_YEAR)} years ago`;

  }

}
