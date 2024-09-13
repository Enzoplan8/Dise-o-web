<?php
    include 'header.php';
?>

    <div class="cuerpo">
        <div class="textos">
            <div class="titulos">
                <h1>La Revolución de la Biotecnología y Edición Genética</h1>
            </div>
            <div>
                <?php include'textos.php'?>
                <p class="tamanio-textos"><?php echo $texto_principal_index;?></p>
            </div>
        </div>
        <div class="div-imagenes">
            <img  class="imagenes" src="../Biotecnología-DW/imagenes/Imagen-página-1.jpeg">
        </div>
    </div>
    <nav id="sidebar">
        <button class="cerrar-slidebar"><img class="img-cerrar-slidebar" src="../Biotecnología-DW/imagenes/cruz-cerrar.png"> </button>
    <div class="div-slidebar">
        <h2>Bienvenido</h2>

        <h2>Suscríbete</h2>
        <form>
            <input class="input-email" type="email" placeholder="Ingresa tu correo" required>
            <button class="boton-submit" type="submit">Suscribirse</button>
        </form>

        <p>Visitas: <span id="contadorVisitas">0</span></p>
    </div>
    </nav>

    

    <script src="script.js"></script>
</body>
</html>