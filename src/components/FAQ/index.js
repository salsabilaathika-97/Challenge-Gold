import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import { HeaderList } from "../../const/StaticData";

const FAQ = () => {
    return (
        <>
            {
                HeaderList.map((item) => (
                    <Accordion>
                        <Accordion.Item eventKey={item.id}>
                        <AccordionHeader style = {{ fontWeight: 700, fontSize: "14px" }}>{item.header}</AccordionHeader>
                        <AccordionBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </AccordionBody>
                        </Accordion.Item>
                    </Accordion>
                ))
            }
        </>
    );
};

export default FAQ;
