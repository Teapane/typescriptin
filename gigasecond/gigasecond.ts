export default class Gigasecond {
  currentDate: Date;

  constructor(date: Date) {
    this.currentDate = date;
  }

  public date(): Date {
    return new Date(this.currentDateValue() + this.gigaSecond())
  }

  private gigaSecond(): number{
    return (1000000000 * 1000)
  }

  private currentDateValue(): number {
    return this.currentDate.valueOf();
  }
}
