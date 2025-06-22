package myapp.conexionbd.controller;

import myapp.conexionbd.DTO.Register;
import myapp.conexionbd.entity.Usuario;
import myapp.conexionbd.services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/registrar")
public class RegisterUsu {
    @Autowired
    private RegisterService registerService;

    @PostMapping
    public ResponseEntity<String> registrar(@RequestBody Register rta, BindingResult result){
        if(result.hasErrors()){
            return ResponseEntity.badRequest().body(result.getFieldError().getDefaultMessage());
        }
        Usuario nuevo = registerService.registrar(rta);
        return ResponseEntity.ok("Usuario registrado");
    }
}
