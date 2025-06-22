package myapp.conexionbd.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
    private int precioUnitario;



    public Long getId() {
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getNombre(){
        return nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public String getDescripcion(){
        return descripcion;
    }
    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }
    public int getPrecioUnitario(){
        return precioUnitario;
    }
    public void setPrecioUnitario(int precioUnitario){
        this.precioUnitario = precioUnitario;
    }
}
