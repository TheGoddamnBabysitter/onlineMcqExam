import React from "react";

const Chemfp = (props) => {
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
            
        </React.Fragment>
    );
};

export default Chemfp;
