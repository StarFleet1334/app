import React from "react";
import '../../styles/LoginModal.css'; 

function LoginModel({isOpen,onClose}) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>×</button>
                <h3 className="heading">შესვლა</h3>
                <div className="group_3">
                    <label htmlFor="input-email" className="input-label">ელ-ფოსტა</label>
                    <input type="text" name="input-email" id="input-email" placeholder="Example@redberry.ge"/>
                </div>
                <button className="modal-submit-button">შესვლა</button>
            </div>
    </div>
    );
}

export default LoginModel

