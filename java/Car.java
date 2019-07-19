public abstract class Car {
  private boolean is_sedan;
  private int seat_count;
  protected int mileage;

  public Car(boolean is_sedan, int seat_count) {
    this.is_sedan = is_sedan;
    this.seat_count = seat_count;
  }

  public String getIsSedan() {
    if (is_sedan) {
      return "is Sedan";
    }
    return "is not Sedan";
  }

  public String getSeats() {
    return seat_count + "-seater";
  }

  abstract String getMileage();
}
