const createTableUsers = `CREATE TABLE IF NOT EXISTS public.usuarios
(
    id_usuario serial NOT NULL,
    nombre_usuario character varying(255) NOT NULL,
    nombre_completo character varying(255) NOT NULL,
    id_rol integer NOT NULL,
    correo character varying(100) NOT NULL,
    contrasenya character varying(50) NOT NULL,
    estado_cuenta boolean NOT NULL,
    fecha_registro timestamp without time zone NOT NULL,
    fecha_actualizacion timestamp without time zone NOT NULL,
    CONSTRAINT id PRIMARY KEY (id_usuario),
    CONSTRAINT corrreo UNIQUE (correo)
        INCLUDE(correo)
);
`;

const createTableRoles = `CREATE TABLE IF NOT EXISTS public.roles
(
    id_rol serial NOT NULL,
    nombre_rol character varying(50) NOT NULL,
    descripcion character varying(100),
    permisos character varying(100),
    estado_rol boolean NOT NULL,
    fecha_creacion date NOT NULL,
    fecha_actualizacion timestamp without time zone NOT NULL,
    PRIMARY KEY (id_rol),
    CONSTRAINT nombre_rol UNIQUE (nombre_rol)
        INCLUDE(nombre_rol)
);
`;

const createTableCategorias = `CREATE TABLE IF NOT EXISTS public.categorias
(
    id_categoria serial NOT NULL,
    nombre_categoria character varying(100) NOT NULL,
    descripcion character varying(255),
    imagen character varying(255) NOT NULL,
    fecha_creacion timestamp without time zone NOT NULL,
    fecha_actualizacion timestamp without time zone,
    PRIMARY KEY (id_categoria),
    CONSTRAINT nombre_categoria UNIQUE (nombre_categoria)
        INCLUDE(nombre_categoria)
);
`;

const createTableProductos = `CREATE TABLE IF NOT EXISTS public.productos
(
    id_producto serial NOT NULL,
    nombre_producto character varying(100) NOT NULL,
    descripcion character varying(255),
    precio integer NOT NULL,
    stock integer NOT NULL,
    id_categoria integer NOT NULL,
    id_marca integer NOT NULL,
    imagen_producto character varying(255) NOT NULL,
    fecha_creacion timestamp without time zone NOT NULL,
    fecha_actualizacion timestamp without time zone NOT NULL,
    PRIMARY KEY (id_producto),
    CONSTRAINT nombre_producto UNIQUE (nombre_producto)
        INCLUDE(nombre_producto)
);
`;

const createTableOrdenes = `CREATE TABLE IF NOT EXISTS public.ordenes
(
    id_orden serial NOT NULL,
    id_carrito integer NOT NULL,
    id_producto integer NOT NULL,
    cantidad_vendida integer NOT NULL,
    precio_unitario integer NOT NULL,
    monto_total integer NOT NULL,
    metodo_pago character varying(50) NOT NULL,
    informacion_envio character varying(255),
    estado character varying(100),
    fecha_venta date NOT NULL,
    PRIMARY KEY (id_orden)
);
`;

const createTableCarrito = `CREATE TABLE IF NOT EXISTS public.carrito
(
    id_carrito serial,
    id_usuario integer NOT NULL,
    cantidad integer NOT NULL,
    fecha_creacion timestamp without time zone,
    fecha_actualizacion timestamp without time zone,
    CONSTRAINT id_carrito PRIMARY KEY (id_carrito)
);
`;

const createTableMarcas = `CREATE TABLE IF NOT EXISTS public.marcas
(
    id_marca serial,
    nombre_marca character varying(100) NOT NULL,
    fecha_creacion timestamp without time zone NOT NULL,
    PRIMARY KEY (id_marca)
);
`;

const AlterTableUsuarios = `ALTER TABLE IF EXISTS public.usuarios
ADD CONSTRAINT fk_rol FOREIGN KEY (id_rol)
REFERENCES public.roles (id_rol) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;

`;

const AlterTableProductos = `ALTER TABLE IF EXISTS public.productos
ADD CONSTRAINT fk_categoria FOREIGN KEY (id_categoria)
REFERENCES public.categorias (id_categoria) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;
`;

const AlterTableOrdenesxProduc = `ALTER TABLE IF EXISTS public.ordenes
ADD CONSTRAINT fk_producto FOREIGN KEY (id_producto)
REFERENCES public.productos (id_producto) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;`;

const AlterTableProductosxMarcas = `ALTER TABLE IF EXISTS public.productos
ADD CONSTRAINT fk_marca FOREIGN KEY (id_marca)
REFERENCES public.marcas (id_marca) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;
`;

const AlterTableCarritoxUser = `ALTER TABLE IF EXISTS public.carrito
ADD CONSTRAINT fk_usuarios FOREIGN KEY (id_usuario)
REFERENCES public.usuarios (id_usuario) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;
`;

const AlterTableOrdenesxCarrito = `ALTER TABLE IF EXISTS public.ordenes
ADD CONSTRAINT fk_carrito FOREIGN KEY (id_carrito)
REFERENCES public.carrito (id_carrito) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE CASCADE
NOT VALID;`;

const initial_setup = `CREATE TABLE IF NOT EXISTS initial_setup (
    id SERIAL PRIMARY KEY,
    initialized BOOLEAN DEFAULT FALSE
  );`;

const insertDataIntoProductos = `INSERT INTO productos (id_producto, nombre_producto, descripcion, precio, stock, id_categoria, id_marca, imagen_producto, fecha_creacion, fecha_actualizacion)
VALUES