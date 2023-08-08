class MemberApiService{
  signupRequest: any;
  loginRequest(login_data: { mb_nick: string; mb_password: string; }) {
      throw new Error("Method not implemented.");
  }
  logOutRequest() {
    throw new Error("Method not implemented.");
  }
}

export default MemberApiService;

