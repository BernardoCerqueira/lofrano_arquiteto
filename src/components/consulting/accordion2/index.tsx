import "@/styles/accordion.scss"
import styles from "./Accordion2.module.scss"
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Accordion2() {
    const [open, setOpen] = useState('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('')
        } else {
            setOpen(id)
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle} className={styles.accordion}>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="1" className={styles.header}>  
                        <p className={styles.title}>
                            Imagens em 3D do seu novo ambiente
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="1" className={styles.body}>
                        <strong>This is the first item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="2" className={styles.header}>
                        <p className={styles.title}>
                            Layout com MoodBoard (Planta Baixa)
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className={styles.body}>
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="3" className={styles.header}>
                        <p className={styles.title}>
                            Shopping List exclusivo
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className={styles.body}>
                        <strong>This is the third item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Accordion2;