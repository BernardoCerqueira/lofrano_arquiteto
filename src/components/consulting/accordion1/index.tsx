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
    const toggle = (id: string) => {
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
                        <p>Em nosso <strong>primeiro contato</strong> pelo WhatsApp, você nos envia vídeos e fotos dos ambientes que deseja projetar.</p>
                        <p>Conversamos sobre suas preferências, desejos, necessidades e tudo o que espera para transformar o espaço dos seus sonhos em realidade.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="2" className={styles.header}>
                        <p className={styles.title}>
                            2. Proposta
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className={styles.body}>
                        <p>Após recebermos suas imagens, você receberá uma <strong>proposta exclusiva</strong>.</p>
                        <p>Ela inclui o passo a passo dos nossos processos, informações detalhadas sobre o investimento e o prazo de execução, tudo personalizado para atender às suas necessidades.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="3" className={styles.header}>
                        <p className={styles.title}>
                            3. Reunião
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className={styles.body}>
                        <p>Após a aprovação da proposta e a confirmação do pagamento, agendamos sua <strong>reunião virtual</strong>.
                        </p>
                        <p>Nessa etapa, aprofundamos o entendimento sobre seus desejos e necessidades, garantindo que todos os detalhes sejam incorporados aos seus novos ambientes.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className={styles.accordionItem}>
                    <AccordionHeader targetId="4" className={styles.header}>
                        <p className={styles.title}>
                            4. Criação
                        </p>
                    </AccordionHeader>
                    <AccordionBody accordionId="4" className={styles.body}>
                        <p>Desenvolvemos o <strong>conceito arquitetônico</strong> da consultoria com base em todas as informações que você compartilhou ao longo de nossas conversas, garantindo que cada detalhe reflita seus desejos e necessidades.</p>
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
                        <p>E, caso surja qualquer dúvida durante a <strong>execução</strong>, estaremos sempre dispostos a lhe auxiliar.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Accordion1;