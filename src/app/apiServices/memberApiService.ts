import { serviceApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";
import Cookie from "universal-cookie";
import { MemberLiken } from "../../types/others";

class MemberApiService {
    private readonly path: string;
    constructor() {
        this.path = serviceApi;
    }

    public async loginRequest(login_data: any) {
        try {
            const result = await axios.post(this.path + "/login", login_data, {
                withCredentials: true,
            })

            console.log("state:", result.data.state);
            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state != 'fail', result?.data?.message);

            const member: Member = result.data.data;
            localStorage.setItem("member_data", JSON.stringify(member));
            return member;
        } catch (error: any) {
            console.log(`ERROR::: loginRequest ${error.message}`);
            throw error;
        }
    }

    public async signupRequest(signup_data: any) {
        try {
            const result = await axios.post(this.path + "/signup", signup_data, {
                withCredentials: true,
            })

            console.log("state:", result.data.state);
            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state != 'fail', result?.data?.message);

            const member: Member = result.data.data;
            localStorage.setItem("member_data", JSON.stringify(member));
            return member;
        } catch (error: any) {
            console.log(`ERROR::: signUpRequest ${error.message}`);
            throw error;
        }
    }

    public async logOutRequest() {
        try {
            const result = await axios.get(this.path + "/logout", {
                withCredentials: true,
            });

            // const cookie = new Cookie();
            // if (!cookie.get("access_token")) {
            //     localStorage.removeItem("member_data");
            // }

            console.log("state:", result.data.state);

            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);
            const logout_result = result.data.state;
            return logout_result === "success";
        } catch (err: any) {
            console.log(`ERROR:: logoutRequest ${err.message} `);
            throw err;
        }
    }

    public async memberLikeTarget(data: any) {
        try {
            const url = "/member-liken",
                result = await axios.post(this.path + url, data, {
                    withCredentials: true,
                });

            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);
            console.log("like-state:", result.data.data);

            const like_result: MemberLiken = result.data.data;
            return like_result;
        } catch (err: any) {
            console.log(`ERROR:: memberLikeTarget ${err.message} `);
            throw err;
        }
    }

}


export default MemberApiService;