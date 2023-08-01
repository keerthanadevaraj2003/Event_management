package productInventory;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

// Interface defining the product data access operations
interface IProductDAO {
    void addProduct(Product product);
    void updateProduct(Product product);
    List<Product> getAllProducts();
}

// Abstract base class implementing the IProductDAO interface
abstract class AbstractProductDAO implements IProductDAO {
    private final String url = "jdbc:mysql://localhost:3306/product_inventory";
    private final String user = "root";
    private final String password = "@Keerthu1234";

    // Method to establish a database connection
    protected Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    // Abstract method to execute database-specific operations
    protected abstract void executeDatabaseOperation(Connection connection, Product product) throws SQLException;
    
    // Common method to handle SQLException
    protected void handleSQLException(SQLException e) {
        e.printStackTrace();
    }

    // Add a new product to the database
    @Override
    public void addProduct(Product product) {
        try (Connection conn = getConnection()) {
            executeDatabaseOperation(conn, product);
        } catch (SQLException e) {
            handleSQLException(e);
        }
    }

    // Update an existing product in the database
    @Override
    public void updateProduct(Product product) {
        try (Connection conn = getConnection()) {
            executeDatabaseOperation(conn, product);
        } catch (SQLException e) {
            handleSQLException(e);
        }
    }

    // Get a list of all products from the database
    @Override
    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();
        try (Connection conn = getConnection()) {
            String query = "SELECT * FROM products";
            PreparedStatement statement = conn.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Product product = new Product();
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setPrice(resultSet.getDouble("price"));
                product.setQuantity(resultSet.getInt("quantity"));
                products.add(product);
            }
        } catch (SQLException e) {
            handleSQLException(e);
        }
        return products;
    }
}

// ProductDAO class extends the AbstractProductDAO
public class ProductDAO extends AbstractProductDAO {
    // Execute database-specific operations
    @Override
    protected void executeDatabaseOperation(Connection connection, Product product) throws SQLException {
        if (product.getId() == 0) {
            // Add a new product to the database
            String query = "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, product.getName());
            statement.setDouble(2, product.getPrice());
            statement.setInt(3, product.getQuantity());
            statement.executeUpdate();
        } else {
            // Update an existing product in the database
            String query = "UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, product.getName());
            statement.setDouble(2, product.getPrice());
            statement.setInt(3, product.getQuantity());
            statement.setInt(4, product.getId());
            statement.executeUpdate();
        }
    }
}
