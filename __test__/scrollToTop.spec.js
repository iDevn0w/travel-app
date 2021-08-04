import expectExport from "expect";
import { testPathPatternToRegExp } from "jest-util";
import { describe } from "yargs";
import { scrolling } from "../src/client/js/scrollToTop";

//test scrolling
    test("test scrolling button", ()=>{
        expect(scrolling).toBeDefined();
    })