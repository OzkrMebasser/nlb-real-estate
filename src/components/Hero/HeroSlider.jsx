import { Fragment } from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import NavBar from "../NavBar/NavBar";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Subtitle from "../Subtitle";


const bogliasco = "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Cancun.jpg?alt=media&token=20d1767c-77ce-43a9-bcd7-94befb6a75a9";
const countyClare = "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pexels-mati-mango-11291049.jpg?alt=media&token=0ccbeb43-6f25-4d06-9ba3-52d3f749103b";
const craterRock = "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/Cancun.jpg?alt=media&token=20d1767c-77ce-43a9-bcd7-94befb6a75a9";
const giauPass = "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/pexels-tellez-erik-15100236.jpg?alt=media&token=4da4c5bd-a65d-42db-9228-7c2751c6f27a";

export default function BasicSlider() {
  return (
    <Fragment className="mt-4">
  
    <HeroSlider
    
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      
      <Overlay>
      <NavBar/>
        <Wrapper>
          <Title>INVIERTE EN TU FUTURO</Title>
          <Subtitle>
            Tenemos los mejores proyectos de la Riviera Maya
          </Subtitle>
          
            <h6>Contactanos para darte una atención personalida</h6>
         
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Lik- Tulum"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="X desarrollo - Cancun"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="Desarrollo - Cozumel"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Aqua - Playa del Carmen"
        background={{
          backgroundImageSrc: craterRock
        }}
      />
       <Slide
        shouldRenderMask
        label="Aqua - Playa del Carmen"
        background={{
          backgroundImageSrc: craterRock
        }}
      />
       <Slide
        shouldRenderMask
        label="Aqua - Playa del Carmen"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
    </Fragment>
  );
}
