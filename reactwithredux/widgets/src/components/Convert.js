import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "YOUR GOOGLE APIS KEY HERE";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        { params: { q: debouncedText, target: language.value, key: KEY } }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (debouncedText) {
      doTranslation();
    } else {
      setTranslated("");
    }
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui  header">{translated}</h1>
    </div>
  );
};

export default Convert;
