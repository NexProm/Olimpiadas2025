# Olimpiadas2025
Proyecto para las Olimpiadas2025 de programacion
Se trabajo con Angular, Springboot y Mysql

Base de datos:

CREATE DATABASE agenciaviajes;
USE agenciaviajes;

CREATE TABLE jefes (
  id_jefe INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_jefe)
);
CREATE TABLE clientes (
  id_cliente INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  id_jefe INT DEFAULT NULL,
  PRIMARY KEY (id_cliente),
  FOREIGN KEY (id_jefe) REFERENCES jefes(id_jefe)
);
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio_unitario INT NOT NULL
);
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    estado ENUM('pendiente', 'entregado') DEFAULT 'pendiente',
    total INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);

CREATE TABLE detalle_pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
CREATE TABLE pedido_entregado (
    id_pedido INT PRIMARY KEY,
    cliente_id INT NOT NULL,
    total INT,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);
CREATE TABLE ventas (
    id_venta INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT,
    cliente_id INT,
    total INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id_cliente)
);
