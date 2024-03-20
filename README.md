<h1 align = 'center'>Aroma de Café<h1>

<hr>

<h2>Modelo de datos</h2>
Para abarcar una problemática es importante tener un modelo de datos ajustado a la necesidad del negocio a resolver. Además, es valioso para ordenar la información de manera eficiente y para garantizar la integralidad de los datos.

<h3>Tablas</h3>
<p>Nuestro ecommerce cuenta con las tablas: usuarios,productos,categorias,marcas,carrito,ordenes y roles.
</p>
<p>Relaciónes entre tablas:</p>

<p>Roles tiene una relación de 1 es a muchos con tabla usuarios, por medio del campo id_roles. Cada rol puede estar asociado a 1 o muchos usuarios y un usuario puede tener un rol. </p>
<p>Usuarios tiene una relación de 1 es a muchos con la tabla carrito, esto podemos verlo en el campo id_usuarios. Un usuario puede tener de 1 varios carritos y un carrito estará asociado a un usuario. </p>
<p>Carrito tiene una relación de 1 es muchos con la tabla ordenes, esta se demuestra con el campo id_carrito.</p>
<p>Productos tiene una relación de 1 es a muchos con la tabla ordenes por medio del campo id_productos. Una orden puede tener de 1 a muchos productos asociados y un producto puede estar en 1 o muchas ordenes</p>
<p>Categorias tiene una relación de 1 es a muchos con la tabla productos, esta se manifiesta por medio del campo id_categoria. Una categoria puede tener asociados 1 o más productos y un producto puede ter solo una categoria</p>
<p>Marcas tiene una relación de 1 es a muchos con productos, se manifiesta en el campo id_marca. Cada producto tiene una marca y una marca puede estar asociado a 1 o muchos productos</p>

<p>Una de nuestras tablas que ponemos denominar como critica es Ordenes. Esta tabla proporciona información sobre cuándo ocurrío la transacción, esto nos permitiría analizar las ventas y dar seguimiento de los pedidos.</p>
