package myapp.conexionbd.services;

import myapp.conexionbd.entity.Jefe;

import java.util.List;

public interface IJefeService {
    Jefe guardarJefe(Jefe jefes);
    void eliminarJefe(long id);
    List<Jefe> traerJefes();
    Jefe buscarPorEmailYPassword(String email, String password);
}
