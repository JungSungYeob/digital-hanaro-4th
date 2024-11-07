package trythis.bookstore;

public class DiscountRate {
	private static double serviceDiscountPremium = 0.2;
	private static double serviceDiscountGold = 0.15;
	private static double serviceDiscountSilver = 0.1;
	private static double productDiscountPremium = 0.1;
	private static double productDiscountGold = 0.1;
	private static double productDiscountSilver = 0.1;

	public static double getServiceDiscountRate(String type) {
		if (type == null) {
			return 0;
		}
		return switch (type) {
			case "Premium" -> serviceDiscountPremium;
			case "Gold" -> serviceDiscountGold;
			case "Silver" -> serviceDiscountSilver;
			default -> 0;
		};
	}

	public static double getProductDiscountRate(String type) {
		if (type == null) {
			return 0;
		}
		return switch (type) {
			case "Premium" -> productDiscountPremium;
			case "Gold" -> productDiscountGold;
			case "Silver" -> productDiscountSilver;
			default -> 0;
		};
	}

}
