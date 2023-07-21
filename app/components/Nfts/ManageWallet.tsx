import { useWeb3React } from "@web3-react/core"
import { Button } from "@reactkit/ui/ui/buttons/Button"
import { Spinner } from "@reactkit/ui/ui/Spinner"
import { HStack } from "@reactkit/ui/ui/Stack"
import { Text } from "@reactkit/ui/ui/Text"

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
