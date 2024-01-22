const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node running ");
});

// app.get('/phy_qus', (req, res)=>{
//     res.send("physics")
// })
//connect with mongodb database

const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// insurt data
async function run() {
    // const database = client.db("physics1st");
    // const cullection = database.collection("1");

    // get api
    app.get("/:subject/:version/:chapter/:dificulty", async (req, res) => {
        const chapter = req.params.chapter;
        const version = req.params.version;
        const subject = req.params.subject;
        const dificulty = req.params.dificulty;
        const test = `${subject + "-" + version}`;
        const database = client.db(`${subject + "-" + version}`);

        const cullection = database.collection(`C${chapter}-${dificulty}`);
        const cursor = cullection.find({});
        const questions = await cursor.toArray();
        res.send(questions);
        // res.send(test);
    });

    // all post
    try {
        app.post("/post_qus", async (req, res) => {
            console.log("called");
            const doc = req.body;
            console.log(doc);
            const database = client.db(
                `regex-eng-${doc.paper + "-" + doc.version}`
            );
            const chapter = database.collection(
                `c${doc.chapter}-${doc.dificulty}`
            );

            // destruing the data
            const {
                typeArray,
                valueArray,
                questionImg,
                answers,
                rightAns,
                paper,
                chapter: chapterNo,
                topic,
                dificulty,
                optionType,
                version,
                isCalcAllowed,
            } = doc;

            // set new question array from typeArray and valueArray
            const question = [
                ...typeArray.map((type, index) => {
                    return {
                        type: type,
                        value: valueArray[index],
                    };
                }),
            ];
            console.log(question);
            const new_options = answers.map((ans, index) => {
                return {
                    type: optionType[`option${index + 1}`],
                    value: ans,
                };
            });

            const newDoc = {
                question,
                questionImg,
                options: new_options,
                rightAns,
                // paper,
                // chapter: chapterNo,
                topic,
                // dificulty,
                // version,
                isCalcAllowed,
            };

            const result = await chapter.insertOne(newDoc);
            console.log(
                `A document was inserted with the _id: ${result.insertedId}`
            );

            app.get("/phy_qus", (req, res) => {
                res.send(doc);
            });
        });
    } finally {
        //   await client.close();
    }

    //   // Math post

    // try {
    //   // const database = client.db("math1st");
    //   // const chapter1 = database.collection("chapter1");
    //   // create a document to insert
    //   app.post("/math_qus", async(req, res)=>{
    //     console.log("called");
    //     // console.log(req.body);
    //     const doc = req.body
    //     console.log(doc);
    //     const database = client.db(`${doc.paper}`);
    //     const chapter = database.collection(`${doc.chapter}`);
    //     const result = await chapter.insertOne(doc);
    //   console.log(`A document was inserted with the _id: ${result.insertedId}`);
    // })

    // } finally {
    // //   await client.close();
    // }

    //       // Chem post

    //       try {
    //         // const database = client.db("math1st");
    //         // const chapter1 = database.collection("chapter1");
    //         // create a document to insert
    //         app.post("/chem_qus", async(req, res)=>{
    //           console.log("called");
    //           // console.log(req.body);
    //           const doc = req.body
    //           console.log(doc);
    //           const database = client.db(`${doc.paper}`);
    //           const chapter = database.collection(`${doc.chapter}`);
    //           const result = await chapter.insertOne(doc);
    //         console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //       })

    //       } finally {
    //       //   await client.close();
    //       }
}
run().catch(console.dir);

app.get("/phy_qus/:chapter", (req, res) => {
    const chapter = parseInt(req.params.chapter);

    const selectedChapter =
        questions.find((qus) => qus.chapter === chapter) || {};
    res.send(selectedChapter);
});

app.listen(port, () => {
    console.log(`connected to node http://localhost:${port}/`);
});
