package myapp.conexionbd.DTO;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
public class Register {
    @NotBlank(message =  "El nombre es obligatorio")
    private String nombre;
    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El email no es válido")
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    private String password;

    public String getNombre(){
        return nombre;
    }
    public  void setNombre(String nombre){
        this.nombre = nombre;

    }
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
}
