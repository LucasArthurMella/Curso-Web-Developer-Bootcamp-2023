import {franc, francAll} from "franc";
import langs from "langs";

const text = process.argv[2];
const language = franc(text);

if(language === "und"){
    console.log("SORRY LANGUAGE NOT DETECTED");
}else{
    const linguaConvertida = langs.where("3", language).name;
    console.log(linguaConvertida);
}
