import React,{useState} from 'react'
// import xml2js from "xml2js";
import { parseString } from "xml2js";  
import { js2xml, xml2js } from "xml-js";


export default function Textforms(props) {
    const [upcase, setUpCase] = useState("Enter Text to Analyze");
    const onCaseChange = (e)=>{
        setUpCase(e.target.value);
        console.log("onCaseChange executed");
    }
    const ConvertUpperCase = ()=>{
        setUpCase(upcase.toUpperCase()); 
        console.log("Clicked");
        props.showAlert("Converted to Upper case ","success");
    }
    const RemoveExtraSpace = ()=>{
        let textString = upcase.split(/\s+/).join(' ');
        setUpCase(textString);
        console.log(upcase.split(/\s+/).join(''));   
        console.log(textString);
        props.showAlert("Extra spaces removed  ","success");
    }
    const ConvertLowerCase = ()=>{
        setUpCase(upcase.toLowerCase()); 
        console.log("Clicked");
        props.showAlert("Converted to Lower case ","success");
    }
    const convertToJSON = () => {
      try {
        const result = xml2js(upcase, {
          compact: true,
          ignoreComment: true,
        });
    
        
        const flattenResult = (obj) => {
          if (typeof obj === 'object') {
            for (const key in obj) {
              if (key === '_text') {
                return obj[key];
              } else if (typeof obj[key] === 'object') {
                obj[key] = flattenResult(obj[key]);
              }
            }
          }
          return obj;
        };
    
        const flattenedResult = flattenResult(result);
    
        setUpCase(JSON.stringify(flattenedResult, null, 2));
        props.showAlert("Converted from XML to JSON ","success");
      } catch (error) {
        console.log("Error generated");
        props.showAlert("Error occured while converting from XML to JSON  ","danger");
      }
    }
    const ConvertJsonToXml = ()=>{
        try {
            const jsonObj = JSON.parse(upcase);
            const xmlString = js2xml(jsonObj, { compact: true, ignoreComment: true, spaces: 4 });
            console.log(xmlString);
            setUpCase(xmlString);
            props.showAlert("Converted to XMl from JSON ","success");
          } catch (error) {
            console.error('Error converting JSON to XML:', error);
            props.showAlert("Error occured while converting from JSON to XML ","danger");
          }
    }
    const HandleClearScreen = ()=>{
      setUpCase("");
      props.showAlert("Screen cleared ","success");
    }
    const HandleTextAnalysis = ()=>{
      let textanalysis="";
      setUpCase(upcase.split(" ").length);
      props.showAlert("Text analysis completed!","success");
    }
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={upcase} onChange={onCaseChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
    
        <button type="button" className="btn btn-info mx-1 my-1" onClick={ConvertUpperCase}>Uppercase</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={ConvertLowerCase}>Lowercase</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={RemoveExtraSpace}>Remove Extra Space</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={ConvertJsonToXml}>Json to XML</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={convertToJSON}>XML to Json</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={HandleTextAnalysis}>Text Analysis</button>
        <button type="button" className="btn btn-info mx-1 my-1" onClick={HandleClearScreen}>Clear Screen</button>
        <p>{upcase}</p>
    </div>
  )
}
