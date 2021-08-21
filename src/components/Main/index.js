import {Box, Center, Heading, Text, VStack} from '@chakra-ui/react'

const Main = () => {
	return (
		<Box w="100vw" h="100vh" bg="black">
			<Center h="100%">
				<VStack spacing={12}>
					<VStack align="flex-end">
						<Heading color="white" size="3xl">
							Florian Pürschel
						</Heading>
						<Text color="teal.200" fontSize="md" fontWeight="bold">
							Web Developer from Berlin, Germany.
						</Text>
					</VStack>
				</VStack>
			</Center>
		</Box>
	)
}

export default Main