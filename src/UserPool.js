import {CognitoUserPool} from "amazon-cognito-identity-js"

const poolData= {
    UserPoolId: "us-east-1_wqOI4e3Yf",
    ClientId: "3jd44t9kbc6uepdtgpn0699n02"
}

export default new CognitoUserPool(poolData)