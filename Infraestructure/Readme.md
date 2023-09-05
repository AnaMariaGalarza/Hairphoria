Diseño de la Infraestructura - Proyecto en AWS

La infraestructura de red del booking de peluqueria se desarrollo de la siguiente manera y teniendo en cuenta los siguientes aspectos:

1. AWS Cloud: Representa la suscripción y la adquisición del servicio de computación en la nube de Amazon.

2. Region: Son zonas de disponibilidad de datacenter para la infraestructura de AWS. Se debe elegir la región con la cual nuestro sitio va a trabajar.

3. Usuarios: Son los clientes y personas que consumiran el contenido de nuestro sitio web, estos se conectaran a través de una red externa de internet y se conectarán por medio de una dirección.

4. Amazon Route 53: Permite al usuario ingresar un nombre de dominio a través de una DNS(Sistema de Nombres de Dominio), se encarga de configurar la dirección IP a un nombre legible de nuestro idioma.

5. Amazon CloudFront: Red de computadoras que contienen copias de datos, colocados en varios puntos de una red con el fin de maximizar el ancho de banda para el acceso a los datos de clientes por la red. En esta se configura una CDN(Red de Distribución de Contenidos),para poder servir nuestro contenido estatico con mayor agilidad mejorando la experiencia de los usuarios.

6. Bucket Amazon S3: Se configurara un servicio de de almacenamiento de objetos, el cual servirá para alojar nuestro sitio estático index.html.

7. VPC(Nube Privada Virtual): Provee una red privada dentro de AWS, para tener control total de las redes y permisos que se administran. Permite manejar todos los elementos de red (direccionaminto IP y subredes).

8. Dentro de la VPC se tendra 3 subredes:
   a. Subred Pública: Donde se tienen los servidores de aplicaciones que darán el servicio con el internet.
   b. Subred Privada: Donde se tiene la base de datos. En este caso Amazon RDS(Servcio de Base de Datos Relacionales).
   c. Subred DMZ ó zona desmilitarizada: Tendrá un servidor de VPN para tener protección de red en los servidores le presten el servicio a los host.

9. Balanceador de Carga: Atenderá las peticiones de vienen de los usuarios y las distribuye de manera equitativa entre los servidores de aplicaciones.

10. Internet Gateway:Permite que la VPC tenga acceso a internet.
