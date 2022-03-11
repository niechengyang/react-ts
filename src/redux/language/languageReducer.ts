import in18 from "i18next";
import { CHANGE_LANGUAGE, ADD_LANGUAGE } from "./languageActions";
export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const initState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    {
      name: "English",
      code: "en",
    },
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      in18.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};
