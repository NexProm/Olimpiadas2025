package myapp.conexionbd.services;

import myapp.conexionbd.DTO.Register;
import myapp.conexionbd.entity.Usuario;
import myapp.conexionbd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registrar(Register rta){
        Usuario u = new Usuario();
        u.setNombre(rta.getNombre());
        u.setEmail(rta.getEmail());
        u.setPassword(passwordEncoder.encode(rta.getPassword()));
        return repository.save(u);
    }
}
