import imageTag from "./imageTag";
function Cardview() { 
return (
<>
    <center>
            <table id="cardTable" border="3">
                <tr>
                    <td rowspan="2" colspan="3"><imageTag number = {1} /></td>
                    <td rowspan="2" colspan="2"><imageTag number = {2} /></td>
                    <td><imageTag number = {10} /></td>
                    
                </tr>
                <tr>
                <td><imageTag number = {9} /></td>
                </tr>
                <tr>
                    <td><imageTag number = {3} /></td>
                    <td><imageTag number = {4} /></td>
                    <td><imageTag number = {5} /></td>
                    <td><imageTag number = {6} /></td>
                    <td><imageTag number = {7} /></td>
                    <td><imageTag number = {8} /></td>
                </tr>
            </table>
        </center>
        </>
    );
}
export default Cardview;