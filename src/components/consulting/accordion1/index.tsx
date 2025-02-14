import "@/styles/accordion.scss"
import styles from "./Accordion1.module.scss"
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Accordion1() {
    const [open, setOpen] = useState('1');
    const toggle = (id: any) => {
        if (open === id) {
            setOpen('')
        } else {
            setOpen(id)
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="1" className={styles.header}>  
                        <p className={styles.title}>
                            1. Conversa
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
                            2. Proposta
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
                            3. Reunião
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
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="4" className={styles.header}>
                        <p className={styles.title}>
                            4. Criação
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="4" className={styles.body}>
                        <strong>This is the third item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="5" className={styles.header}>
                        <p className={styles.title}>
                            5. Realização
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="5" className={styles.body}>
                        <p>Com o material que você receberá, saberá exatamanete quais itens adquirir.</p>
                        <p>E, caso surja qualquer dúvida durante a execução, estaremos sempre dispostos a lhe auxiliar.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Accordion1;