import profile from "../assets/Profile.png";

function Hero() {
  return (
    <section className="Hero">
      <div>
        <article>
          <img className="profileImg" src={profile} alt="" />
          <h3>My name is</h3>
          <h4>I am a</h4>
          <h2>WELCOME!</h2>
          <h1>Ellen K Stone</h1>
        </article>
      </div>
    </section>
  );
}
export default Hero;
