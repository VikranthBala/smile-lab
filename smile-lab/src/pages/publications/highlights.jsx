import React, { useState,useEffect } from "react";
import Title from "../../partials/Title";
import ReactLoader from "../../partials/Loading";
import CardInfo from "../../partials/Cards";
// import Addpubbut from "../../partials/addpubs"; 
const highlight = [];

const Highlights = () => {
    const [highlights,setHighlights] = useState([]);
    const [DataisLoaded,setDataLoaded] = useState(false);

    useEffect(() =>{
        const url = "http://localhost:5000/api/publications";

        const fetchCon = async() => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                setHighlights(json);
                setDataLoaded(true);

            }catch(err) {
                console.log(err)
            }
        };

        fetchCon();
    },[]);

    const divisor = (publication) => {
        if(publication.year==="2021"){
          highlight.push(publication);
        }
      }

        return (
            <React.Fragment>
            <div className="container-fluid my-5 px-5 page-fade">
            <Title title="Highlights"></Title>
            <div className="mt-5">
            {!DataisLoaded ? (
            <ReactLoader content="Loading Publications..." />
                ) : (
                highlights.map((publication, index) => (
                <div key ={index+1}>
                {divisor(publication)}
            </div>
          ))  
        )}
        <CardInfo content={highlight} />
        </div>
        </div>
        </React.Fragment>
        )   
    }

export default Highlights;
