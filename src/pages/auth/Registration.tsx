import "../../assets/scss/components/collector.scss"
import "../../assets/font/font.scss"
import { PriBtn, SecBtn, PasswordInput, UsernameInput, EmailInput } from "../../components/collector";

export const Registration = () => {

    return <div className="form login">
        <div className="textWrap">

            <h4 className="LT20">
                Registration Details</h4>

        </div>
        <div className="inputsWrap">
            <UsernameInput placeholder="First Name" />
            <UsernameInput placeholder="Last Name" />
            <EmailInput placeholder="Email" />
            <EmailInput placeholder="Confirm Email" />
            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Confirm Password" />
            <div className="states">
                    <h4 className="LT18">Passwords must be at least 6 characters.</h4>
            </div>

            <div className="btnsWrap">
                <PriBtn value="Login" click={() => { console.log("login") }} />
                <SecBtn value="Sign Up" click={() => { console.log("login") }} />
            </div>
        </div>

    </div>
}