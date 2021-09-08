import * as React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Heading,
    Stack,
    Tag,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WithSubnavigation from './WithSubnavigation';

export const App = () => (
    <ChakraProvider theme={theme}>
        <WithSubnavigation />
        <ColorModeSwitcher justifySelf="flex-end" />
        <Box borderRadius="lg" boxShadow="sm" pl={3} pr={3} pt={5} pb={5}>
            <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                mb={2}
                pl={4}
            >
                <Heading size="md" as="h2" lineHeight="shorter" fontWeight="bold" fontFamily="heading">
                    Editor
                </Heading>
            </Flex>
            <Stack spacing={5} pl={4} pt={4}>
                <Stack spacing={2}>
                    <Flex p={0} alignItems="space-between" justifyContent="flex-start" display="flex">
                        <Tag size="md" variant="subtle" colorScheme="pink" mr={3}>
                            TEST
                        </Tag>
                        <Tag size="md" variant="subtle" colorScheme="pink" mr={3}>
                            estsetestgse
                        </Tag>
                        <Tag size="md" variant="subtle" colorScheme="purple" mr={3}>
                            VsdFE
                        </Tag>
                    </Flex>
                    <Text color="gray.600">
                        The Builder mode adds extra padding/border to ease components selection (like containers).
                    </Text>
                </Stack>
                <Stack>
                    <Tag size="md" variant="solid" colorScheme="facebook">
                        Code Panel
                    </Tag>
                    <Text color="gray.600">
                        Toggle the code panel for viewing the JSX/React code of your components. You can even export
                        your code directly to CodeSandbox!
                    </Text>
                </Stack>
                <Stack spacing={4}>
                    <Tag size="md" variant="solid" colorScheme="facebook">
                        Shortcuts
                    </Tag>
                    <Stack isInline>
                        <Tag size="sm" variant="subtle">
                            cmd+z
                        </Tag>
                        <Tag size="sm" variant="subtle" colorScheme="gray">
                            ctrl+z
                        </Tag>
                        <Text color="gray.600">Undo</Text>
                    </Stack>
                    <Stack isInline>
                        <Tag size="sm" variant="subtle" colorScheme="gray">
                            cmd+y
                        </Tag>
                        <Tag size="sm" variant="subtle" colorScheme="gray">
                            ctrl+y
                        </Tag>
                        <Text color="gray.600">Redo</Text>
                    </Stack>
                    <Stack isInline>
                        <Tag size="md" variant="subtle" colorScheme="gray">
                            b
                        </Tag>
                        <Text color="gray.600">Toggle Builder mode</Text>
                    </Stack>
                    <Stack isInline>
                        <Tag size="sm" variant="subtle" colorScheme="gray">
                            c
                        </Tag>
                        <Text color="gray.600">Toggle Code panel</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    </ChakraProvider>
);
