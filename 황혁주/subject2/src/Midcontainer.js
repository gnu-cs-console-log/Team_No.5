import imageTag from "./imageTag";
function Midcontainer(){
    return (
        <div id="mid_container">
              <div id="mid_inner">
            <span id="mid_text" >
                <p><b>필수 앱</b></p>
                이 필수 앱을 통해 새로운 환경에서 <br></br>
                Windows를 체험해 보세요
            </span><br></br><br></br>
            <button id="buttonInfo">게시자 정보</button>
        </div>
        <div id="backDiv">
            <div id="backinner"><a href id="showall">모두 표시</a></div>
        <table>
            <tr>
                <td><imageTag number ={12} /></td>
                <td><imageTag number ={13} /></td>
                <td><imageTag number ={14} /></td>
                <td><imageTag number ={15} /></td>
                <td><imageTag number ={16} /></td>
                <td><imageTag number ={17} /></td>
                <td><imageTag number ={18} /></td>
                <td><imageTag number ={19} /></td>
                <td><imageTag number ={20} /></td>
                <td><imageTag number ={21} /></td>
            </tr>
        </table>
        </div>
        </div>

    );
}
export default Midcontainer;