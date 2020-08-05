import React from 'react'
import { ContainerMessage, DescriptionError, DescriptionMessage } from './style';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

const Page404 = () => (
    <PageDefault>
        
            <ContainerMessage>
                <DescriptionError>Eita!!!</DescriptionError>
                <DescriptionMessage>
                    Não foi possível localizar a página que você estava procurando. :(
                    Que tal ler um artigo super interessante sobre Aprendizagem Colaborativa Assistida por Computador.\\O//
                </DescriptionMessage>
                <Button>
                   <a href="https://mayratardin.github.io/artigo-publicado/" target="_blank">Ler Artigo</a>
                </Button>
            </ContainerMessage>
        
    </PageDefault>
);

export default Page404;