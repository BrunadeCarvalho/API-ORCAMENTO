module.exports ={
    roots: ["<rootDir>/tests"],
    transform:{
        "^.+\\.tsx?$": "ts-jest",
    },
    globals: {
        "ts-jest": {
          "tsConfigFile": "tsconfig.json"
        }
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};