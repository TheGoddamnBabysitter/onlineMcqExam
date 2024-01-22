import KatexEquation from "./KatexEquation";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Popup.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Popup({
    onClose,
    valueArray,
    typeArray,
    options,
    qimg,
    isOptionImg,
    chapter,
    version,
    topic,
    dificulty,
    subjectPaper,
    subject,
    rightAns,
    isButtonLoading: isLoading,
    isCalcAllowed,
}) {
    console.log("type array" + typeArray);
    console.log("value array" + valueArray);

    return (
        <>
            <div className="popup">
                <div className="popup-overlay" onClick={onClose}></div>
                <div className="popup-content" style={{ position: "relative" }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "8px",
                            color: "red",
                            fontSize: "28px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                    <div className="quiz-set">
                        <div className="quiz-container">
                            <div className="title">
                                <h1
                                    className="quiz-question"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        width: "85%",
                                    }}
                                >
                                    {valueArray.map((value, index) => (
                                        <span className="quiz-question-mini-part">
                                            {typeArray[index] === "text" ? (
                                                // <span className="quiz-question-mini-part">
                                                <>{value}</>
                                            ) : (
                                                // </span>
                                                <KatexEquation
                                                    equation={value}
                                                />
                                            )}
                                        </span>
                                    ))}
                                </h1>
                                {qimg ? (
                                    <div id="img" className="quiz-question-img">
                                        <img src={`${qimg}`} alt=""></img>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="content">
                                <input type="radio" name="PHY1" id="one" />
                                <input type="radio" name="PHY1" id="two" />
                                <input type="radio" name="PHY1" id="three" />
                                <input type="radio" name="PHY1" id="four" />

                                <label
                                    for="one"
                                    className={`${
                                        rightAns === "1st"
                                            ? "option-right"
                                            : "option"
                                    } first`}
                                >
                                    <span className="quiz-question-mini-part">
                                        <span
                                            className={`${
                                                isOptionImg.option1 === "text"
                                                    ? "quiz-question-option"
                                                    : "quiz-question-option-equation"
                                            }`}
                                        >
                                            A.
                                        </span>
                                        {isOptionImg.option1 === "text" ? (
                                            <span>{options.option1}</span>
                                        ) : isOptionImg.option1 ===
                                          "equation" ? (
                                            <KatexEquation
                                                equation={options.option1}
                                            />
                                        ) : (
                                            <img
                                                src={options.option1}
                                                alt="option1"
                                            />
                                        )}
                                    </span>
                                </label>

                                <label
                                    for="two"
                                    className={`${
                                        rightAns === "2nd"
                                            ? "option-right"
                                            : "option"
                                    } second`}
                                >
                                    <span className="quiz-question-mini-part">
                                        <span
                                            className={`${
                                                isOptionImg.option2 === "text"
                                                    ? "quiz-question-option"
                                                    : "quiz-question-option-equation"
                                            }`}
                                        >
                                            B.
                                        </span>
                                        {isOptionImg.option2 === "text" ? (
                                            <span>{options.option2}</span>
                                        ) : isOptionImg.option2 ===
                                          "equation" ? (
                                            <KatexEquation
                                                equation={options.option2}
                                            />
                                        ) : (
                                            <img
                                                src={options.option2}
                                                alt="option2"
                                            />
                                        )}
                                    </span>
                                </label>
                                <label
                                    for="three"
                                    className={`${
                                        rightAns === "3rd"
                                            ? "option-right"
                                            : "option"
                                    } third`}
                                >
                                    <span className="quiz-question-mini-part">
                                        <span
                                            className={`${
                                                isOptionImg.option3 === "text"
                                                    ? "quiz-question-option"
                                                    : "quiz-question-option-equation"
                                            }`}
                                        >
                                            C.
                                        </span>
                                        {isOptionImg.option3 === "text" ? (
                                            <span>{options.option3}</span>
                                        ) : isOptionImg.option3 ===
                                          "equation" ? (
                                            <KatexEquation
                                                equation={options.option3}
                                            />
                                        ) : (
                                            <img
                                                src={options.option3}
                                                alt="option3"
                                            />
                                        )}
                                    </span>
                                </label>
                                <label
                                    for="four"
                                    className={`${
                                        rightAns === "4th"
                                            ? "option-right"
                                            : "option"
                                    } fourth`}
                                >
                                    <span className="quiz-question-mini-part">
                                        <span
                                            className={`${
                                                isOptionImg.option4 === "text"
                                                    ? "quiz-question-option"
                                                    : "quiz-question-option-equation"
                                            }`}
                                        >
                                            D.
                                        </span>
                                        {isOptionImg.option4 === "text" ? (
                                            <span>{options.option4}</span>
                                        ) : isOptionImg.option4 ===
                                          "equation" ? (
                                            <KatexEquation
                                                equation={options.option4}
                                            />
                                        ) : (
                                            <img
                                                src={options.option4}
                                                alt="option4"
                                            />
                                        )}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <p className="popup-info-text">
                        Subject: {subject} {subjectPaper} Paper
                    </p>
                    <p
                        className="popup-info-text"
                        style={{ fontWeight: "bold" }}
                    >
                        Chapter: {chapter}
                    </p>
                    <p
                        className="popup-info-text"
                        style={{ fontWeight: "bold" }}
                    >
                        Right Answer: {rightAns}
                    </p>
                    <p
                        className="popup-info-text"
                        style={{ textTransform: "capitalize" }}
                    >
                        Version: {version}
                    </p>
                    <p className="popup-info-text">Topic: {topic}</p>
                    <p
                        className="popup-info-text"
                        style={{ textTransform: "capitalize" }}
                    >
                        Difficulty: {dificulty}
                    </p>
                    <p
                        className="popup-info-text"
                        style={{ textTransform: "capitalize" }}
                    >
                        Calculator Allowed: {isCalcAllowed ? "Yes" : "No"}
                    </p>
                    <button
                        className="buttonload btn-sub"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <FontAwesomeIcon
                                icon={faSpinner}
                                spin
                                style={{ marginRight: "8px" }}
                            />
                        ) : null}

                        {isLoading ? "Loading" : "Submit"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Popup;
