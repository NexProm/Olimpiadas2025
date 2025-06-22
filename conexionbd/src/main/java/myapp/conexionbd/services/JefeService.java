package myapp.conexionbd.services;

import lombok.AllArgsConstructor;
import myapp.conexionbd.entity.Jefe;
import myapp.conexionbd.repository.JefeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JefeService implements IJefeService{
    private final JefeRepository jefeRepository;

    public JefeService(JefeRepository jefeRepository) {
        this.jefeRepository = jefeRepository;
    }


    @Override
    public Jefe guardarJefe(Jefe jefes) {
        return jefeRepository.save(jefes);
    }

    @Override
    public void eliminarJefe(long id) {
        jefeRepository.deleteById(id);
    }

    @Override
    public List<Jefe> traerJefes() {
        return jefeRepository.findAll();
    }

    @Override
    public Jefe buscarPorEmailYPassword(String email, String password) {
        Jefe jefe = jefeRepository.findByEmail(email);

        // Verifica que el jefe exista, que tenga contraseña y que coincida
        if (jefe != null && jefe.getPassword() != null && jefe.getPassword().equals(password)) {
            return jefe;
        }
        return null; // Si no coincide, retorna null (el controlador manejará el 401)
    }
}
