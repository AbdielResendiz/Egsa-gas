import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
  View,
  VStack,
  useBreakpointValue,
} from "native-base";
import URL from "../helper/baseURL";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Element } from "react-scroll";

const Home = () => {
  const SliderItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handlePress = () => {
      window.open(item.url, "_blank");
    };

    return (
      <Pressable
        onPress={() => handlePress()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        borderWidth={isHovered ? 4 : 0}
        borderColor={isHovered ? "#ff6800" : "#fff"}
        borderRadius={56}
        shadow={7}
        h={{ base: "300px", lg: "450px" }}
        flex={1}
        pb={4}
        mb={5}
        mx={5}
        style={{
          background: isHovered
            ? "#fff"
            : "linear-gradient(to bottom left, #204ff5, #00005d)",
        }}
      >
        <Image
          source={{ uri: URL.IMG_URL + item.Imagen }}
          alt={item.titulo}
          w="100%"
          h={{ base: 40, lg: 80 }}
          alignSelf="center"
          resizeMode="contain"
          mb={2}
        />
        <VStack mt={-10}>
          <Text
            fontSize={{ base: "xs", lg: "lg" }}
            fontWeight="semibold"
            color={isHovered ? "#11148a" : "#fff"}
            textAlign="center"
            alignSelf="center"
            w="95%"
            lineHeight={20}
            h={24}
          >
            {item.titulo}
          </Text>
          <Text
            fontSize={{ base: "sm", lg: "lg" }}
            color={isHovered ? "blue" : "#fff"}
            textAlign="center"
            mt={4}
          >
            {item.precio}
          </Text>
        </VStack>
      </Pressable>
    );
  };
  const Portada = () => {
    return (
      <Box
        style={{
          backgroundImage: `url(${URL.IMG_URL}/fondo-01.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        mt={-40}
        pt={32}
        pb={10}
      >
        <Heading color="#fff" textAlign={"center"}>
          SOLUCIONES PARA EL USO Y MANEJO DE
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} alignSelf={"center"}>
          <Heading
            color="#fff"
            textAlign={"center"}
            fontSize={{ base: "6xl", md: "8xl" }}
          >
            GAS LP EN{" "}
          </Heading>
          <Heading
            color="#ffca00"
            textAlign={"center"}
            fontSize={{ base: "6xl", md: "8xl" }}
          >
            MÉXICO{" "}
          </Heading>
        </Stack>
        <Image
          source={{ uri: `${URL.IMG_URL}camion-01.png` }}
          alt="Alternate Text"
          alignSelf={"center"}
          w={"900px"}
          h={"500px"}
          mt={-32}
          resizeMode="contain"
        />
        <Text
          textAlign={"center"}
          color={"#fff"}
          mt={-10}
          mb={5}
          w={{ base: "80%", lg: "70%" }}
          alignSelf={"center"}
          fontSize={"lg"}
        >
          Brindamos soluciones para el uso y manejo de gas LP en México.
          Ofrecemos servicios para el aprovechamiento seguro de este
          combustible, así como de otras sustancias químicas utilizadas en
          procesos industriales.
        </Text>
        <Text
          textAlign={"center"}
          color={"#fff"}
          w={{ base: "80%", lg: "65%" }}
          alignSelf={"center"}
          fontSize={"lg"}
          mb={5}
        >
          Somos una empresa reconocida a nivel nacional por venta y distribución
          en equipos, accesorios y partes de repuesto de las mejores marcas.
        </Text>
        <Button
          alignSelf={"center"}
          w={40}
          h={12}
          colorScheme={"blue"}
          borderRadius={20}
          shadow={7}
        >
          Cotiza un Proyecto
        </Button>
      </Box>
    );
  };

  const Banner1 = () => {
    return (
      <Stack
        direction={{ base: "row", lg: "row" }}
        bg="#051480"
        w="100%"
        h={{ base: "200px", lg: "600px" }}
      >
        <Image
          source={{ uri: `${URL.IMG_URL}logos01.png` }}
          alt="Alternate Text"
          w={{ base: "55%", lg: "40%" }}
          h={{ base: "200px", lg: "550px" }}
          resizeMode="contain"
          mt={{ base: -8, lg: 0 }}
        />
        <Box
          justifyContent={"center"}
          w={{ base: "45%", lg: "60%" }}
          style={{
            backgroundImage: `url(${URL.IMG_URL}/fondo02.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            resizeMode: "fill",
          }}
        >
          <Text
            color={"#fff"}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            <b>EGSA</b> ASOCIADO
          </Text>
          <Text
            color={"#fff"}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            DE LA{" "}
            <Text
              style={{
                background:
                  "linear-gradient(90deg, #0152ff 80%, transparent 100%)",
              }}
              pr={5}
              textAlign={"flex-start"}
            >
              AIGLP
            </Text>
          </Text>
          <Text
            color={"#fff"}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            2025
          </Text>
        </Box>
      </Stack>
    );
  };

  const Banner2Escritorio = () => {
    return (
      <HStack bg="#003040" w="100%" display={{ base: "none", lg: "flex" }}>
        {/* PRIMERA COLUMNA */}
        <VStack w="25%">
          <Box bg="#ff0000" flex={1} justifyContent="center">
            <Text color="#fff" bold p={10} fontSize={"md"}>
              Nos especializamos en diferentes soluciones para el
              almacenamiento, transporte y manejo de gas LP en México, así como
              en la distribución de refacciones y equipo especializado.
            </Text>
          </Box>
          <Image
            source={{ uri: `${URL.IMG_URL}egsa01.png` }}
            alt="Alternate Text"
            w="100%"
            h={"400px"}
            resizeMode="cover"
          />
        </VStack>
        {/* SEGUNDA COLUMNA */}
        <VStack bg="#001489" w="75%">
          <HStack>
            <Image
              source={{ uri: `${URL.IMG_URL}egsa02.png` }}
              alt="Alternate Text"
              w="33%"
              h={"400px"}
            />
            <VStack w="67%" bg="#0055ff">
              <VStack
                alignSelf={"center"}
                w="100%"
                flex={1}
                justifyContent={"center"}
              >
                <Heading textAlign={"center"} color="#fff">
                  ATENCIÓN INTEGRAL
                </Heading>
                <Text
                  fontSize={"3xl"}
                  textAlign={"center"}
                  color="#fff"
                  fontWeight={"semibold"}
                >
                  PARA EL MANEJO DE GAS LP
                </Text>
              </VStack>
              <HStack bg="#fff" alignItems={"center"}>
                <Text fontSize={"md"} px={10} w="50%">
                  Trabajamos con empresas de diferentes industrias: energía,
                  alimentos y bebidas, transporte y automotriz, entre otras.
                </Text>
                <Image
                  source={{ uri: `${URL.IMG_URL}egsa03.png` }}
                  alt="Alternate Text"
                  w="50%"
                  h={56}
                />
              </HStack>
            </VStack>
          </HStack>

          <HStack w="100%">
            <Box justifyContent="center" w="50%">
              <Text color="#fff" fontSize={"md"} p={12} justifyContent="center">
                Elaboramos proyectos de diseño, ingeniería y construcción de
                instalaciones de gas a la medida de cada cliente usando
                tecnología de última generación y aplicando las normas de
                calidad vigentes.
              </Text>
            </Box>

            <Image
              source={{ uri: `${URL.IMG_URL}egsa04.png` }}
              alt="Alternate Text"
              w="40%"
              h={56}
            />
          </HStack>
        </VStack>
      </HStack>
    );
  };
  const Banner2Movil = () => {
    return (
      <VStack bg="#003040" w="100%" display={{ base: "flex", lg: "none" }}>
        {/* PRIMERA COLUMNA */}
        <VStack
          alignSelf={"center"}
          w="100%"
          py={10}
          flex={1}
          bg="#0055ff"
          justifyContent={"center"}
        >
          <Heading textAlign={"center"} color="#fff">
            ATENCIÓN INTEGRAL {"\n"}PARA EL MANEJO DE GAS LP
          </Heading>
        </VStack>
        <HStack w="100%">
          <Box bg="#ff0000" flex={1} justifyContent="center" h="300px">
            <Text color="#fff" fontWeight={"medium"} p={4} fontSize={"md"}>
              Nos especializamos en diferentes soluciones para el
              almacenamiento, transporte y manejo de gas LP en México, así como
              en la distribución de refacciones y equipo especializado.
            </Text>
          </Box>
          <Image
            source={{ uri: `${URL.IMG_URL}egsa01.png` }}
            alt="Alternate Text"
            w="50%"
            h={"300px"}
            resizeMode="cover"
          />
        </HStack>
        {/* SEGUNDA COLUMNA */}
        <VStack bg="#001489" w="100%">
          <HStack>
            <VStack w="100%" bg="#0055ff">
              <HStack bg="#fff" alignItems={"center"}>
                <Image
                  source={{ uri: `${URL.IMG_URL}egsa03.png` }}
                  alt="Alternate Text"
                  w="50%"
                  h={56}
                />
                <Text fontSize={"md"} p={5} w="50%">
                  Trabajamos con empresas de diferentes industrias: energía,
                  alimentos y bebidas, transporte y automotriz, entre otras.
                </Text>
              </HStack>
            </VStack>
          </HStack>

          <VStack w="100%">
            <Box justifyContent="center" w="90%" alignSelf={"center"}>
              <Text color="#fff" fontSize={"md"} textAlign={"center"} p={5}>
                Elaboramos proyectos de diseño, ingeniería y construcción de
                instalaciones de gas a la medida de cada cliente usando
                tecnología de última generación y aplicando las normas de
                calidad vigentes.
              </Text>
            </Box>

            <Image
              source={{ uri: `${URL.IMG_URL}egsa04.png` }}
              alt="Alternate Text"
              w="80%"
              resizeMode="contain"
              alignSelf={"center"}
              h={40}
              mb={5}
            />
          </VStack>
        </VStack>
      </VStack>
    );
  };

  const Servicios01 = () => {
    const Servicio = ({ img, text }) => {
      return (
        <VStack alignItems={"center"}>
          <Image
            source={{ uri: `${URL.IMG_URL}${img}` }}
            alt="Alternate Text"
            w={64}
            h={64}
            resizeMode="contain"
            alignSelf={"center"}
          />
          <Heading textAlign={"center"} fontSize={"lg"} flex={1} w={56}>
            {text}
          </Heading>
        </VStack>
      );
    };

    return (
      <View bg="#fff" w="100%">
        <Heading
          textAlign={"center"}
          fontSize={"6xl"}
          pt={10}
          color={"#0055ff"}
        >
          SERVICIOS
        </Heading>
        {/* SERVICIOS  */}
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-evenly"}
          w={"80%"}
          alignSelf={"center"}
        >
          <Servicio img="egsa04.png" text="MANEJO Y TRANSPORTE DE GAS" />
          <Servicio
            img="servicio02.png"
            text="VENTA DE ACCESORIOS Y REFACCIONES"
          />
          <Servicio img="servicio03.png" text="EQUIPAMIENTO PARA AUTOTANQUES" />
        </Stack>
        {/* SERVICIOS 2  */}
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-evenly"}
          w={"80%"}
          alignSelf={"center"}
        >
          <Servicio
            img="servicio04.png"
            text="DISEÑO, CONSTRUCCIÓN Y VERIFICACIÓN DE PLANTAS"
          />
          <Servicio img="servicio05.png" text="ALMACENAMIENTO INDUSTRIAL" />
          <Servicio
            img="servicio06.png"
            text="CONVERSIÓN DE VEHÍCULOS A GAS AUTOMOTRIZ"
          />
        </Stack>

        {/* TEXTO Y BOTON */}
        <Text
          w="60%"
          my={16}
          fontSize={"lg"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          Tenemos cobertura nacional por medio de nuestras sucursales en Celaya,
          Ciudad Juárez, Ciudad de México, Guadalajara y Monterrey, en las que
          contamos con áreas de ingeniería, talleres mecánicos y stock de
          refacciones.
        </Text>
        <Button
          shadow={7}
          alignSelf={"center"}
          colorScheme={"blue"}
          borderRadius={12}
        >
          <Text
            color={"#fff"}
            fontWeight={"medium"}
            fontSize={"sm"}
            textAlign={"center"}
            px={4}
          >
            Conoce más de {"\n"}nuestros servicios
          </Text>
        </Button>
      </View>
    );
  };

  const Servicios02 = () => {
    const Servicio2 = ({ titulo, icono, texto, ancho }) => {
      return (
        <VStack bg="#efefef" w={{ base: "100%", lg: ancho }}>
          <Box h={{ base: "auto", lg: "500px" }}>
            <HStack justifyContent={"space-between"}>
              <Text bold fontSize={"lg"} w={"65%"} ml={10} mt={10}>
                {titulo}
              </Text>
              <Image
                source={{ uri: `${URL.IMG_URL}${icono}` }}
                alt="Alternate Text"
                size="sm"
                mt={6}
                mr={6}
              />
            </HStack>
            <Text
              style={{ whiteSpace: "pre-line" }}
              fontSize={"md"}
              fontWeight={"semibold"}
              py={10}
              pl={10}
              pr={6}
            >
              {texto}
            </Text>
          </Box>
          <Box
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            mt={10}
            mb={5}
          >
            <Button
              w={56}
              h={16}
              shadow={7}
              colorScheme="blue"
              position="absolute"
              bottom={0}
              borderRadius={20}
            >
              <Text color={"#fff"} fontWeight={"medium"}>
                Agenda una{"\n"} conversión
              </Text>
            </Button>
          </Box>
        </VStack>
      );
    };
    return (
      <View w="80%" my={10} alignSelf={"center"}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          space={3}
        >
          <Servicio2
            titulo="MANEJO Y TRANSPORTE DE GAS"
            icono="icono01.png"
            texto={`Contamos con productos y servicios especializados para el manejo de gas LP en México, ya sea para uso industrial y comercial. \n\nTambién brindamos consultorías a empresas para verificar la eficiencia y seguridad de sus instalaciones,además de que realizamos capacitaciones con el fin de promover buenas prácticas.`}
            ancho={"30%"}
          />
          <Servicio2
            titulo="VENTA DE ACCESORIOS Y REFACCIONES"
            icono="icono02.png"
            texto={`Distribuimos accesorios, refacciones y equipos para el manejo de gas LP en México por medio de nuestras sucursales y en nuestra tienda en línea. \n 
              Comercializamos gran variedad de artículos de marcas certificadas (válvulas, motores, bombas, registros y medidores, entre otros), además de que hacemos envíos inmediatos a todo el país.`}
            ancho={"30%"}
          />
          <Servicio2
            titulo="ESPECIALISTAS EN MANEJO DE GAS LP EN MÉXICO"
            icono="icono03.png"
            texto={`Somos una empresa reconocida a nivel nacional por brindar soluciones integrales para el uso y manejo de gas LP con fines industriales, comerciales y particulares.

              Tenemos más de 50 años de experiencia colaborando con empresas nacionales y extranjeras en la construcción de instalaciones, así como en la verificación, reparación y mantenimiento de equipos de gas.

              Contamos con las certificaciones necesarias para trabajar y tenemos el reconocimiento de diversas autoridades en la materia, como la Secretaría de Energía y la de Trabajo y Previsión Social.`}
            ancho={"40%"}
          />
        </Stack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={"center"}
          space={3}
          mt={10}
        >
          <Servicio2
            icono="icono04.png"
            titulo="CONVERSIÓN DE VEHÍCULOS A AUTOGAS"
            ancho="30%"
            texto={`Convertimos vehículos que utilizan gasolina o diésel para que funcionen con gas automotriz.

              Realizamos el diseño e instalación de estos sistemas sin dañar las piezas existentes.

              Modificamos vehículos empresariales, de transporte público y particulares para procurar el ahorro de combustible y aumentar su autonomía, pero sin reducir su desempeño.`}
          />
          <Servicio2
            icono="icono01.png"
            titulo="EQUIPAMIENTO PARA AUTOTANQUES"
            ancho="30%"
            texto={`Contamos con productos y servicios especializados para el manejo de gas LP en México, ya sea para uso industrial y comercial.

              También brindamos consultorías a empresas para verificar la eficiencia y seguridad de sus instalaciones, además de que realizamos capacitaciones con el fin de promover buenas prácticas.`}
          />
          <Servicio2
            icono="icono06.png"
            titulo="DISEÑO DE PLANTAS DE GAS Y ALMACENAMIENTO"
            ancho="30%"
            texto={`Contamos con personal especializado en ingeniería, diseño y construcción de plantas de gas LP u otros energéticos y químicos usados en procesos industriales.

              Elaboramos instalaciones para el almacenamiento y uso de combustibles, así como plantas stand by que cuentan con sistemas de respaldo para sustituir el gas natural en caso de desabasto.`}
          />
        </Stack>
      </View>
    );
  };

  const BannerTienda = () => {
    return (
      <View
        style={{
          backgroundImage: `url(${URL.IMG_URL}/bannerfondo01.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        h={{ base: "550px", md: "700px" }}
      >
        <Box
          alignItems={"center"}
          w="100%"
          bg="#fff"
          borderBottomRadius={360}
          alignSelf={"center"}
        >
          <Text
            textAlign={"center"}
            w={{ base: "75%", lg: "40%" }}
            py={2}
            bold
            fontSize={"lg"}
          >
            ¿Quieres empezar o evaluar un proyecto relacionado con el manejo de
            gas LP en México? Contáctanos y te ayudaremos a verificar que sea
            seguro y eficiente.
          </Text>
          <Button
            alignSelf={"center"}
            flex={1}
            mt={2}
            mb={16}
            colorScheme={"blue"}
            shadow={7}
          >
            Contactar a un asesor
          </Button>
        </Box>
        <Box my={10}>
          <Heading
            color="#fff"
            textAlign={"center"}
            fontSize={{ base: "2xl", lg: "4xl" }}
            mb={10}
          >
            Productos de la más alta calidad {"\n"} Aprovecha nuestros
            descuentos
          </Heading>
          <Button
            alignSelf={"center"}
            flex={1}
            mb={20}
            colorScheme={"blue"}
            shadow={7}
          >
            Ir a la tienda
          </Button>
        </Box>
      </View>
    );
  };

  const Swiper1 = () => {
    const slidesToShow = useBreakpointValue({
      base: 2, // Para pantallas pequeñas
      md: 3,
      lg: 4, // Para pantallas grandes
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow || 2, // Fallback en caso de que no se resuelva el valor
      slidesToScroll: 1,
    };

    const data = [
      {
        Imagen: "FILTROCARBON.png",
        titulo: "FILTRO CARBÓN ACTIVADO/FC-FGI008",
        precio: "$130.18 MXN",
        url: "https://egsa.mx/tienda-en-linea/filtro/filtro-carbon-activado-fc-fgi008/",
      },
      {
        Imagen: "PUNTA.png",
        titulo: "PUNTA POL ACERO 8 PYPESA/PY-0070070",
        precio: "$777.65 MXN",
        url: "https://egsa.mx/tienda-en-linea/otros/punta-pol-acero-8-pypesa-py-0070070/",
      },
      {
        Imagen: "VALVULA01.png",
        titulo: "VALV. REGO MAXIMO LLENADO 6.4MM LATON ECI / RG-M-3165CTA",
        precio: "$59.31 MXN",
        url: "https://egsa.mx/tienda-en-linea/valvulas/rg-m-3165cta/",
      },
      {
        Imagen: "VALVULA02.png",
        titulo: "VALV. SERVICIO 19MM P/TQ ESTACIONARIO ECI / RG-M-901DT11",
        precio: "$516.59 MXN",
        url: "https://egsa.mx/tienda-en-linea/valvulas/rg-m-901dt11-1/",
      },
      // ...más items
    ];
    return (
      <View
        style={{
          flex: 1,
          background: "linear-gradient(to right, #1d49e7, #071a8e)",
        }}
      >
        <Heading
          textAlign={"center"}
          color="#fff"
          fontSize={{ base: "2xl", md: "5xl" }}
          my={10}
        >
          NUESTRA TIENDA EN LÍNEA
        </Heading>
        <Heading textAlign={"center"} color="#fff" mb={10}>
          LO MÁS VENDIDO
        </Heading>
        {/* SWIPER */}
        <Box className="slider-container" w="85%" alignSelf={"center"} mb={20}>
          <Slider {...settings}>
            {data.map((item, index) => (
              <SliderItem key={index} item={item} />
            ))}
          </Slider>
        </Box>
      </View>
    );
  };

  const Swiper2 = () => {
    const slidesToShow = useBreakpointValue({
      base: 2, // Para pantallas pequeñas
      lg: 4, // Para pantallas grandes
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow || 2, // Fallback en caso de que no se resuelva el valor
      slidesToScroll: 1,
    };
    const data = [
      {
        Imagen: "FILTROCARBON.png",
        titulo: "FILTRO CARBÓN ACTIVADO/FC-FGI008",
        precio: "$130.19 MXN",
        url: "https://egsa.mx/tienda-en-linea/filtro/filtro-carbon-activado-fc-fgi008/",
      },
      {
        Imagen: "MOTOR.png",
        titulo: "MOTOR 1/2 HP 650 RPM PARA CARRETE 12 VOLTS / VI-P56SX401A",
        precio: "$8,786.49 MXN",
        url: "https://....",
      },
      {
        Imagen: "REGREGO01.png",
        titulo: `REG. REGO 2DA ETAPA3/4" X 3/4" 11" CA 1.6 M. BTU/HR /RG-LV5503B6A `,
        precio: "$2,007.68 MXN",
        url: "https://....",
      },
      {
        Imagen: "CARRETE.png",
        titulo: "CARRETE P/MANGUERA PYPESA",
        precio: "$34,147.49 MXN",
        url: "https://....",
      },
      // ...más items
    ];
    return (
      <View
        style={{
          flex: 1,
          background: "linear-gradient(to right, #1d49e7, #071a8e)",
        }}
      >
        <VStack
          style={{
            backgroundImage: `url(${URL.IMG_URL}/egsa012.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
          flex={1}
        >
          <Heading
            textAlign={"center"}
            color="#fff"
            fontSize={{ base: "3xl", lg: "5xl" }}
            my={10}
          >
            NUESTRA TIENDA EN LÍNEA
          </Heading>
          <Heading textAlign={"center"} color="#fff" mb={10}>
            LO MÁS VENDIDO
          </Heading>

          <Button
            w={40}
            borderColor={"#0055ff"}
            borderWidth={2}
            alignSelf={"center"}
            mb={10}
            colorScheme="light.100"
            variant="outline"
            _text={{ color: "#FFF", fontWeight: "semibold" }}
          >
            Ir a la tienda
          </Button>
        </VStack>

        {/* SWIPER */}
        <Box
          className="slider-container"
          w="85%"
          alignSelf={"center"}
          mb={20}
          mt={10}
          pb={10}
        >
          <Slider {...settings}>
            {data.map((item, index) => (
              <SliderItem key={index} item={item} />
            ))}
          </Slider>
        </Box>
      </View>
    );
  };

  return (
    <View mt={20}>
      <Portada />
      <Banner1 />
      <Banner2Escritorio />
      <Banner2Movil />
      <Element name="servicios">
        <Servicios01 />
      </Element>
      <Servicios02 />
      <BannerTienda />
      <Swiper1 />
      <Swiper2 />
    </View>
  );
};
export default Home;
