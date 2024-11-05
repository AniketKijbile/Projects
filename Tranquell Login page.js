document.getElementById("send-otp").addEventListener("click", function() {
    const mobile = document.getElementById("mobile").value;
    const mobileError = document.getElementById("mobile-error");

    if (!validateMobile(mobile)) {
        mobileError.textContent = "Please enter a valid mobile number.";
    } else {
        mobileError.textContent = "";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("otp-form").style.display = "block";
    }
});

document.getElementById("verify-otp").addEventListener("click", function() {
    const otp = document.getElementById("otp").value;
    const otpError = document.getElementById("otp-error");

    if (otp === "1111") {
        otpError.className = "success-message";
        otpError.textContent = "OTP is verified successfully.";
    } else {
        otpError.className = "error-message";
        otpError.textContent = "Invalid OTP, please enter valid OTP.";
    }
});

function validateMobile(mobile) {
    const mobilePattern = /^[6-9][0-9]{9}$/;
    return mobilePattern.test(mobile);
}