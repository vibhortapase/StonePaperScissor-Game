import './Rules.css';
import Popup from "reactjs-popup";
const Rules = () => {

    return(
        <div className="rulesView">
          <Popup
            trigger={
              <button type="button" className="rulesBtn">
                {" "}
                Rules
                {" "}
              </button>
            }
            modal nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">
                  <img
                  className="rulesIMG"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                  <button type="button" className="closeBtn" onClick={() => close()}>
                    {" "}
                    Close{" "}
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
    )
};

export default Rules;