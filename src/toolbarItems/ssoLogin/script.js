const urlsByEnvironment = {
  uat: "https://uat.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
  staging: "https://staging.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
  production: "https://www.firelighteapp.com/EGApp/SSOGateway/TokenGateway",
};

if (!this.args.environment) {
  return this.showToast("Variable 'environment' missing from config", { variant: "failure" });
}

if (!urlsByEnvironment[this.args.environment]) {
  return this.showToast(`Environment ${this.args.environment} is not a valid selection`, { variant: "failure" });
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
