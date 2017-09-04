module.exports = {
    "extends": "airbnb",
     "rules": {
       radix: ["error", "as-needed"],
        "semi": ["error", "never"],
        "no-console": "off",
        "no-inline-comments": "off",
         "quotes": ["error", "double"],
	 "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	 "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
	 "max-len": ["warn", 100],
	 "no-useless-constructor": "warn",
	     "no-unused-vars": "warn",
"react/prop-types": [1, { ignore: [], customValidators: [] }]
    }
};
