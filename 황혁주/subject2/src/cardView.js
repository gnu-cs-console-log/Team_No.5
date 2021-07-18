import ImageTag from "./ImageTag";
function Cardview() { 
return (
<>
    <div id="main_container">
    <center>
            <table className="cardTable" border="3">
                <tr>
                    <td rowspan="2" colspan="3"><ImageTag number = {1} /></td>
                    <td rowspan="2" colspan="2"><ImageTag number = {2} /></td>
                    <td><ImageTag number = {10} /></td>
                    
                </tr>
                <tr>
                <td><ImageTag number = {9} /></td>
                </tr>
                <tr>
                    <td><ImageTag number = {3} /></td>
                    <td><ImageTag number = {4} /></td>
                    <td><ImageTag number = {5} /></td>
                    <td><ImageTag number = {6} /></td>
                    <td><ImageTag number = {7} /></td>
                    <td><ImageTag number = {8} /></td>
                </tr>
            </table>
        </center>
        </div>
        </>
    );
}
export default Cardview;