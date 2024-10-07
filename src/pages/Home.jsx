import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "../components/ScrollToTop";

import ProductListSectionHome from "../components/ProductListSectionHome";

import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
  Divider,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";



const images = [
  {
    image1: require("../assets/HomaPage/amla.jpg"),
    id:1770
  },
  {
    image1: require("../assets/HomaPage/triphla powder.jpg"),
    id:1783
  },
  {
    image1: require("../assets/HomaPage/moringa.jpg"),
    id:1785
  },
  {
    image1: require("../assets/HomaPage/wheatgrass.jpg"),
    id:1773
  },
  {
    image1: require("../assets/HomaPage/spirulina.jpg"),
    id:1786
  },
];



const Licences = [
  // {
  //   src:require("../assets/HomaPage/apeda (1).png"),
  //   alt: "Gir Gauveda",
  //   size:180
  // },
  // {
  //   src:  require("../assets/HomaPage/fassai_2 (1).png"),
  //   alt: "So Good",
  //   size:180
  // },
  {
    src:require("../assets/HomaPage/MSME.png"),
    alt: "MSME",
    size:180
  },
  // {
  //   src:require("../assets/HomaPage/spices_board (1).png"),
  //   alt: "Himalayan Mountain",
  //   size:180
  // },
  // {
  //   src: require("../assets/HomaPage/lPCR_logo (1).png"),
  //   alt: "CoffeeCo",
  //   size:140
  // },
  // {
  //   src:require("../assets/HomaPage/aayush (1).png"),
  //   alt: "Shishu veda",
  //   size:140
  // },
];

