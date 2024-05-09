import Configuration from "openai";

const configureOpenAi = () => {
  const config = new Configuration({
    apikey: process.env.OPEN_AI_SECRET,
    oraganization: process.env.OPENAI_ORGANIZATION,
  });
  return config;
};

export { configureOpenAi };
