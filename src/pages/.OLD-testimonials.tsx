export default function Testimonials() {
  return (
    <div className="slider">
      <input
        type="radio"
        name="slider"
        title="slide1"
        defaultChecked
        className="slider__nav"
      />
      <input
        type="radio"
        name="slider"
        title="slide2"
        className="slider__nav"
      />
      <input
        type="radio"
        name="slider"
        title="slide3"
        className="slider__nav"
      />
      <input
        type="radio"
        name="slider"
        title="slide4"
        className="slider__nav"
      />
      <div className="slider__inner">

        <div className="slider__contents"><i className="slider__image fa fa-codepen"></i>
          <h2 className="slider_caption">-- Charlie Werness, instructor</h2>
          <p className="slider__text">
            Great job on your final project! Your team put together a really solid
            application. Everything runs smoothly, the design is well thought out,
            and it’s clear you put a lot of effort into making it functional and
            user-friendly. The sidebar turned out really slick and fits in well to
            the responsive design. You should be proud of what you built—it’s a
            strong showcase of the skills you’ve developed. Well done!
          </p>
        </div>

        <div className="slider__contents">
          <h2 className="slider_caption">-- Bootcamp Central Grader</h2>
          <p className="slider__text">
            Nic, your project showcases significant growth in your skills,
            solidifying your status as a full-stack web developer. Take a moment to
            appreciate the remarkable integrations you've implemented across the
            front-end, back-end, and database layers. Your journey and progress are
            truly impressive, and you should be proud of your achievements.
          </p>
        </div>
        
        <div className="slider__contents">
          <h2 className="slider_caption">-- Bootcamp Central Grader</h2>
          <p className="slider__text">
            Nic, your project showcases significant growth in your skills,
            solidifying your status as a full-stack web developer. Take a moment to
            appreciate the remarkable integrations you've implemented across the
            front-end, back-end, and database layers. Your journey and progress are
            truly impressive, and you should be proud of your achievements.
          </p>
        </div>

        <div className="slider__contents">
          <h2 className="slider_caption">-- Bootcamp Central Grader</h2>
          <p className="slider__text">
            Congratulations on achieving a perfect score! Your submission is
            exceptional, reflecting a thorough understanding of the requirements and
            outstanding execution. Every aspect of your work is polished and
            well-implemented, demonstrating your technical skills and attention to
            detail. Your commitment to producing high-quality work is evident, and
            this level of excellence is something to be proud of. Keep up the
            amazing effort—you’re setting a fantastic standard!
          </p>
        </div>

        <div className="slider__contents">
          <h2 className="slider_caption">-- Bootcamp Central Grader</h2>
          <p className="slider__text">
            Absolutely excellent work on this assignment, you really created
            something solid to add to your portfolio!
          </p>
        </div>
      </div>
    </div>
  );
}
