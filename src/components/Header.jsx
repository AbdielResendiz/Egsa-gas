import {
  Text,
  HStack,
  Image,
  Box,
  Pressable,
  Menu,
  HamburgerIcon,
  Divider,
} from "native-base";
import React from "react";
import { Link } from "react-scroll"; // Importa Element desde react-scroll
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";
import URL from "../helper/baseURL";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const headerStyle = {
    //position: "sticky",
    top: 0, // Aplicando el estado de paddingTop aquí
    left: 0,
    right: 0,
    zIndex: 99,
  };

  const ButtonMenu = ({ link, texto, w }) => {
    return (
      <Pressable
        onPress={() => handleClick(link)}
        style={{ cursor: "pointer" }}
        w={w}
      >
        <Box
          alignSelf={"center"}
          display={{ base: "none", lg: "flex" }}
          px={2}
          justifyContent="center"
          flex={1}
        >
          <Text
            color={"#fff"}
            flex="1"
            fontSize={["sm"]}
            textAlign="center"
            py={2}
          >
            {texto}
          </Text>
        </Box>
      </Pressable>
    );
  };
  const ButtonMenuNav = ({ link, texto, w }) => {
    return (
      <Pressable
        onPress={() => handleNavigation(link)}
        style={{ cursor: "pointer" }}
        w={w}
      >
        <Box
          alignSelf={"center"}
          display={{ base: "none", lg: "flex" }}
          px={2}
          justifyContent="center"
          flex={1}
        >
          <Text
            color={"#fff"}
            flex="1"
            fontSize={["sm"]}
            textAlign="center"
            py={2}
          >
            {texto}
          </Text>
        </Box>
      </Pressable>
    );
  };

  const MenuMovil = () => {
    return (
      <Menu
        display={{ base: "block", lg: "none" }}
        right={0}
        trigger={(triggerProps) => {
          return (
            <Pressable
              display={{ base: "block", lg: "none" }}
              {...triggerProps}
              right={0}
              mt={3}
              alignSelf={"center"}
              justifyContent={"center"}
              p={4}
            >
              <IconContext.Provider value={{ color: "#fff", size: "40" }}>
                <IoMenu />
              </IconContext.Provider>
            </Pressable>
          );
        }}
      >
        <Divider mt="3" w="100%" />
        <Menu.Item
          onPress={() => handleClick("https://egsa.mx/tienda-en-linea/")}
        >
          Tienda
        </Menu.Item>
        <Menu.Item onPress={() => handleNavigation("servicios")}>
          Servicios
        </Menu.Item>
        <Menu.Item onPress={() => handleNavigation("servicios")}>
          Servicios
        </Menu.Item>
        <Menu.Item
          onPress={() => handleClick("https://egsa.mx/quienes-somos/")}
        >
          ¿Quiénes somos?
        </Menu.Item>
        <Menu.Item
          onPress={() => handleClick("https://egsa.mx/rastreo-paquetexpress/")}
        >
          Rastreo Paqueteexpress
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <>
      <header style={headerStyle}>
        <nav>
          <HStack
            bg="transparent"
            zIndex={1}
            pt={0}
            h={20}
            w="100%"
            alignItems="center"
            justifyContent="center"
            space={4}
          >
            {/* Imagen LOGO Centrada */}
            <Pressable
              onPress={() => handleNavigation("inicio")}
              style={{ cursor: "pointer", alignSelf: "center" }}
              mr={10}
            >
              <Box h={10} w={[10]}>
                <Image
                  source={{ uri: `${URL.IMG_URL}logo-blanco.png` }}
                  alt="Imperia"
                  w={[10]}
                  h={10} // Puedes ajustar el tamaño según sea necesario
                  resizeMode="contain"
                />
              </Box>
            </Pressable>

            {/* Botones de Menú y Contacto a la Derecha */}

            <HStack
              justifyContent="flex-end"
              space={5}
              display={{ base: "none", lg: "flex" }}
              alignItems={"center"}
            >
              <ButtonMenu
                link="https://egsa.mx/tienda-en-linea/"
                texto="Tienda en línea"
                w={32}
              />
              <ButtonMenuNav link="servicios" texto="Servicios" w={20} />
              <ButtonMenu
                link="https://egsa.mx/quienes-somos/"
                texto="¿Quiénes somos?"
                w={40}
              />
              <ButtonMenu
                link="https://egsa.mx/eventos/"
                texto="Eventos"
                w={24}
              />
              <ButtonMenu
                link="https://egsa.mx/politica-de-privacidad/"
                texto="Política de Privacidad"
                w={40}
              />
              <ButtonMenu
                link="https://egsa.mx/rastreo-paquetexpress/"
                texto="Rastreo Paqueteexpress"
                w={48}
              />
            </HStack>
            {/* carrito */}
            <Pressable
              p={4}
              mt={2}
              mx={4}
              onPress={() => handleClick("https://egsa.mx/carrito/")}
            >
              <IconContext.Provider value={{ color: "#fff", size: "32" }}>
                <FiShoppingCart />
              </IconContext.Provider>
            </Pressable>
            <MenuMovil />
          </HStack>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
