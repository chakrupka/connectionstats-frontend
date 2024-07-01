import { useEffect } from "react";

const HelpPopup = ({ setHelpPopup }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div onClick={() => setHelpPopup(false)}>
      <div className="help-popup-context">
        <div className="help-popup-section">
          <div className="help-popup-title">Overview</div>
          <div>
            On this page, you will find a variety of different global
            leaderboards.
          </div>
        </div>

        <div className="help-popup-section">
          <div className="help-popup-title">Views</div>
          <div>
            To select a different view, click on either Today, Yesterday, or All
            Time.
          </div>
          <div>The current day resets at midnight, EST.</div>
          <div>
            When viewing All Time, click the underlined category to view other
            categories; select one from the drop-down menu to switch to it.
          </div>
        </div>

        <div className="help-popup-title">Scoring</div>
        <div>
          Games are scored based on{" "}
          <a href="https://www.nytimes.com/2024/02/19/us/how-i-designed-my-perfect-connections-solve.html">
            this article.
          </a>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          Click anywhere to exit
        </div>
      </div>
      <div className="help-popup"></div>
    </div>
  );
};

export default HelpPopup;
