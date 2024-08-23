import { Box, Center, Flex, Input } from "@chakra-ui/react";
import { login } from "../../services/login";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Form = () => {
    const [emailName, setEmailName] = useState('');
    const handleEmailName = (e: string) => {
        setEmailName(e);
    }

    return (
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center margin="14px">
                <h1>Faça o login</h1>
            </Center>
            <Flex direction="column" gap="12px" marginBottom="14px">
                <Input placeholder="email" onChange={e => handleEmailName(e.target.value)} value={emailName}/>
                <Input placeholder="password" />
            </Flex>
            <Center>
                <Button onClick={() => login(emailName)}/>
            </Center>
        </Box>
    );
};
