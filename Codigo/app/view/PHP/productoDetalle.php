<?php
require_once(__DIR__ . '/../../../rutas.php');
require_once(CONTROLLER . 'ProductoController.php');
require_once(CONTROLLER . 'PedidoController.php');
require_once(MODEL . 'Producto.php');
require_once(CONTROLLER . 'ReseñaController.php');

$productController = new ProductoController();
$pedidoController = new PedidoController();
$resenaController = new ReseñaController();
session_start();

if (isset($_SESSION['nombre_usuario'])) {
    $nombre_usuario = $_SESSION['nombre_usuario'];
} else {
    $nombre_usuario = null;
}

// Usamos $_GET para obtener el ID del producto
if (isset($_GET['id'])) {
    $id_producto = $_GET['id'];
} else {
    echo "Producto no encontrado.";
    exit;
}

$producto = $productController->getProductsById($id_producto);

if (!$producto) {
    echo "Producto no encontrado.";
    exit;
}

if (!isset($_SESSION['wishlist'])) {
    $_SESSION['wishlist'] = [];
}

// Añadir a wishlist
if (isset($_POST['accion']) && $_POST['accion'] === 'añadirAWishlist') {
    if (!in_array($id_producto, $_SESSION['wishlist'], true)) {
        $_SESSION['wishlist'][] = $id_producto;
        $mensaje = "¡Producto añadido a tu wishlist!";
    } else {
        $mensaje = "Este producto ya está en tu wishlist.";
    }
}

// Dar like
if (isset($_POST['accion']) && $_POST['accion'] === 'darLike') {
    if (!isset($_SESSION['likes'][$id_producto])) {
        $_SESSION['likes'][$id_producto] = true;
        $producto['likes'] += 1;
    } else {
        unset($_SESSION['likes'][$id_producto]);
        $producto['likes'] -= 1;
    }

    // Actualiza los datos del producto
    $productController->modificarProducto($producto['id_producto'], $producto['nombre_producto'], $producto['precio'], $producto['descripcion'], $producto['deporte'], $producto['likes'], $producto['imagen']);
}

// Verificar si el usuario está logueado antes de permitir la compra
if (isset($_POST['accion']) && $_POST['accion'] === 'comprar') {
    if ($nombre_usuario) {
        // Crear un pedido
        $pedidoController->crearPedido($id_producto, $nombre_usuario);
        $mensajeCompra = "Pedido realizado con éxito";
    } else {
        $mensajeCompra = "Debes iniciar sesión para realizar la compra.";
    }
}

// Publicar reseña
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['accion']) && $_POST['accion'] === 'publicarReseña') {
    if ($nombre_usuario) {
        $texto = $_POST['texto'] ?? '';
        $puntuacion = $_POST['puntuacion'] ?? 0;

        if ($texto && $puntuacion) {
            $resenaController->crearReseña($texto, $puntuacion, $nombre_usuario, $id_producto);
            $mensajeReseña = "¡Reseña publicada con éxito!";
            header("Location: " . $_SERVER['PHP_SELF'] . "?id=" . $id_producto); // Redirigir con id
            exit; // Es importante llamar a exit después de la redirección
        } else {
            $mensajeReseña = "Por favor, completa todos los campos para publicar tu reseña.";
        }
    } else {
        $mensajeReseña = "Debes iniciar sesión para publicar una reseña.";
    }
}

$resenas = $resenaController->getReseñasByProducto($id_producto);
?>


<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle del Producto</title>
    <link rel="stylesheet" href="../CSS/productoDetalle.css">
</head>