const banner = [
  {
    id: 11,
    alt_text: "Image3",
    image: require("../assets/HomaPage/Satveda_banner.jpg"),
    display_status: true,
    image_url: null,
  },

  {
    id: 12,
    alt_text: "Image2",
    image: require("../assets/HomaPage/banner 1.jpg"),
    display_status: true,
    image_url: null,
  },

  {
    id: 13,
    alt_text: "Image3",
    image: require("../assets/HomaPage/Golden_Milk_.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 14,
    alt_text: "Image3",
    image: require("../assets/HomaPage/BANNER 2.jpg"),
    display_status: true,
    image_url: null,
  },
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState(banner);
  const [newArrival, setNewArrival] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [MustTry, setMustTry] = useState([]);
  const [BestSeller, setBestSeller] = useState([]);
  const [sections, setSections] = useState([]);
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      await CheckOrSetUDID();
       };
  
    init();
   // getHomePageData();
    getBlogs();
    getArrival();
    getMustTry();
    getBestSeller();
    getImage();
  }, []);

  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      //setBanners(response.data.banners);
      setHome(response.data);
    }
    setLoading(false);
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }
  async function getImage() {
    const params = {};
    const response = await client.get("/lower-section", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);
    }
  }

  async function getArrival () {
    const response = await client.get("newarrival/list")
      if(response) {
        setNewArrival(response.data.data)
      }
      setLoading(false);
    }
  
    async function getMustTry () {
      const response = await client.get("musttry/list")
        if(response) {
          setMustTry(response.data.data)
        }
        setLoading(false);
      }
      async function getBestSeller () {
        const response = await client.get("bestofalltime/list")
          if(response) {
            setBestSeller(response.data.data)
          }
          setLoading(false);
        }
  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners} />
        )}
      </Container>

      <Container maxW={"container.xl"} mb={8} mt={2} px={0}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
          fontWeight={500}
          bgColor={"bg.500"}
          color={"text.500"}
          textAlign={{ base: "center", md: "start" }}
          px={{ base: 2, md: 8 }}
          py={4}
          my={3}
        >
          SAT AUSHADH
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify", md: "center" }}
          px={{ base: 15, lg: 20 }}
          fontSize={{ base: "sm", lg: "lg" }}
        >
          <b>SAT Aushadh</b> is inspired by Bansi Gir Gaushala, and its mission
          to revive Bharat's ancient 'Gau Sanskriti', with its boundless gifts
          that bring joy and healing to ailing humanity. 'Sat' stands for Truth
          or pure essence, and 'Veda' for Knowledge. Inspired by ancient
          Ayurvedic wisdom, SatAushadh aims to bring you herbs of the highest
          standards of purity and authenticity.
          <br />
          <br />
          <b>SAT Aushadh</b> is supporting, "Siddha Kisan Se" which is on a
          mission to procure directly from ethical and trusted farmers of Bharat
          and further supply such naturally grown food and herbs to every home.
          <br />
          <br />
        </Text>
        <Button
          fontWeight={700}
          color={"brand.500"}
          as={RouterLink}
          to={"/about-us"}
          variant={"outline"}
          borderRadius={"10px"}
          borderColor={"brand.500"}
          _hover={{ bgColor: "brand.500", color: "white" }}
          mx={{lg:"45%",md:"42%",base:"33%"}}
        >
          Read more
        </Button>
      </Container>

      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={require("../assets/HomaPage/Sat_Ausadh.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
      </Container>
      <Container mb={5} px={{xl:"10%"}} maxW={"container.xl"} centerContent>
        <Image mb={12} src={require("../assets/HomaPage/sat_aushadh.jpg")} cursor={"pointer"} onClick={()=>navigate("/products/1783")} />
        {images.map((data) => (
          <>
          <Image src={require("../assets/HomaPage/page breker.png")} />
          <Image mt={8} src={data.image1} cursor={"pointer"} onClick={()=>navigate(`/products/${data.id}`)} />
          </>
        ))}
         <Image my={9} src={require("../assets/HomaPage/page breker.png")} />
      </Container>
      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <Image src={require("../assets/HomaPage/middle banner home page.jpg")} />
      </Container>

      <ProductListSectionHome
        title="Try Our New Products"
        loading={loading}
        products={newArrival}
      />

      <ProductListSectionHome
        title="MUST TRY : SAT AUSHADH Products"
        loading={loading}
        products={MustTry}
      />

      <ProductListSectionHome
        title="All Time Best Sellers"
        loading={loading}
        products={BestSeller}
      />
      <Container maxW={"container.xl"}>
        <Heading
          color="brand.500"
          size="lg"
          mx="auto"
          align={"center"}
          mt={3}
          pb={"10px"}
        >
          BLOGS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loading="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "brand.500" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="gray.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"brand.500"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Container backgroundColor={"bg.500"} maxW={"container.xl"} px={0} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
            19+
            </StatNumber>
            <StatHelpText color="text.500">Natural Products</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
            11534+
            </StatNumber>
            <StatHelpText color="text.500">Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
            1485+
            </StatNumber>
            <StatHelpText color="text.500">Cities & Towns</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              7+
            </StatNumber>
            <StatHelpText color="text.500">Countries</StatHelpText>
          </Stat>

         
         
         
        </SimpleGrid>
      </Container>
      <Container my={9} maxW={{ base: "100vw", md: "container.xl" }}>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            fontSize={{md:33,base:21}}
            mx="auto"
            align={"center"}
            mt={3}
          >
           {sections?.length >0 && sections[0].label}
          </Heading>
        </Box>
        <Text my={5} textAlign={"center"} color="text.300">
        We are committed to quality and each of our facilities is independently certified by an industry-accredited agency.
        </Text>
        <Flex
          justifyContent="space-evenly"
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={12}
          pt={1}
          pb={6}
        >
          <LazyLoadImage
            src={sections?.length > 0 && sections[0]?.images[0].image}
            alt="global-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
          <LazyLoadImage
             src={sections?.length > 0 && sections[0]?.images[1].image}
            alt="ciolook-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Flex>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            fontSize={{md:33,base:22}}
            mx="auto"
            align={"center"}
            my={5}
            pb={"10px"}
          >
            LICENSES & AFFILIATIONS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            xl: "repeat(1, 1fr)",
          }}
          gap={6}
          //my={10}
          px={{xl:"12%",md:10}}
          alignItems={"center"}
        >
          {Licences.map((data) => (
            <GridItem>
              <Image src={data.src} mx={"auto"} boxSize={{base:130,md:data.size}}    />
            </GridItem>
          ))}
        </Grid>
         <Image mx={"auto"} my={20} src={require("../assets/HomaPage/sataushadh(1).jpg")} w={"65%"} />
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            fontSize={{md:33,base:20}}
            mx="auto"
            align={"center"}
            my={7}
            pb={"10px"}
          >
              {sections?.length >0 && sections[1].label}
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <LazyLoadImage
             src={sections?.length > 0 && sections[1]?.images[0].image}
            w={{ base: "100%", md: "100%" }}
            alt=""
            py={4}
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Box>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
             fontSize={{md:33,base:22}}
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            {sections?.length >0 && sections[2].label}
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} px={0} centerContent>
          <Image
            src={sections?.length > 0 && sections[2]?.images[0].image}
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
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
