package productInventory;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ProductDAO productDAO = new ProductDAO();

        while (true) {
            System.out.println("Product Inventory Management System");
            System.out.println("1. Add New Product");
            System.out.println("2. Update Product");
            System.out.println("3. Generate Reports");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    System.out.print("Enter product name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter product price: ");
                    double price = scanner.nextDouble();
                    System.out.print("Enter product quantity: ");
                    int quantity = scanner.nextInt();
                    scanner.nextLine(); // Consume the newline character

                    Product newProduct = new Product();
                    newProduct.setName(name);
                    newProduct.setPrice(price);
                    newProduct.setQuantity(quantity);

                    productDAO.addProduct(newProduct);
                    System.out.println("Product added successfully!");
                    break;

                case 2:
                    System.out.print("Enter the product ID to update: ");
                    int productIdToUpdate = scanner.nextInt();
                    scanner.nextLine(); // Consume the newline character

                    Product productToUpdate = productDAO.getAllProducts().stream()
                            .filter(product -> product.getId() == productIdToUpdate)
                            .findFirst()
                            .orElse(null);

                    if (productToUpdate == null) {
                        System.out.println("Product not found!");
                    } else {
                        System.out.print("Enter new product name: ");
                        String updatedName = scanner.nextLine();
                        System.out.print("Enter new product price: ");
                        double updatedPrice = scanner.nextDouble();
                        System.out.print("Enter new product quantity: ");
                        int updatedQuantity = scanner.nextInt();
                        scanner.nextLine(); // Consume the newline character

                        productToUpdate.setName(updatedName);
                        productToUpdate.setPrice(updatedPrice);
                        productToUpdate.setQuantity(updatedQuantity);

                        productDAO.updateProduct(productToUpdate);
                        System.out.println("Product updated successfully!");
                    }
                    break;

                case 3:
                    System.out.println("Product Inventory Report:");
                    List<Product> products = productDAO.getAllProducts();
                    for (Product product : products) {
                        System.out.println("ID: " + product.getId() +
                                ", Name: " + product.getName() +
                                ", Price: " + product.getPrice() +
                                ", Quantity: " + product.getQuantity());
                    }
                    break;

                case 4:
                    System.out.println("Exiting the application.");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }

            System.out.println(); // Add a line break for better readability
        }
    }
}
