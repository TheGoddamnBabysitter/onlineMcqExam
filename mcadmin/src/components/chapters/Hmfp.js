import React from "react";

const Hmfp = (props) => {
    // const [chapter, setChapter]=useState("")
    const selectedChapter = (e) => {
        e.preventDefault();
        // setChapter(e.target.value)

        props.onClick(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="1">
                    Chapter one
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="2">
                    Chapter two
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="3">
                    Chapter three
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="4">
                    Chapter four
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="5">
                    Chapter five
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="6">
                    Chapter six
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="7">
                    Chapter seven
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="8">
                    Chapter eight
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="9">
                    Chapter nine
                </button>
            </div>
            <div className="radioInput">
                <button onClick={selectedChapter} className="btn" value="10">
                    Chapter ten
                </button>
            </div>
        </React.Fragment>
    );
};

export default Hmfp;