<body>
    <?php include "../Generales/nav.php" ?>

    <div class="main-container">
        <div class="detalleProducto">
            <div class="imagenProducto">
                <img src="<?= htmlspecialchars($producto['imagen']) ?>" alt="Imagen del producto">
                <div class="likeContainer">
                    <form action="" method="POST" class="formLike">
                        <input type="hidden" name="accion" value="darLike">
                        <input type="hidden" name="id" value="<?= htmlspecialchars($producto['id_producto']) ?>">
                        <button type="submit" class="botonLike <?= isset($_SESSION['likes'][$producto['id_producto']]) ? 'dadoLike' : '' ?>">
                            &#x2764; <?= htmlspecialchars($producto['likes']) ?>
                        </button>
                    </form>
                </div>
            </div>
            <div class="infoProducto">
                <h1><?= htmlspecialchars($producto['nombre_producto']) ?></h1>
                <span class="categoria"><?= htmlspecialchars($producto['deporte']) ?></span>
                <p class="precio"><?= htmlspecialchars($producto['precio']) ?>€</p>
                <p class="descripcion"><?= htmlspecialchars($producto['descripcion']) ?></p>

                <?php if (isset($mensaje)) { ?>
                    <p class="mensajeAñadido"><?= $mensaje ?></p>
                <?php } ?>

                <?php if (isset($mensajeCompra)) { ?>
                    <p class="mensajeCompra"><?= $mensajeCompra ?></p>
                <?php } ?>

                <div class="acciones">
                    <form id="form-comprar" action="" method="POST" style="display:none;">
                        <input type="hidden" name="id" value="<?= htmlspecialchars($producto['id_producto']) ?>">
                        <input type="hidden" name="accion" value="comprar">
                    </form>
                    <!-- Te lleva al script del pop up -->
                    <button type="button" class="botonComprar" onclick="confirmarCompra(event)">Comprar</button>

                    <div class="accionesBotones">
                        <form action="" method="POST">
                            <input type="hidden" name="accion" value="añadirAWishlist">
                            <input type="hidden" name="id" value="<?= htmlspecialchars($producto['id_producto']) ?>">
                            <button type="submit" class="botonDeseados">Añadir a la wishlist</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="reseñas">
        <h2>Reseñas del producto</h2>

        <!-- Formulario para publicar reseña -->
        <?php 
        if ($nombre_usuario) { 
        ?>
           <form action="" method="POST" class="formReseña">
        <input type="hidden" name="accion" value="publicarReseña">
        <input type="hidden" name="id" value="<?= htmlspecialchars($producto['id_producto']) ?>">
        <textarea name="texto" placeholder="Escribe tu reseña aquí..." required></textarea>
        <label for="puntuacion">Puntuación:</label>
        <select name="puntuacion" id="puntuacion" required>
            <option value="1">1 estrella</option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
        </select>
        <button type="submit" class="botonPublicar">Publicar reseña</button>
    </form>
        <?php 
        } else { 
        ?>
            <p>Inicia sesión para dejar una reseña.</p>
        <?php 
        } 
        ?>

        <?php 
        if (isset($mensajeReseña)) { 
        ?>
            <p class="mensajeReseña"><?= htmlspecialchars($mensajeReseña) ?></p>
        <?php 
        } 
        ?>

        <!-- Listado de reseñas -->
        <div class="listaReseñas">
            <?php 
            if ($resenas) { 
                foreach ($resenas as $resena) { 
            ?>
                    <div class="reseña">
                        <h3><?= htmlspecialchars($resena['nombre_usuario_reseña']) ?></h3>
                        <p class="puntuacion"><?= str_repeat('★', $resena['puntuacion']) ?></p>
                        <p><?= htmlspecialchars($resena['texto']) ?></p>
                    </div>
            <?php 
                } 
            } else { 
            ?>
                <p>No hay reseñas para este producto.</p>
            <?php 
            } 
            ?>
        </div>
    </div>

   


    <!-- <div id="popup-confirmacion" class="popup">
        <div class="popup-contenido">
            <h2>¿Deseas comprar este producto?</h2>
            <div class="popup-botones">
                <button onclick="cancelarCompra()">Cancelar</button>
                <button onclick="confirmarYComprar()">Confirmar</button>
            </div>
        </div>
    </div> -->

    <!-- /* From Uiverse.io by mi-series */  -->
    /* From Uiverse.io by mi-series */ 
<div class="container">
  <div class="card cart">
    <label class="title">CHECKOUT</label>
    <div class="steps">
      <div class="step">
        <div>
          <span>SHIPPING</span>
          <p>221B Baker Street, W1U 8ED</p>
          <p>London, United Kingdom</p>
        </div>
        <hr>
        <div>
          <span>PAYMENT METHOD</span>
          <p>Visa</p>
          <p>**** **** **** 4243</p>
        </div>
        <hr>
        <div class="promo">
          <span>HAVE A PROMO CODE?</span>
          <form class="form">
            <input class="input_field" placeholder="Enter a Promo Code" type="text">
            <button>Apply</button>
          </form>
        </div>
        <hr>
        <div class="payments">
          <span>PAYMENT</span>
          <div class="details">
            <span>Subtotal:</span>
            <span>$240.00</span>
            <span>Shipping:</span>
            <span>$10.00</span>
            <span>Tax:</span>
            <span>$30.40</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card checkout">
    <div class="footer">
      <label class="price">$280.40</label>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
</div>


    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById('popup-confirmacion').style.display = 'none';
        }); // necesario para que no salga visible por defecto

        function confirmarCompra(event) {
            event.preventDefault();

            document.getElementById('popup-confirmacion').style.display = 'flex'; // lo muestra
        }

        function cancelarCompra() {
            document.getElementById('popup-confirmacion').style.display = 'none'; // lo oculta
        }

        function confirmarYComprar() {
            document.getElementById('form-comprar').submit(); // envia formualario
        }
    </script> 
    
    <?php include "../Generales/footer.php" ?>
</body>

</html>
