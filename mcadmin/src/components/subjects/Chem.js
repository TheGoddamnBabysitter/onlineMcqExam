import React from "react";
import { useState } from "react";
import "./Common.css";
import Chemfp from "../chapters/Chemfp";
import Chemsp from "../chapters/Chemsp";
import { useEffect } from "react";
import Popup from "../Popup";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner";
// import Popup from "../Popup";

const Chem = () => {
    const [typeArrey, setTypeArrey] = useState([]);
    const [valueArrey, setvalueArrey] = useState([]);
    const [questionImg, setQuestionImg] = useState("");
    const [version, setVersion] = useState("");
    const [subjectPaper, setSubjectPaper] = useState("");
    const [popupRightAns, setPopupRightAns] = useState("");
    const [loading, setLoading] = useState(true);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [isCalcAllowed, setIsCalcAllowed] = useState(true);

    const [isOptionImg, setIsOptionImg] = useState({
        option1: "text",
        option2: "text",
        option3: "text",
        option4: "text",
    });

    const [options, setOptions] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
    });

    const btnColorGreen = "#0f602b";
    const btnColorBlue = "#001f2b";

    // let typeArrey = [];
    // let valueArrey = [];

    useEffect(() => {
        const checkServer = async () => {
            return await fetch("https://admin-backend-65hw.onrender.com/")
                .then((res) => {
                    setLoading(false);
                    return res;
                })
                .catch((err) => console.log(err));
        };

        checkServer();
    }, []);

    const [inputCount, setinputCount] = useState(0);
    const questionDiv = document.querySelectorAll("#questionArea");
    const addInput = (e) => {
        const value = e.target.value;
        const typeArreyIndex = typeArrey.length;
        console.log(typeArreyIndex);
        if (value === "text") {
            const newArray = typeArrey;
            newArray.push("test");
            setTypeArrey(newArray);
            const newInput = document.createElement("input");

            newInput.placeholder = "text";
            newInput.id = "input" + inputCount;
            newInput.className = "textInput";
            setinputCount(inputCount + 1);

            // add the text node to the newly created div
            document.getElementById("questionArea").appendChild(newInput);

            newArray[typeArreyIndex] = value;
            setTypeArrey(newArray);
        }

        // else if (value === "image") {

        //     const newArray =typeArrey;
        //     const newInput = document.createElement("input");

        //     newInput.placeholder = "image";
        //     newInput.id = "input"+inputCount;
        //     newInput.className = "textInput";
        //     setinputCount(inputCount+1)

        //     // add the text node to the newly created div
        //     document.getElementById("questionArea").appendChild(newInput);
        //     newArray.push(value);
        //     settypeArrey(newArray)

        // }
        else if (value === "equation") {
            const newArray = typeArrey;
            newArray.push("equation");
            setTypeArrey(newArray);
            const newInput = document.createElement("input");

            newInput.placeholder = "equation";
            newInput.id = "input" + inputCount;
            newInput.className = "textInput";
            setinputCount(inputCount + 1);

            // add the text node to the newly created div
            document.getElementById("questionArea").appendChild(newInput);

            newArray[typeArreyIndex] = value;
            setTypeArrey(newArray);
        }
        // for (let i = 0; i < typeArrey.length; i++) {

        // }

        console.log("input" + inputCount);
        console.log(typeArrey, inputCount);
        console.log(typeArrey.length);
        console.log(questionDiv);
    };

    const applyQuestion = () => {
        // setTypeArrey([]);
        setvalueArrey([]);
        const newValueArray = valueArrey;
        for (let i = 0; i < typeArrey.length; i++) {
            newValueArray.push(document.getElementById(`input${i}`).value);
        }
        setvalueArrey(newValueArray);
    };

    const clearQuestion = () => {
        setvalueArrey([]);
        setTypeArrey([]);
        document.getElementById("questionArea").innerHTML = "";
        setinputCount(0);
    };

    useEffect(() => {
        console.log(version);
    }, [version]);

    const [rightAns, setrightAns] = useState("");
    const [dificulty, setdificulty] = useState("");

    // const [credentials, setCredentials] = useState({
    //     question: "",
    // });

    const click = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === "paper") {
            if (value === "chem1st") {
                document.getElementById("firstChapters").style.display = "grid";
                document.getElementById("secondChapters").style.display =
                    "none";
                console.log("1st");
            } else if (value === "chem2nd") {
                document.getElementById("firstChapters").style.display = "none";
                document.getElementById("secondChapters").style.display =
                    "grid";
                console.log("2nd");
            }
        } else if (name === "rightAns") {
            setrightAns(value);
        } else if (name === "dificulty") {
            setdificulty(value);
        }
    };
    // get chapter
    const [chapter, setChapter] = useState("");
    const selectChapter = (selectedChapter) => {
        console.log(selectedChapter);
        setChapter(selectedChapter);
    };

    //get data from the form

    const toggleImgInput = () => {
        var element = document.getElementById("hasImg");
        if (element.innerText === "Innable Image Link") {
            element.innerText = "Disable Image Link";
            document.getElementById("qimglink").disabled = false;
            document.getElementById("qimglink").placeholder =
                "Insurt Image Link";
        } else {
            element.innerText = "Innable Image Link";
            document.getElementById("qimglink").disabled = true;
            document.getElementById("qimglink").placeholder =
                "*Image Link input Disabled";
        }
    };

    const handleAddQue = async (event) => {
        event.preventDefault();

        try {
            setIsButtonLoading(true);

            const response = await fetch(
                "https://admin-backend-65hw.onrender.com/"
            );

            if (response.ok) {
                if (valueArrey.length === 0 && questionImg === "") {
                    console.log("value array is null");
                    setOptions((prevState) => ({
                        ...prevState,
                        option1: event.target.option1.value,
                        option2: event.target.option2.value,
                        option3: event.target.option3.value,
                        option4: event.target.option4.value,
                    }));
                    setQuestionImg(event.target.qimglink.value);
                    applyQuestion();
                    openPopup();
                    toast.error("Please fill all the fields");
                } else if (
                    version === "" ||
                    dificulty === "" ||
                    rightAns === "" ||
                    chapter === ""
                ) {
                    toast.error("Please fill all the fields");
                } else {
                    // applyQuestion();
                    const questionImg = event.target.qimglink.value;

                    // const question = event.target.question.value;
                    const option1 = event.target.option1.value;
                    const option2 = event.target.option2.value;
                    const option3 = event.target.option3.value;
                    const option4 = event.target.option4.value;

                    setOptions((prevState) => ({
                        ...prevState,
                        option1: event.target.option1.value,
                        option2: event.target.option2.value,
                        option3: event.target.option3.value,
                        option4: event.target.option4.value,
                    }));

                    setQuestionImg(event.target.qimglink.value);

                    const paper = event.target.paper.value;

                    const topic = event.target.topic.value;

                    const answers = [option1, option2, option3, option4];

                    //making question model
                    const set = {
                        typeArray: typeArrey,
                        valueArray: valueArrey,
                        questionImg,
                        // question,
                        answers,
                        rightAns,
                        paper,
                        chapter,
                        topic,
                        dificulty,
                        optionType: isOptionImg,
                        version: version == "bangla" ? "bang" : "eng",
                        isCalcAllowed,
                    };
                    console.log(set);

                    //   sending to node
                    fetch("https://admin-backend-65hw.onrender.com/post_qus", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(set),
                    })
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                        .catch((err) => console.log(err));
                    event.target.reset();
                    document.getElementById("firstChapters").style.display =
                        "none";
                    document.getElementById("secondChapters").style.display =
                        "none";
                    setChapter("");
                    setvalueArrey([]);
                    setTypeArrey([]);
                    document.getElementById("questionArea").innerHTML = "";
                    setinputCount(0);
                    setIsOptionImg({
                        option1: "text",
                        option2: "text",
                        option3: "text",
                        option4: "text",
                    });
                    setdificulty("");
                    closePopup();
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    toast.success("Data added successfully!");
                }
            } else {
                console.log("Request failed");
            }
            setIsButtonLoading(false);
        } catch (error) {
            console.error("Error:", error);

            setIsButtonLoading(false);
        }
    };

    // function handleChange(e) {
    //     const { name, value } = e.target;

    //     setCredentials((prevState) => ({ ...prevState, [name]: value }));

    //     console.log(credentials);
    // }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setOptions((prevState) => ({
            ...prevState,
            option1: document.getElementById("option1").value,
            option2: document.getElementById("option2").value,
            option3: document.getElementById("option3").value,
            option4: document.getElementById("option4").value,
        }));
        setQuestionImg(document.getElementById("qimglink").value);
        // setTypeArrey([]);
        // setvalueArrey([]);
        // const newValueArray = valueArrey;
        // for (let i = 0; i < typeArrey.length; i++) {
        //     newValueArray.push(document.getElementById(`input${i}`).value);
        // }
        // setvalueArrey(newValueArray);
        setIsPopupOpen(true);
        applyQuestion();
    };

    const closePopup = () => {
        setvalueArrey([]);
        setIsPopupOpen(false);
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <React.Fragment>
            <div className="subject-common-main-container">
                <div className="subject-common-container">
                    <div>
                        {/* <h2>{valueArrey[2]}</h2> */}
                        <h1>Chemistry</h1>

                        <form onSubmit={handleAddQue}>
                            <div>
                                {isPopupOpen && (
                                    <Popup
                                        onClose={closePopup}
                                        valueArray={valueArrey}
                                        typeArray={typeArrey}
                                        options={options}
                                        qimg={questionImg}
                                        isOptionImg={isOptionImg}
                                        chapter={chapter}
                                        version={version}
                                        topic={
                                            document.querySelector(
                                                ".input-topic"
                                            ).value
                                        }
                                        dificulty={dificulty}
                                        subjectPaper={subjectPaper}
                                        subject={"Chemistry"}
                                        rightAns={popupRightAns}
                                        isButtonLoading={isButtonLoading}
                                        isCalcAllowed={isCalcAllowed}
                                    />
                                )}
                            </div>
                            <h2>Question</h2>
                            <p>does the question contains image?</p>
                            <button
                                onClick={toggleImgInput}
                                type="button"
                                id="hasImg"
                            >
                                Innable Image Link
                            </button>
                            <input
                                id="qimglink"
                                type="text"
                                name="qimglink"
                                placeholder="*Image Link input Disabled"
                                disabled
                            />
                            {/* <KatexEquation equation={credentials.question} /> */}
                            <button
                                className="add-btn"
                                type="button"
                                value={"text"}
                                onClick={addInput}
                            >
                                add text input
                            </button>
                            <button
                                className="add-btn"
                                type="button"
                                value={"equation"}
                                onClick={addInput}
                            >
                                add equation input
                            </button>
                            {/* <button type="button" value={"image"} onClick={addInput}>add image input</button> */}
                            <div id="questionAreaDiv">
                                <div id="questionArea">
                                    <h3>set the question part</h3>
                                </div>
                                {/* <button
                                    className="queBtn"
                                    onClick={applyQuestion}
                                    type="button"
                                >
                                    Test Question
                                </button> */}
                                <button
                                    className="queBtn"
                                    onClick={clearQuestion}
                                    type="button"
                                >
                                    Re-write Question
                                </button>
                            </div>
                            <br></br>
                            <h2>1st Option</h2>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option1 === "image"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option1"
                                    ).placeholder = "Drop Image";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option1: "image",
                                    }));
                                }}
                            >
                                Change to Image
                            </button>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option1 === "text"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option1"
                                    ).placeholder = "Drop Text";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option1: "text",
                                    }));
                                }}
                            >
                                Change to Text
                            </button>{" "}
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option1 === "equation"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option1"
                                    ).placeholder = "Drop Equation";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option1: "equation",
                                    }));
                                }}
                            >
                                Change to Equation
                            </button>
                            <input
                                id="option1"
                                type="text"
                                name="option1"
                                placeholder="Drop Text"
                            />
                            <br></br>
                            <br />
                            <h2>2nd Option</h2>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option2 === "image"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option2"
                                    ).placeholder = "Drop Image";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option2: "image",
                                    }));
                                }}
                            >
                                Change to Image
                            </button>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option2 === "text"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option2"
                                    ).placeholder = "Drop Text";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option2: "text",
                                    }));
                                }}
                            >
                                Change to Text
                            </button>{" "}
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option2 === "equation"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option2"
                                    ).placeholder = "Drop Equation";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option2: "equation",
                                    }));
                                }}
                            >
                                Change to Equation
                            </button>
                            <input
                                type="text"
                                id="option2"
                                name="option2"
                                placeholder="Drop Text"
                            />
                            <br></br> <br />
                            <h2>3rd Option</h2>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option3 === "image"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option3"
                                    ).placeholder = "Drop Image";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option3: "image",
                                    }));
                                }}
                            >
                                Change to Image
                            </button>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option3 === "text"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option3"
                                    ).placeholder = "Drop Text";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option3: "text",
                                    }));
                                }}
                            >
                                Change to Text
                            </button>{" "}
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option3 === "equation"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option3"
                                    ).placeholder = "Drop Equation";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option3: "equation",
                                    }));
                                }}
                            >
                                Change to Equation
                            </button>
                            <input
                                id="option3"
                                type="text"
                                name="option3"
                                placeholder="Drop Text"
                            />
                            <br></br>
                            <br />
                            <h2>4th Option</h2>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option4 === "image"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Image";
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Image";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option4: "image",
                                    }));
                                }}
                            >
                                Change to Image
                            </button>
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option4 === "text"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Text";
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Text";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option4: "text",
                                    }));
                                }}
                            >
                                Change to Text
                            </button>{" "}
                            <button
                                className="add-btn"
                                type="button"
                                style={{
                                    background:
                                        isOptionImg.option4 === "equation"
                                            ? btnColorGreen
                                            : btnColorBlue,
                                }}
                                onClick={() => {
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Equation";
                                    document.getElementById(
                                        "option4"
                                    ).placeholder = "Drop Equation";
                                    setIsOptionImg((prevState) => ({
                                        ...prevState,
                                        option4: "equation",
                                    }));
                                }}
                            >
                                Change to Equation
                            </button>
                            <input
                                id="option4"
                                type="text"
                                name="option4"
                                placeholder="Drop Text"
                            />
                            <br></br>
                            <div className="input-radio-container">
                                <h2>Right Answer:</h2>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setPopupRightAns("1st");
                                        }}
                                        type="radio"
                                        name="rightAns"
                                        value="1"
                                    ></input>
                                    1st
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setPopupRightAns("2nd");
                                        }}
                                        type="radio"
                                        name="rightAns"
                                        value="2"
                                    ></input>
                                    2nd
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setPopupRightAns("3rd");
                                        }}
                                        type="radio"
                                        name="rightAns"
                                        value="3"
                                    ></input>
                                    3rd
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setPopupRightAns("4th");
                                        }}
                                        type="radio"
                                        name="rightAns"
                                        value="4"
                                    ></input>
                                    4th
                                </div>
                            </div>
                            <div className="input-radio-container">
                                <h2>Version:</h2>
                                <div className="radioInput">
                                    <input
                                        onClick={() => setVersion("bangla")}
                                        type="radio"
                                        name="version"
                                        value="bangla"
                                    ></input>
                                    Bangla
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={() => setVersion("english")}
                                        type="radio"
                                        name="version"
                                        value="english"
                                    ></input>
                                    English
                                </div>
                            </div>
                            <div className="input-radio-container">
                                <h2>Paper:</h2>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setSubjectPaper("1st");
                                        }}
                                        type="radio"
                                        name="paper"
                                        value="chem1st"
                                    ></input>
                                    1st
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => {
                                            click(e);
                                            setSubjectPaper("2nd");
                                        }}
                                        type="radio"
                                        name="paper"
                                        value="chem2nd"
                                    ></input>
                                    2nd
                                </div>
                            </div>
                            <div className="input-radio-container">
                                <h2>Calculator Allowed:</h2>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => setIsCalcAllowed(true)}
                                        type="radio"
                                        name="calc"
                                        value="isCalcAllowed"
                                    ></input>
                                    Yes
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={(e) => setIsCalcAllowed(false)}
                                        type="radio"
                                        name="calc"
                                        value="isCalcAllowed"
                                    ></input>
                                    No
                                </div>
                            </div>
                            {/* <input type="text" name='chapter' placeholder='chapter'/><br></br> */}
                            <h3>Select Chapter : {chapter}</h3>
                            <div id="firstChapters">
                                {/* <Fisrt onClick={selectChapter}></Fisrt> */}
                                <Chemfp onClick={selectChapter}></Chemfp>
                            </div>
                            <div id="secondChapters">
                                {/* <Second onClick={selectChapter}></Second> */}
                                <Chemsp onClick={selectChapter}></Chemsp>
                            </div>
                            <input
                                type="text"
                                name="topic"
                                placeholder="Topic Name"
                                className="input-topic"
                            />
                            <br></br>
                            <div className="input-radio-container">
                                <h2>Dificulty :</h2>
                                <div className="radioInput">
                                    <input
                                        onClick={click}
                                        type="radio"
                                        name="dificulty"
                                        value="easy"
                                    ></input>
                                    Easy
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={click}
                                        type="radio"
                                        name="dificulty"
                                        value="medium"
                                    ></input>
                                    Medium
                                </div>
                                <div className="radioInput">
                                    <input
                                        onClick={click}
                                        type="radio"
                                        name="dificulty"
                                        value="hard"
                                    ></input>
                                    Hard
                                </div>
                            </div>
                        </form>
                        <button className="btn-sub" onClick={openPopup}>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Chem;
