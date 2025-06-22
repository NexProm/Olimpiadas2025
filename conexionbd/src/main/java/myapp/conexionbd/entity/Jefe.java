package myapp.conexionbd.entity;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "jefes")
public class Jefe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_jefe")
    Long id_jefe;
    @Column(name = "nombre")
    String nombre;
    String email;
    String password;


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
    public String getNombre(){ return email;}
    public void setNombre(String nombre){this.nombre = nombre;}

}
