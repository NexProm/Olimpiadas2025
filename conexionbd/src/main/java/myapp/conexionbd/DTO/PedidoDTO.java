package myapp.conexionbd.DTO;

import java.time.LocalDate;
import java.util.List;

public class PedidoDTO {
    private Long id;
    private String clienteNombre;
    private List<String> productos;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getClienteNombre() {
        return clienteNombre;
    }
    public void setClienteNombre(String clienteNombre) {
        this.clienteNombre = clienteNombre;
    }

    public List<String> getProductos() {
        return productos;
    }
    public void setProductos(List<String> productos) {
        this.productos = productos;
    }


}
