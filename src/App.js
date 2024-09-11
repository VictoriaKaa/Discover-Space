import "./App.scss";
import offerImg1 from "./assets/images/space2.svg";
import offerImg2 from "./assets/images/space3.svg";
import offerImg3 from "./assets/images/space4.svg";
import offerImg4 from "./assets/images/space5.svg";

function App() {
  const offers = [
    {
      name: "Move the borders of reality!",
      description: "Go on a space adventure - it's possible with us!",
      shortDescription: "Go on a space adventure",
      long: true,
      image: offerImg1,
    },
    {
      name: "Space is not just stars and planets",
      description: "Go on a space adventure",
      long: false,
      image: offerImg2,
    },
    {
      name: "For those who dream of stars ",
      description: "Our offer: make your dream come true",
      long: false,
      image: offerImg3,
    },
    {
      name: "Fulfill your fantastic dreams",
      description: "Space has never been so close",
      long: true,
      image: offerImg4,
    },
  ];

  const mapOffers = (offers) => {
    return offers.map((offer) => (
      <div
        key={offer.name}
        className={`offers__card ${offer.long ? "offers__card--long" : ""}`}
        style={{
          backgroundImage: `linear-gradient(transparent, rgb(15, 20, 32, 0.79)), url(${offer.image})`,
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="offers__card--content">
          <div className="offers__card--content--name">{offer.name}</div>
          <div className="offers__card--content--description">
            {window.matchMedia("(max-width: 768px)") && offer.shortDescription
              ? offer.shortDescription
              : offer.description}
          </div>
          <button className="offers__card--content--button button">
            Learn more
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__menu">
          <div className="header__menu--item">Home</div>
          <div className="header__menu--item">Products</div>
          <div className="header__menu--button"></div>
        </div>
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb-menu" for="side-menu">
          <div className="hamb-menu">
            <span className="hamb-line"></span>
          </div>
        </label>
        <div className="mobile-menu">
          <div className="header__menu--item">Home</div>
          <div className="header__menu--item">Products</div>
          <div className="header__menu--button"></div>
        </div>
      </header>

      <div className="banner">
        <div className="banner__content">
          <div className="banner__content--name">
            <span>Discover the vast expanses of&nbsp;</span>
            <span className="name-pink">space</span>
          </div>
          <div className="banner__content--description">
            <span>Where the possibilities are&nbsp;</span>
            <span className="name-yellow">endless!</span>
          </div>
          <button className="button button--filled">Learn more</button>
        </div>
      </div>

      <div className="offers">
        <div>
          <div className="offers__title">Offers</div>
          <div className="offers__content">{mapOffers(offers)}</div>
        </div>
      </div>

      <div className="info">
        <div className="info__inner">
          <div className="info--title">Embark on a space journey</div>
          <div className="info--description">
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </div>
          <div className="info--button">Read more</div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__description">
          <div className="footer__description--img"></div>
          <span>Exciting space adventure</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
