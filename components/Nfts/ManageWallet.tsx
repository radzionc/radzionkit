import { useWeb3React } from "@web3-react/core"
import { Button } from "lib/ui/buttons/Button"
import { Spinner } from "lib/ui/Spinner"
import { HStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"

export const ManageWallet = () => {
  const { connector, isActivating, account } = useWeb3React()

  if (isActivating) {
    return <Spinner />
  }

  if (account) {
    return (
      <HStack gap={8} alignItems="center">
        <Text color="shy" weight="bold">
          {account}
        </Text>
        <Button
          kind="ghost"
          onClick={() => {
            if (connector?.deactivate) {
              connector.deactivate()
            } else {
              connector.resetState()
            }
          }}
        >
          Disconnect
        </Button>
      </HStack>
    )
  }

  return <Button onClick={() => connector.activate()}>Connect MetaMask</Button>
}
