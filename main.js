import "./src/scss/main.scss";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { mountNav } from "./src/components/nav/navComp.js";
import { mountIntroContent } from "./src/components/intro/introContentComp.js";
import { mountIntroCarousel } from "./src/components/intro/introCarouselComp.js";
import { mountOfferContent } from "./src/components/offer/offerContentComp.js";
import { mountOfferCards } from "./src/components/offer/offerCardsComp.js";
import { mountAboutCarousel } from "./src/components/about/aboutCarouselComp.js";
import { mountAboutContent } from "./src/components/about/aboutContentComp.js";
import { mountFooter } from "./src/components/footer/footerComp.js";
import { mountRealizationsFade } from "./src/components/realizations/realizationsFadeComp.js";
import { mountRealizationsGallery } from "./src/components/realizations/realizationsGalleryComp.js";
import { mountContact } from "./src/components/contact/contactComp.js";
import { mountNavEvents } from "./src/js/nav.js";
import { Inspirations } from "./src/js/inspirations.js";
import { MasonryBuilder } from "./src/js/masonry.js";
import { mountGallery } from "./src/js/gallery.js";

// mount nav
mountNav();
mountNavEvents();

//mount intro section
mountIntroContent();
mountIntroCarousel();

// mount offer section
mountOfferContent();
mountOfferCards();

// mount about section
mountAboutCarousel();
mountAboutContent();

// mount realizations section
mountRealizationsFade();
mountRealizationsGallery();

// mount contact section
mountContact();

// mount footer
mountFooter();

const inspirations = new Inspirations();

// get base inspirations for masonry
inspirations
  .getInspirations()
  // layout base masonry inspirations
  .then((result) => {
    MasonryBuilder(result);
    mountGallery();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// handle masonry expand button
document.querySelector(`.fading-layer .button-outline-black`).addEventListener("click", () => {
  inspirations
    .getInspirations(3)
    // lay out next (@param) masonry inspirations
    .then((result) => {
      MasonryBuilder(result);
      mountGallery();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
