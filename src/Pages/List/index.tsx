import React from "react";

import { Container } from "./style";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const List: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: "Rodrigo"},
        {value: 'Maria', label: "Maria"},
        {value: 'Ana', label: "Ana"},
    ]

    return (
        <Container>
            <ContentHeader title={"Saidas"} lineColor={"#e44c4e"}>
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default List