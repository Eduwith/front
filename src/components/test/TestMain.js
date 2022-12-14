import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../recoil/User";

import fox2 from "../../images/testfox.png";
import styles from "./TestMain.module.css"

function TestMain(){

  const navigate = useNavigate();
  const a = useRecoilValue(nicknameState)

  const onClickEvent = (event) => {
    event.preventDefault();
    navigate("/testqna?name="+a);
  }

  return (
    <div className={styles.bdbox}>
      <div className={styles.box}>
        <div className={styles.title}>π νμ΅ μ ν νμ€νΈ β</div>
        <div className={styles.info}>5λΆλ§μ λμκ² λ± λ§λ νμ΅λ² μ°ΎκΈ°!</div>
        <div><img className={styles.fox} src={fox2} ></img></div>
        <div className={styles.info2}>λλ νΌμ κ³΅λΆνλκ² μ λ§μκΉ? κ°μ΄ κ³΅λΆνλκ² μ λ§μκΉ? </div>
        <div className={styles.info2}> μ΄λ»κ² κ³΅λΆν΄μΌν  μ§ λͺ¨λ₯΄κ² λ€λ©΄? μ§κΈ λ°λ‘ μμ μ νμ΅ μ νμ μμλ³΄μΈμ.</div>
        <button className={styles.home_button} onClick={onClickEvent}>νμ€νΈ μμνκΈ° <BsFillArrowRightCircleFill/></button>
      </div>
    </div>
  )

}

export default TestMain;