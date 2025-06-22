package myapp.conexionbd.entity;

import jakarta.persistence.*;
import myapp.conexionbd.DTO.DetallePedido;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "detalle_pedido")
public class PedidoDetalle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productoId;
    private int cantidad;
    private int precioUnitario;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public Long getProductoId(){
        return productoId;
    }
    public void setProductoId(Long productoId){
        this.productoId = productoId;
    }
    public int getCantidad(){
        return cantidad;
    }
    public void setCantidad(int cantidad){
        this.cantidad = cantidad;
    }
    public int getPrecioUnitario(){
        return precioUnitario;
    }
    public void setPrecioUnitario(int precioUnitario){
        this.precioUnitario = precioUnitario;
    }
    public Pedido getPedido(){
        return pedido;
    }
    public void setPedido(Pedido pedido){
        this.pedido = pedido;
    }


}
