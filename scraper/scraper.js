const request = require("request");
const HTMLParser = require("node-html-parser");
const fs = require("fs");

const URL = ``;

const write = (file, data) => {
    fs.appendFileSync(`data/${file}`, data);
    console.log(`${data}`);
};

const genderMap = {
    boy: "son",
    girl: "dottir",
    boygirl: "son/dottir"
};

const fetch = (page = 1) => {
    const data = {
        boy: [],
        girl: []
    };

    return new Promise((resolve, reject) => {
        request(URL + page, { gzip: true }, (error, res, body) => {
            if (error) {
                reject(error.message);
            }
            const doc = HTMLParser.parse(body);
            const names = doc.querySelectorAll("span.result-name");
            const genders = doc.querySelectorAll("span.result-gender");

            for (const i in names) {
                if (names.hasOwnProperty(i)) {
                    if (names[i].text) {
                        const name = names[i].text;
                        const gender = genders[i].classNames[1];
                        if (gender === "boygirl") {
                            data.boy.push(name);
                            data.girl.push(name);
                        } else {
                            data[gender].push(name);
                        }
                    }
                }
            }
            resolve(data);
        });
    });
};

const pageCount = 26;

(async () => {
    let boys = [];
    let girls = [];
    for (let i = 1; i <= pageCount; i++) {
        const { boy, girl } = await fetch(i);
        boys = [...boys, ...boy];
        girls = [...girls, ...girl];
    }
    write('boys.js', JSON.stringify(boys));
    write('girls.js', JSON.stringify(girls));
})()