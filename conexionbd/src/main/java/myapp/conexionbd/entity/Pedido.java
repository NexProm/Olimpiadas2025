package myapp.conexionbd.entity;

import jakarta.persistence.*;
import myapp.conexionbd.DTO.DetallePedido;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Usuario cliente;



    @Column(name = "total")
    private int total;

    @Column(name = "estado")
    private String estado;


    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private List<PedidoDetalle> detalle = new ArrayList<>();

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public Usuario getCliente(){
        return cliente;
    }
    public void setCliente(Usuario cliente){
        this.cliente = cliente;
    }
    public List<PedidoDetalle> getDetalle(){
        return detalle;
    }
    public void setDetalle(List<PedidoDetalle> detalle){
        this.detalle = detalle;
    }

    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

}
