export class Page<T> {

  constructor(
    public items?: T[],
    public index?: number,
    public size?: number,
    public totalElements?: number
  ) {
  }
}
