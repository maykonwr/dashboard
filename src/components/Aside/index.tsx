import React from "react";

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'

import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
 } from './styles'
import { Link } from "react-router-dom";

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo minha carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to="/dashboard">
                    <MdDashboard />
                    Dashboard
                </Link>
                <Link to="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </Link>
                <Link to="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </Link>
                <Link to="#">
                    <MdExitToApp />
                    Sair
                </Link>
            </MenuContainer>
        </Container>
    )
}

export default Aside