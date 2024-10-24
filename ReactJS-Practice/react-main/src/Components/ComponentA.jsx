import React from "react";
import ComponentB from "./ComponentB";

function ComponentA(){
    let eid=101;
    let ename="Rahul"
    return <div>
        <h2> Component A </h2>
        <hr />
        <ComponentB emp_id={eid} emp_name={ename} countries={["Ind" ,"Aus",  "Nez","Afg","Bang"]}
        />
    </div>
}

export default ComponentA