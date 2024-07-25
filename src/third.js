function Third(){
    const dept = ["ai","ece","cse","it"];
    const deptList=dept.map((dept,index) => <li key={index}>{dept}</li>);
    return (
        <div>
            <h1>list of dept</h1>
            <ul>{deptList}</ul>
        </div>
    );
}
export default Third;