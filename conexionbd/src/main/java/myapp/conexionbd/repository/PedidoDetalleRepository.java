package myapp.conexionbd.repository;

import myapp.conexionbd.entity.Pedido;
import myapp.conexionbd.entity.PedidoDetalle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoDetalleRepository extends JpaRepository<PedidoDetalle, Long> {

}
