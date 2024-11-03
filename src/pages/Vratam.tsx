import React from "react";
import "../VratamDetails.css";
import { Helmet } from "react-helmet";

const VratamDetails: React.FC = () => {
  const requirements = [
    "Yellow Cloth",
    "Incense (Agarbathi)",
    "Flowers",
    "Diya",
    "Prasad (offering)",
    "Camphor",
    "Pasupu/Haldi",
    "Kumkum",
    "Betel Nuts",
    "Deepam/Diya oil",
    "Pooja Asanam",
    "Sandal Powder",
    "Coins",
    "Akshat",
    "Garland",
  ];
  const benefits = [
    "Child Bless",
    "To get any work done",
    "For getting your Property and Money",
    "To get money & prosperity",
    "To get Sai Baba's Darshan",
    "To attain peace",
    "To accomplish your wishes",
    "To get a chance of desired travel",
    "To attain moksha at Baba's feet",
    "To control Enemies",
    "To get success in exams",
    "To get good growth in Business",
    "To get lost love of your husband/wife",
    "To get desired materialist objective",
    "To get rid from illness",
    "To find your lost relatives or loved ones",
    "To finish your work",
    "To fulfill all your wishes",
  ];

  return (
    <div className="vratam-container">
      <Helmet>
        <title>Sai Baba Vratam Details</title>
      </Helmet>
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>

      {/* Vratam Requirements Section */}
      <h2 className="vratam-benefits-title">Vratam Requirements</h2>
      <div className="vratam-benefits-list">
        {requirements.map((requirements, index) => (
          <div key={index} className="vratam-benefit-item">
            {requirements}
          </div>
        ))}
      </div>

      {/* Vratam Benefits Section */}
      <h2 className="vratam-benefits-title">Vratam Benefits</h2>
      <div className="vratam-benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="vratam-benefit-item">
            {benefit}
          </div>
        ))}
      </div>

      {/* Fasting Procedure Section */}
      <h2 className="section-title">Fasting Procedure</h2>
      <div className="accent-line">
        <span className="accent-line-icon">🪔</span>
      </div>
      <div className="fasting-procedure">
        <p className="subheading">
          <strong>Preparation:</strong>
        </p>
        <ul>
          <li>
            Get a white cloth (e.g., handkerchief size) and dip it in
            turmeric-mixed water.
          </li>
          <li>
            On Thursday morning, after bathing, wear clean clothes and sit on a
            good cloth facing north.
          </li>
          <li>Place Shri Sai Baba’s idol or photo frame in front of you.</li>
        </ul>

        <p className="subheading">
          <strong>First Thursday Ritual:</strong>
        </p>
        <ul>
          <li>Put a sandal/kumkum tilak on Baba and offer fresh garlands.</li>
          <li>Light a lamp and incense sticks.</li>
          <li>
            Take the turmeric-painted cloth (now dried) and place a coin inside
            it. Request Shri Sai Baba to fulfill your wishes, knot the cloth
            with your wish, and place it at Baba’s feet.
          </li>
          <li>
            Decide on the number of Thursday fasts (5, 7, 9, 11, or 21) and
            commit to them.
          </li>
          <li>
            All this you have to do only on first Thursday, not every Thursday,
            from next Thursday you just need to do the pooka and read the sai
            part katha.
          </li>
        </ul>

        <p className="subheading">
          <strong>Subsequent Thursdays:</strong>
        </p>
        <ul>
          <li>
            Offer flowers, read Sai Baba’s 108 names (Ashtottaram), and recite
            the katha.
          </li>
          <li>
            Perform the Aarti and offer homemade prasad (sweets, khichadi, or
            fruits).
          </li>
          <li>
            Share the prasad with friends and family, then consume it yourself.
          </li>
        </ul>

        <p className="subheading">
          <strong>Devotion and Faith:</strong>
        </p>
        <ul>
          <li>
            If you do this fast with faith and patience and will all your
            devotion you will never face any problems in completing the fast and
            Shri Sai will fulfill all your wishes.
          </li>
        </ul>

        <p className="subheading">
          <strong>Concluding Ceremony:</strong>
        </p>
        <ul>
          <li>
            This fast will start giving you peace and make you happy in no time.
            After you complete your desired number of fasts, you should do the
            Udyapan.
          </li>
        </ul>
      </div>

      {/* Vrat Updyapan Section */}
      <h2 className="section-title">Vrat Udyapan</h2>
      <div className="accent-line">
        <span className="accent-line-icon">🪔</span>
      </div>
      <div className="fasting-procedure">
        <ul>
          <li>
            On the last Thursday fast, offer food to poor people, to animals and
            birds.
          </li>
          <li>
            After you get the results of your vrat try to spread this Vrat to
            all your relatives by giving the books to all your relatives.
          </li>
        </ul>
      </div>

      {/* Rules to remeber Section */}
      <h2 className="section-title">
        Rules to remember for "Shri Sai Baba Vrat"
      </h2>
      <div className="accent-line">
        <span className="accent-line-icon">🪔</span>
      </div>
      <div className="fasting-procedure">
        <ul>
          <li>
            Always begin this vrat with faith and confidence, and never perform
            it with ill feelings in your heart.
          </li>
          <li>
            Anyone can observe this fast, including women, men, and even
            children.
          </li>
          <li>
            When you start the vrat, make a promise to complete either 5, 7, 9,
            11, or 21 fasts.
          </li>
          <li>
            Do not remain on an empty stomach during this fast. You can have
            fruits, sweets, or any permissible food for fasting and may also
            have one full meal. Never observe this fast on an empty stomach.
          </li>
          <li>
            This is a miraculous fast; you will see your desired results if you
            complete the specified number of fasts with proper rituals.
          </li>
          <li>
            You can begin this vrat on any Thursday, placing Sai Baba’s photo or
            idol before you, lighting a lamp and incense sticks, and praying for
            your wish with a pure heart.
          </li>
          <li>
            The “Shri Sai Baba Vrat” can be observed during Shradh (the period
            when we honor our departed ancestors) or Sutak (the 13-day period
            after a relative’s passing).
          </li>
          <li>
            If you are traveling and unable to observe the fast on a Thursday,
            simply skip that Thursday and resume on the next one.
          </li>
          <li>
            If you miss a Thursday for any reason, do not worry. Just skip that
            Thursday and continue your fast the following week. Do not let
            doubts cloud your heart; continue with faith and patience.
          </li>
          <li>
            After your wish is fulfilled and you have completed the fast,
            perform the Udyapan (Finishing Ceremony). Once done, you may start
            the “Shri Sai Baba Vrat” again for a new wish, beginning on any
            Thursday.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VratamDetails;
