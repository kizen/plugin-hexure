const urlsByEnvironment = {
  uat: "https://uat.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
  staging: "https://staging.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
  production: "https://www.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
};

if (!this.args.environment) {
  throw new Error('Variable "environment" missing from config');
}

if (!urlsByEnvironment[this.args.environment]) {
  throw new Error(
    `Environment ${this.args.environment} is not a valid selection`,
  );
}

const res = await this.get(`/firelight-integration/auth-token-agent`);

this.showToast("Logging in to FireLight...", { variant: "success" });

await this.postFormData(
  urlsByEnvironment[this.args.environment],
  {
    Token: res.access_token,
  },
  true,
);
