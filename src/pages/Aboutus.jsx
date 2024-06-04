import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, Flex, Image, Heading,Text,Button } from "@chakra-ui/react";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
        <Image src={require("../assets/About us/about-us.jpg")} />
        <Flex flexDirection={"column"} gap={3} maxW={"6xl"} py={10}>
          <Image
            src={require("../assets/About us/WhatsApp Image 2020-05-15 at 6.27.36 PM (1).jpeg")}
          />
          <Box
            fontWeight={"600"}
            color="text.500"
            fontSize={{md:"27px",base:24}}
            textAlign={"center"}
          >
            About Sat Aushadh
          </Box>

          <Box maxW={"6xl"} color={"text.300"} textAlign={"justify"}>
            <b>SAT AUSHADH</b> are artisan blends, infused with herbs consistent
            with Ayurvedic principles and mixed in perfect proportions to give
            you a refreshing delectable taste.
            <br />
            <br />
            When you buy this blend , you also support ethical farming
            practices, and farmers who work hard under tough hilly or
            mountainous conditions to bring you authentic products without
            harming Mother Nature.
            <br />
            <br />
            SAT <b>AUSHADH</b> draws inspiration from "Bansi Gir Gaushala", and
            its work towards reviving Bharat’s ancient “Gau Sanskriti”. We
            believe ancient Bharat holds the solution to many of the challenges
            facing humanity today.
            <br />
            <br />
            SAT <b>AUSHADH</b> mission is to change the way people think about
            food and beverage, bringing simple Ayurvedic wisdom back into
            people’s lives. Our brand aims to recreate the same purity and
            authenticity that is characteristic of ancient Bharat. While doing
            so, we help people empower farmers who are the cornerstone of
            "Bharatiya Gau Sanskriti"
            <br />
            <br />
          </Box>
          <Heading textAlign={"center"} color={"text.500"} fontSize={{md:"27px",base:22}}>
            Know more About our Parent Company
          </Heading>
          <Image
            mx={"auto"}
            w={"80%"}
            src={require("../assets/About us/suryan organic dada.jpg")}
          />
          <Text color={"text.300"} my={8} textAlign={"justify"} >
            Our parent Suryan Organic has more than 10 years of natural farming,
            food research and development experience. We are associated with
            over 5,000 ethical and naturally growing trusted farmers, from all
            over BHARAT. We believe that if we have to make a difference in
            society, our influence must extend from the farm all the way to the
            urban household
          </Text>
          <Button
          fontWeight={700}
          color={"brand.500"}
          as={RouterLink}
          to={"https://www.suryanorganic.com/"}
          target="_blank"
          variant={"outline"}
          borderRadius={"10px"}
          borderColor={"brand.500"}
          _hover={{ bgColor: "brand.500", color: "white" }}
          mx={"auto"}
        >
          Read more
        </Button>
        </Flex>
        <hr />
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            AVAILABLE AT
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} centerContent>
          <Image
            src={require("../assets/HomaPage/our-stores.jpg")}
            w={"container.xl"}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
      </Container>
      <ScrollToTop/>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Aboutus;
