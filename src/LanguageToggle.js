import React from "react";
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage, theme }) => (
    <div className="basket tkh-basket-wrapper" style={theme.left}>
        {
            languages.map((lang) => {
                if (lang.code == activeLanguage.code) {
                }
                else {
                    return (
                        <a key="aLanguage" className="basket-toggle" href="javascript:void(0)" onClick={() => setActiveLanguage(lang.code)}> <span className="langSelect" style={theme.langSelect}>{lang.code}</span> </a>
                    )
                }
            })
        }
    </div>
);

export default withLocalize(LanguageToggle);