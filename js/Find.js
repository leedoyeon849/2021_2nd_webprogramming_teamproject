const find=async()=>{
  //oncklic ="find"
//인풋에 입력된 값을 가져온다
const passfind01=document.querySelector("#FindPassInput").value;
const passfind02 =document.querySelector("#SecurityCheck01").value;
const passfind03 =document.querySelector("#SecurityCheck02").value;
//비밀번호  찾기에서 입력한거 가져오는 코드
  if(passfind01,passfind02,passfind03){//입력값이 모두 들어있을 때 실행
       try{
           const respones =await axios.post("/php/find.php",{
             //객체
               passfind01:passfind01,
               passfind02:passfind02,
               passfind03:passfind03,
           });
         if(respones.data){
            if(respones.data=="실패"){
              //responde.data의 값이 "실패"가 넘어왔을경우 즉 못 찾았을 경우
                console.log("실패");
                alert("보안질문의 답이 틀렸거나 아이디가 존재하지 않습니다");  
              }else{
                //0이외의 값 즉 DB에 있는 비밀번호가 넘어왔을 경우 이다.
                //php가 정상 실행 된 경우이다.
                //비밀번호 의 값을 알려주는 창
              alert("비밀번호는 "+respones.data+" 입니다.");
              //메인 페이지로 이동
              window.open('../index.html','_self');
              }
         }
       }catch(error){
           console.log(error);
       }
   }else{//하나라도 입력이 되지 않았을경우 알림창
     alert("모두 입력했는지 확인해 주세요");
   }
};