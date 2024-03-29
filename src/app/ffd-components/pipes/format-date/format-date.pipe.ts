import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, returnDate: boolean = true, returnTime: boolean = true): string {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    if (returnDate && !returnTime) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
    }

    if (!returnDate && returnTime) {
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return `${formattedDate}, ${formattedTime}`;
  }
}
