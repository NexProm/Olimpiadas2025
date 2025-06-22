package myapp.conexionbd.controller;

import myapp.conexionbd.DTO.DetallePedido;
import myapp.conexionbd.DTO.PedidoDTO;
import myapp.conexionbd.DTO.PedidoRequest;
import myapp.conexionbd.entity.Pedido;
import myapp.conexionbd.entity.PedidoDetalle;
import myapp.conexionbd.entity.Producto;
import myapp.conexionbd.entity.Usuario;
import myapp.conexionbd.repository.PedidoDetalleRepository;
import myapp.conexionbd.repository.PedidoRepository;
import myapp.conexionbd.repository.ProductoRepository;
import myapp.conexionbd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@RequestMapping("api/pedido")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PedidoDetalleRepository detalleRepository;

    @Autowired
    private ProductoRepository productoRepository;


    @PostMapping
    public ResponseEntity<?> crearPedido(@RequestBody PedidoRequest pedidoRequest){
        if (pedidoRequest.getClientesId() == null) {
            return ResponseEntity.badRequest().body("ID de cliente no puede ser nulo");
        }
        System.out.println("Pedido recibido: " + pedidoRequest);
        System.out.println("Cliente ID: " + pedidoRequest.getClientesId());

        Optional<Usuario> clienteopt = usuarioRepository.findById(pedidoRequest.getClientesId());


        if(clienteopt.isEmpty()){
            return ResponseEntity.badRequest().body("Cliente no encontrado");

        }

        int totalCalculado = pedidoRequest.getProductos().stream()
                .mapToInt(p -> productoRepository.findById(p.getProductoId()).map(prod -> prod.getPrecioUnitario() * p.getCantidad()).orElse(0)).sum();
        System.out.println(" Total enviado desde frontend: " + pedidoRequest.getTotal());
        System.out.println(" Total calculado en backend: " + totalCalculado);
        if (pedidoRequest.getTotal() != totalCalculado) {
            return ResponseEntity.badRequest().body("Error en el total");
        }
        pedidoRequest.getProductos().forEach(p -> {
            productoRepository.findById(p.getProductoId()).ifPresent(prod -> {
                System.out.println(" Producto ID " + p.getProductoId() + ": " + prod.getPrecioUnitario() + " x " + p.getCantidad() + " = " + (prod.getPrecioUnitario() * p.getCantidad()));
            });
        });


        Usuario usuario = clienteopt.get();
        Pedido pedido = new Pedido();
        pedido.setCliente(usuario);

        pedido.setTotal(pedidoRequest.getTotal());
        pedido = pedidoRepository.save(pedido);
        for (DetallePedido dto : pedidoRequest.getProductos()) {
            System.out.println("Producto ID: " + dto.getProductoId());

            if (dto.getProductoId() == null) {
                return ResponseEntity.badRequest().body("Producto con ID nulo");
            }

            Producto producto = productoRepository.findById(dto.getProductoId())
                    .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado: ID " + dto.getProductoId()));

            PedidoDetalle detalle = new PedidoDetalle();
            detalle.setPedido(pedido);
            detalle.setProductoId(dto.getProductoId());
            detalle.setCantidad(dto.getCantidad());
            detalle.setPrecioUnitario(producto.getPrecioUnitario());

            detalleRepository.save(detalle);
        }
        return ResponseEntity.ok(Map.of("mensaje", "Pedido guardado correctamente"));
    }
    @GetMapping("/pendientes")
    public ResponseEntity<List<PedidoDTO>> listarPedidosPendientes() {
        List<Pedido> pedidos = pedidoRepository.findByEstado("pendiente");

        List<PedidoDTO> resultado = pedidos.stream().map(p -> {
            PedidoDTO dto = new PedidoDTO();
            dto.setId(p.getId());
            dto.setClienteNombre(p.getCliente().getNombre());
            dto.setProductos(p.getDetalle().stream()
                    .map(x -> String.valueOf(x.getProductoId()))
                    .collect(Collectors.toList()));
            return dto;
        }).toList();

        return ResponseEntity.ok(resultado);
    }
    @PutMapping("/{id}/estado")
    public ResponseEntity<?> actualizarEstado(@PathVariable Long id, @RequestBody Map<String, String> cuerpo) {
        String nuevoEstado = cuerpo.get("estado");

        Optional<Pedido> pedidoOpt = pedidoRepository.findById(id);
        if (pedidoOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Pedido no encontrado");
        }

        Pedido pedido = pedidoOpt.get();
        pedido.setEstado(nuevoEstado);
        pedidoRepository.save(pedido);

        return ResponseEntity.ok(Map.of("mensaje", "Estado actualizado a " + nuevoEstado));
    }


}
