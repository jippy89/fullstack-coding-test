import java.util.Scanner;
public class Run {
  static public void main(String[] args) throws Exception {
    Scanner scanner = new Scanner(System.in);

    int car_type = scanner.nextInt();
    int mileage = scanner.nextInt();
    Car car;
    String car_name = "unknown car";
    switch (car_type) {
      case 0:
        car_name = "WagonR";
        car = new WagonR(mileage);
        break;
      case 1:
        car_name = "HondayCity";
        car = new HondaCity(mileage);
        break;
      case 2:
        car_name = "InnovaCrysta";
        car = new InnovaCrysta(mileage);
        break;
      default:
        throw new Exception(car_name);
    }

    System.out.println("A " + car_name + " " + car.getIsSedan() + ", is " + car.getSeats() + ", and has a mileage of around " + car.getMileage() + ".");
  }
}
