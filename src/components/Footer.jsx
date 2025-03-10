import React from "react";
import {
  Text,
  Pressable,
  HStack,
  Image,
  Stack,
  VStack,
  Divider,
} from "native-base";
import { IconContext } from "react-icons";

import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import whatsapp from "../Lotties/whatsapp.json";
import Lottie from "lottie-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import URL from "../helper/baseURL";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlePress = (network) => {
    const urls = {
      FB: "https://www.facebook.com/egsamx/",
      IG: "https://www.instagram.com/",
      X: "https://twitter.com/egsamx",
      IN: "https://nuevo.lpmarketinggroup.com.mx/",
      WA: "https://wa.me/998555555",
    };

    if (urls[network]) {
      window.open(urls[network], "_blank");
    } else {
      console.log("Red social no reconocida");
    }
  };

  const handleNavigation = (targetSection) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { targetSection } });
    } else {
      // Si ya estás en la landing, realiza el scroll a la sección indicada
      scroller.scrollTo(targetSection, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const LinkMenu = ({ ruta, texto }) => {
    return (
      <Pressable onPress={() => console.log(ruta)}>
        <Text fontSize={"lg"} color="#001489">
          {texto}
        </Text>
      </Pressable>
    );
  };

  return (
    <footer>
      {/* Boton WhatsAP */}
      <Pressable
        bottom={0}
        zIndex={9}
        position={"fixed"}
        justifyContent={"flex-start"}
        w={[16, 16, 24, 32]}
        h={[16, 16, 24, 32]}
        right={2}
        onPress={() => handlePress("WA")}
      >
        <Lottie animationData={whatsapp} loop={true} />
      </Pressable>

      <Stack
        direction={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
        w="80%"
        mx="10%"
        alignSelf={"center"}
        py={20}
      >
        {/* logo y redes sociales */}
        <VStack bg={"#fff"} alignSelf={"center"} mb={3}>
          <Image
            source={{ uri: `${URL.IMG_URL}logo-color.png` }}
            alt="Alternate Text"
            h={[40]}
            w={[96]}
            resizeMode="contain"
          />
          <HStack
            space={10}
            mt={3}
            justifyContent="center"
            alignSelf={"center"}
            alignItems={"center"}
          >
            {/* facebook */}
            <a href="https://www.facebook.com/egsamx/">
              <IconContext.Provider value={{ color: "#001489", size: "2em" }}>
                <FaFacebook />
              </IconContext.Provider>
            </a>
            {/* twitter */}
            <a href="https://www.facebook.com/egsamx/">
              <IconContext.Provider value={{ color: "#001489", size: "2em" }}>
                <FaTwitter />
              </IconContext.Provider>
            </a>

            {/* LinkedIN */}
            <a href="https://www.linkedin.com/in/egsamx/">
              <IconContext.Provider value={{ color: "#001489", size: "2em" }}>
                <FaLinkedinIn />
              </IconContext.Provider>
            </a>

            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/egsamx/">
              <IconContext.Provider value={{ color: "#001489", size: "2em" }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </HStack>
        </VStack>

        {/* Nuestros enlaces */}
        <VStack space={2}>
          <Text fontSize={"lg"} color={"#001489"}>
            NUESTROS ENLACES
          </Text>
          <Divider height={1} bg="#ff6900" />
          <LinkMenu texto="Inicio" ruta="#" />
          <LinkMenu texto="Tienda en línea" ruta="#" />
          <LinkMenu texto="Servicios" ruta="#" />
          <LinkMenu texto="¿Quiénes somos?" ruta="#" />
          <LinkMenu texto="Eventos" ruta="#" />
          <LinkMenu texto="Política de privacidad" ruta="#" />
        </VStack>

        {/* Contacto */}
        <VStack mt={{ base: 10, lg: 0 }} space={4}>
          <Text fontSize={"lg"} color={"#001489"}>
            CONTACTO
          </Text>
          <Divider height={1} bg="#ff6900" />
          <Pressable onPress={() => console.log("tel")}>
            <Text fontSize={"lg"} color="#001489">
              800-821-2888
            </Text>
          </Pressable>
          <Pressable onPress={() => console.log("email")}>
            <Text fontSize={"lg"} color="#001489">
              vtascel@egsa.com.mx
            </Text>
          </Pressable>
          <a
            href="https://maps.app.goo.gl/tyc4jUod7VCj5G6f6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Text fontSize={"lg"} color="#001489">
              <b>Matriz Celaya {"\n"}</b>
              Calle Norte 11 #117 {"\n"}
              Ciudad Industrial C.P. 38010{"\n"}
              Celaya, Guanajuato.{"\n"}
            </Text>
          </a>
        </VStack>
      </Stack>
    </footer>
  );
};

export default Footer;
