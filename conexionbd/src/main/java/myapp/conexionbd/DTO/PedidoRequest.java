package myapp.conexionbd.DTO;

import java.util.List;

public class PedidoRequest {
    private Long clientesId;
    private List<DetallePedido> productos;
    private int total;

    public Long getClientesId(){
        return clientesId;
    }
    public void setClientesId(Long clientesId){
        this.clientesId = clientesId;
    }
    public List<DetallePedido> getProductos(){
        return productos;
    }
    public void setProductos(List<DetallePedido> productos){
        this.productos = productos;
    }
    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }


}
