
import ImageTag from "./ImageTag";

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
                <td><ImageTag number ={12} /></td>
                <td><ImageTag number ={13} /></td>
                <td><ImageTag number ={14} /></td>
                <td><ImageTag number ={15} /></td>
                <td><ImageTag number ={16} /></td>
                <td><ImageTag number ={17} /></td>
                <td><ImageTag number ={18} /></td>
                <td><ImageTag number ={19} /></td>
                <td><ImageTag number ={20} /></td>
                <td><ImageTag number ={21} /></td>
            </tr>
        </table>
        </div>
        </div>

    );
}
export default Midcontainer;