import GetInTouchButton from "./GetInTouchButton";
import couch from "../assets/Couch.png";

function Couch() {
  return (
    <section className="couch">
      <GetInTouchButton />
      <article className="couchArticle">
        <img src={couch} alt="" />
        <div className="textWrapper">
          <p>
            ...and we'll arrange a call
            <br /> or meeting on my favourite
            <br /> red sofa at my favourite
            <br />
            co-working space.
          </p>
          <div>
            <svg
              data-bbox="34 20 132 160"
              viewBox="0 0 200 200"
              height="41"
              width="41"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
            >
              <g>
                <path d="M99.999 180a4.463 4.463 0 0 1-2.486-.756c-.644-.432-15.978-10.766-31.525-27.246C44.762 129.501 34 107.388 34 86.272 34 49.729 63.608 20 99.999 20 136.392 20 166 49.729 166 86.272c0 21.116-10.762 43.228-31.987 65.726-15.549 16.48-30.884 26.814-31.529 27.246a4.458 4.458 0 0 1-2.485.756zm0-151.002c-31.451 0-57.038 25.694-57.038 57.274 0 39.699 45.757 75.501 57.038 83.723 11.283-8.221 57.04-44.024 57.04-83.723 0-31.58-25.587-57.274-57.04-57.274z"></path>
                <path d="M99.999 111.363c-13.777 0-24.985-11.256-24.985-25.09s11.208-25.09 24.985-25.09c13.779 0 24.987 11.256 24.987 25.09s-11.208 25.09-24.987 25.09zm0-41.183c-8.835 0-16.024 7.219-16.024 16.092s7.189 16.092 16.024 16.092c8.837 0 16.026-7.219 16.026-16.092S108.836 70.18 99.999 70.18z"></path>
              </g>
            </svg>
            <span>Hackney, London, UK</span>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Couch;
