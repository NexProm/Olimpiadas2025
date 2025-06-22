package myapp.conexionbd.controller;


import lombok.extern.java.Log;
import myapp.conexionbd.DTO.Login;
import myapp.conexionbd.entity.Jefe;
import myapp.conexionbd.entity.Usuario;
import myapp.conexionbd.services.IJefeService;
import myapp.conexionbd.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private IJefeService jefeService;

    @PostMapping
    public ResponseEntity<?> iniciarSesion(@RequestBody Login login) {

        if (login.getEmail() == null || login.getPassword() == null){
            return ResponseEntity.badRequest().body(Map.of("mensaje", "Email y contraseña incorrectas"));
        }
        Optional<Usuario> usuarioopt = loginService.login(login.getEmail(), login.getPassword());
        if(usuarioopt.isPresent()) {
            Usuario usuario = usuarioopt.get();
            return ResponseEntity.ok(Map.of(
                    "mensaje", "Inicio de sesion exitoso",
                    "rol", "cliente",
                    "nombre", usuario.getNombre(),
                    "email", usuario.getEmail(),
                    "id", usuario.getId_cliente()
            ));
        }
        Jefe jefe = jefeService.buscarPorEmailYPassword(login.getEmail(),login.getPassword());
        if (jefe != null){
            return ResponseEntity.ok(Map.of(
               "mensaje", "Inicio de sesion exitoso",
               "rol", "jefe",
               "nombre", jefe.getNombre()

            ));

        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("Mensaje","Credenciales incorrectas"));
    }

}
