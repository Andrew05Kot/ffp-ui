export class DateTimeUtil {
    public static convertToISOString(date: any): string {
        const standardizedDate = new Date(date);
        return new Date(Date.UTC(
            standardizedDate.getFullYear(),
            standardizedDate.getMonth(),
            standardizedDate.getDate(),
            standardizedDate.getHours(),
            standardizedDate.getMinutes(),
            standardizedDate.getSeconds()))
            .toISOString();
    }
}
