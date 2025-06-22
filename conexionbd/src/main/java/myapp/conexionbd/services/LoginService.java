package myapp.conexionbd.services;

import myapp.conexionbd.entity.Usuario;
import myapp.conexionbd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder endercor;
    public Usuario registrar(String nombre, String password){
        Usuario u = new Usuario();
        u.setNombre(nombre);
        u.setPassword(endercor.encode(password));
        return repository.save(u);
    }
    public Optional<Usuario> login (String email, String password){
        Optional<Usuario> usuariort = repository.findByEmail(email);
        if (usuariort.isPresent()) {
            Usuario usuario = usuariort.get();
            if(endercor.matches(password, usuario.getPassword())){
                return Optional.of(usuario);
            }

        }
        return Optional.empty();
    }
}
