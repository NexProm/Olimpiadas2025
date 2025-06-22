package myapp.conexionbd.repository;

import myapp.conexionbd.entity.Jefe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JefeRepository extends JpaRepository<Jefe, Long> {
    Jefe findByEmail(String email);
}
