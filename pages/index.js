import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">Luxury & Exotic Car Rental Miami</div>
          <nav>
            <li>Home</li>
            <li>Cars</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Reserve Now!</li>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <h1>Luxury & Exotic Car Rentals Miami</h1>
          <button>Reserve Your Car Today!</button>
        </div>
        <section>
          <div className="container">
            <h2>Welcome to Luxury Exotic Car Rentals Miami</h2>
            <p>
              Unearth a driving experience like no other in the heart of Miami.
              At Luxury Exotic Car Rentals Miami, we believe that every journey
              should be as extraordinary as the destination itself. Our
              handpicked fleet of elite vehicles promises more than just a ride;
              they offer an immersive venture into opulence and power.
            </p>
            <p>
              Whether you're looking to make a lasting impression, celebrate a
              special occasion, or simply indulge in the thrill of commanding
              the road's most prestigious machines, we've got the perfect luxury
              vehicle waiting for you.
            </p>
            <p>
              From the roaring symphony of a Lamborghini Aventador to the
              timeless elegance of the Rolls-Royce Phantom, every car in our
              collection is maintained to the highest standard, ensuring a
              driving experience that's unparalleled in quality and excitement.
            </p>
            <p>
              Discover Miami in its fullest grandeur. Navigate its iconic
              streets, bask in its vibrant culture, and let every moment behind
              the wheel be a memory etched in luxury.
            </p>
            <p>
              Join us in redefining travel. Luxury Exotic Car Rentals Miami —
              where your journey meets extravagance.
            </p>
            <button>Reserve Your Car Today!</button>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Our Luxury & Exotic Cars For Rent In Miami</h2>
            <div className="car">
              <h3>Lamborghini Aventador</h3>
              <p>
                Unleash a symphony of power and precision as you dominate the
                streets, turning heads and igniting envy in every rev
              </p>
            </div>
            <div className="car">
              <h3>Lamborghini Aventador</h3>
              <p>
                Unleash a symphony of power and precision as you dominate the
                streets, turning heads and igniting envy in every rev of the
                Aventador's heart-pounding engine.
              </p>
            </div>
            <div className="car">
              <h3>Ferrari 488 Spider</h3>
              <p>
                Feel the exhilarating rush of adrenaline as the 488 Spider
                connects you to the road, transforming every curve and
                straightaway into a testament of pure driving passion.
              </p>
            </div>
            <div className="car">
              <h3>Rolls-Royce Phantom</h3>
              <p>
                Experience the epitome of luxury in the Phantom, where every
                journey becomes an opulent affair, and the world seems to pause,
                acknowledging your grandeur.
              </p>
            </div>
            <div className="car">
              <h3>Bentley Continental GT</h3>
              <p>
                Dive into an ocean of elegance and performance with the
                Continental GT, where every drive feels like a first-class
                voyage into unmatched sophistication.
              </p>
            </div>
            <div className="car">
              <h3>McLaren 720S</h3>
              <p>
                Challenge the essence of speed with the 720S, as it effortlessly
                merges groundbreaking technology and design, propelling you into
                a future where you command the road.
              </p>
            </div>
            <button>See More Of Our Cars</button>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Popular Places to Floss in Miami Your Luxury Car</h2>
            <div className="places">
              <h3>Ocean Drive</h3>
              <p>
                Vibe: Experience the iconic heart of Miami Beach in style,
                cruising past historic Art Deco buildings, vibrant cafes, and
                the shimmering Atlantic coastline.
              </p>
              <div className="places">
                <h3>Ocean Drive</h3>
                <p>
                  Vibe: Experience the iconic heart of Miami Beach in style,
                  cruising past historic Art Deco buildings, vibrant cafes, and
                  the shimmering Atlantic coastline.
                </p>
              </div>
              <div className="places">
                <h3>Ocean Drive</h3>
                <p>
                  Vibe: Experience the iconic heart of Miami Beach in style,
                  cruising past historic Art Deco buildings, vibrant cafes, and
                  the shimmering Atlantic coastline.
                </p>
              </div>
            </div>
            <button>See More Places to Floss</button>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>About Us</h2>
            <p>
              From the sun-kissed avenues of South Beach to the opulent corners
              of Coral Gables, Miami is a city that pulsates with vivacity and
              style. Amidst this backdrop of elegance, Luxury Exotic Car Rental
              Miami emerged in [year of establishment], aiming to redefine the
              driving experience in this vibrant city.
            </p>
            <p>
              Founded by [Founder's Name], a car enthusiast with a vision, our
              company was built upon the passion for not just cars but for
              delivering unparalleled experiences. Over the years, we've gone
              beyond the mere transaction of renting a car; we curate journeys
              that embody the essence of Miami's luxurious lifestyle.
            </p>
            <button>Read More About Us</button>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Why Rent Exotic Cars From Us</h2>
            <div className="why">
              <div className="reason">
                <h3>Premier Selection of Vehicles</h3>
                <p>
                  Luxury Exotic Car Rentals Miami boasts an unrivaled fleet of
                  the world’s most prestigious exotic and luxury vehicles.
                  Whether you're desiring the thrill of a Ferrari, the opulence
                  of a Rolls-Royce, or the innovation of a Tesla, we have a
                  meticulously maintained car to match your taste.
                </p>
              </div>
              <div className="reason">
                <h3>Exceptional Customer Service</h3>
                <p>
                  Our dedicated team is passionate about providing you with a
                  first-class experience. From when you inquire about a booking
                  to when you return the car, we are here to cater to your every
                  need, ensuring a seamless and memorable rental experience.
                </p>
              </div>
              <div className="reason">
                <h3>Transparent Pricing with No Hidden Fees</h3>
                <p>
                  Unlike many car rental services, we pride ourselves on
                  transparency. The price we quote is the price you pay. There
                  are no unexpected charges or hidden fees. Plus, our
                  competitive rates ensure you're getting unmatched value for
                  the luxury you experience.
                </p>
              </div>
              <div className="reason">
                <h3>Convenient Delivery & Pickup Service</h3>
                <p>
                  We offer personalized delivery and pickup services for added
                  convenience. Whether you're at a hotel, residence, or the
                  airport, we'll bring the car to your doorstep, ensuring you
                  can dive into your Miami adventure without a hitch.
                </p>
              </div>
              <div className="reason">
                <h3>Trusted by Locals and Celebrities Alike</h3>
                <p>
                  Our reputation in Miami speaks volumes. We've served a diverse
                  clientele, from local professionals to international
                  celebrities. Our consistent delivery of quality, discretion,
                  and professionalism have made us the go-to choice for luxury
                  car rentals in the city.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>
              Frequently Asked Questions About Renting Exotic Cars in Miami
            </h2>
            <div className="faq">
              <h3>What are the requirements to rent an exotic car in Miami?</h3>
              <p>
                To rent an exotic car in Miami, you must be at least 25 years
                old, have a valid driver's license, and provide proof of
                insurance. Some models might have specific additional
                requirements.
              </p>
            </div>
            <div className="faq">
              <h3>
                How do I reserve a car with Luxury Exotic Car Rentals Miami?
              </h3>
              <p>
                Reserving your luxury vehicle is a simple process. Start by
                browsing our online catalog to select the car of your dreams.
                Once you've made your choice, either book directly through our
                online portal or call our dedicated reservation team. They'll
                guide you through the reservation steps, ensuring a seamless
                booking experience.
              </p>
            </div>
            <div className="faq">
              <h3>
                Do I need a special type of insurance to rent an exotic car?
              </h3>
              <p>
                While your regular auto insurance may cover rentals, we
                recommend contacting your insurance provider to ensure coverage
                for high-value, exotic vehicles. Additionally, we offer
                supplemental insurance options at the time of rental.
              </p>
            </div>
            <div className="faq">
              <h3>What documents do I need to rent a luxury car?</h3>
              <p>
                You'll need a valid driver's license (international if you're
                from outside the U.S.), proof of insurance, and a major credit
                card. Some rentals may require additional documentation, but our
                team will inform you in advance if that's the case.
              </p>
            </div>
            <div className="faq">
              <h3>Are there age restrictions to rent an exotic car?</h3>
              <p>
                Yes, renters must typically be at least 25 years old. However,
                for certain high-performance vehicles, the minimum age
                requirement might be higher. Always check specific age
                requirements for the car you're interested in.
              </p>
            </div>
            <div className="faq">
              <h3>How is the pricing determined for renting an exotic car?</h3>
              <p>
                Pricing is based on the specific car model, rental duration, and
                the time of year. Special promotions or seasonal rates may
                apply.
              </p>
            </div>
            <div className="faq">
              <h3>Are there mileage restrictions on the rental?</h3>
              <p>
                Most of our rentals come with a daily mileage limit. If you
                exceed this limit, additional charges apply. However, unlimited
                mileage packages are available upon request, so you can explore
                without boundaries.
              </p>
            </div>
            <div className="faq">
              <h3>Can I take the car outside of Florida?</h3>
              <p>
                Our luxury vehicles are meant to be enjoyed throughout Florida.
                However, if you plan to venture outside the state, please notify
                our team in advance. Additional terms and conditions might apply
                for out-of-state travel.
              </p>
            </div>
            <div className="faq">
              <h3>Do you offer any packages or guided driving experiences?</h3>
              <p>
                Yes, we offer a variety of driving packages, from scenic coastal
                drives to guided tours of Miami's most iconic spots. Inquire
                with our team for more details.
              </p>
            </div>
            <div className="faq">
              <h3>
                How is the car's condition ensured before and after the rental?
              </h3>
              <p>
                Each vehicle in our fleet undergoes rigorous and regular
                maintenance checks by certified technicians. We ensure that
                every car is in pristine condition, offering not just luxury but
                also the utmost safety.
              </p>
            </div>
            <div className="faq">
              <h3>Can you deliver the car to my location?</h3>
              <p>
                Absolutely! We offer a convenient delivery and pickup service.
                Whether you're at the airport, a hotel, or any other location in
                Miami, we'll ensure your luxury car is delivered right to your
                doorstep.
              </p>
            </div>
            <div className="faq">
              <h3>Is there a security deposit required?</h3>
              <p>
                Yes, a refundable security deposit is required for all rentals.
                The amount varies based on the car model.
              </p>
            </div>
            <div className="faq">
              <h3>What's your cancellation policy?</h3>
              <p>
                Reservations can be canceled or modified up to 72 hours before
                the rental time without incurring any charges. If you cancel
                within 72 hours, a cancellation fee, typically one day's rental,
                will apply. We recommend reviewing our detailed cancellation
                policy or speaking with a representative for specifics.
              </p>
            </div>
            <div className="faq">
              <h3>What happens if I return the car late?</h3>
              <p>
                We understand that plans can change. If you're running late,
                please notify our team as soon as possible. While we do offer a
                grace period, late returns without prior notification might
                incur additional charges.
              </p>
            </div>
            <div className="faq">
              <h3>Do the cars come with GPS or other amenities?</h3>
              <p>
                Most of our exotic cars come equipped with GPS navigation and a
                range of luxury amenities. Specific features can be confirmed
                during the booking process.
              </p>
            </div>
            <div className="faq">
              <h3>Can someone else drive the car besides me?</h3>
              <p>
                Additional drivers can be added to the rental agreement for a
                fee, provided they meet our age and licensing requirements.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <small>
            Luxury & Exotic Car Rental Miami &copy; {new Date().getFullYear()}{' '}
            All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  )
}
