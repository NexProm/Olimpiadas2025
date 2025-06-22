package myapp.conexionbd.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "clientes")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;

    private String nombre;
    private String email;
    private String password;

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public String getNombre(){ return nombre;}
    public void setNombre(String nombre){this.nombre = nombre;}
    public Long getId_cliente() {return id_cliente;}
    public void setId_cliente(Long id_cliente) {this.id_cliente = id_cliente;}
}
