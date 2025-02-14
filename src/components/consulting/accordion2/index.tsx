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
                        <p>Para clientes que desejam visualizar o resultado completo do conceito desenvolvido na consultoria, oferecemos ilustrações em 3D, proporcionando uma experiência mais realista e detalhada.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="2" className={styles.header}>
                        <p className={styles.title}>
                            Layout com MoodBoard (Planta Baixa)
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className={styles.body}>
                        <p>O layout é uma planta baixa ilustrada do ambiente, apresentando a disposição em escala de todos os itens definidos na sua consultoria de interiores exclusiva.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="3" className={styles.header}>
                        <p className={styles.title}>
                            Shopping List exclusivo
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className={styles.body}>
                        <p>Trata-se de uma lista detalhada com os itens incluídos na sua consultoria online, contendo descrições, valores e links diretos para a compra online.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Accordion2;