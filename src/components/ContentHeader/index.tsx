import React from "react";


import { TitleContainer, Controllers, Container } from './styles'

interface iContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<iContentHeaderProps> = ({
    title,
    lineColor,
    children,
}) => {

    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}

export default ContentHeader