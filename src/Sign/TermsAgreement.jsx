import { useState } from "react";
import "../Style/TermsAgreement.css";

function TermsAgreement() {
    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        if (agreed) {
            alert("약관에 동의하셨습니다!");
        } else {
            alert("약관에 동의해주세요.");
        }
    };

    return (
        <div className="terms-agreement-page">
            <div className="terms-agreement-container">
                <h1 className="terms-agreement-title">간편 약관 동의</h1>
                <div className="terms-agreement-box">
                    <p>서비스 이용을 위해 아래 약관에 동의해 주세요.</p>

                    <div className="terms-content-box">
                        <h3>[필수] 간편 로그인 이용 약관</h3>
                        <p><strong>제1조 (목적)</strong><br />
                            본 약관은 이용자가 체인카(이하 "회사")의 간편 로그인 서비스를 이용함에 있어 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

                        <p><strong>제2조 (수집 항목)</strong><br />
                            간편 로그인 이용 시 회사는 다음의 개인정보를 수집할 수 있습니다: 이름, 휴대폰 번호, 이메일 주소, 소셜 로그인 고유 식별자(ID 등).</p>

                        <p><strong>제3조 (개인정보의 이용 목적)</strong><br />
                            수집된 개인정보는 로그인 및 사용자 식별, 중고차 거래 서비스 제공, 본인 인증 등의 목적으로 사용됩니다.</p>

                        <p><strong>제4조 (개인정보의 제3자 제공)</strong><br />
                            회사는 법령에 특별한 규정이 있는 경우를 제외하고는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 수집된 정보는 이용 목적 달성 후 지체 없이 파기됩니다.</p>

                        <p><strong>제5조 (개인정보 보호 조치)</strong><br />
                            회사는 개인정보의 안전한 처리를 위하여 관련 법령에 따라 기술적·관리적 보호 조치를 이행합니다.</p>

                        <p><strong>제6조 (동의의 필요성)</strong><br />
                            이용자가 본 약관에 동의하지 않을 경우 간편 로그인 기능의 사용이 제한될 수 있습니다. 간편 로그인 기능을 이용하기 위해서는 본 약관에 대한 동의가 필요합니다.</p>
                    </div>

                    <label className="terms-checkbox-label">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <span className="terms-custom-checkbox" />
                        <span className="terms-text">[필수] 이용 약관에 동의합니다.</span>
                    </label>
                </div>
                <div className="terms-button-container">
                    <button className="terms-submit-button" onClick={handleAgree}>
                        동의하고 계속하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TermsAgreement;