import { useWeb3React } from "@web3-react/core"
import { GhostButton } from "lib/ui/buttons/rect/GhostButton"
import { PrimaryButton } from "lib/ui/buttons/rect/PrimaryButton"
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
        <GhostButton
          onClick={() => {
            if (connector?.deactivate) {
              connector.deactivate()
            } else {
              connector.resetState()
            }
          }}
        >
          Disconnect
        </GhostButton>
      </HStack>
    )
  }

  return (
    <PrimaryButton onClick={() => connector.activate()}>
      Connect MetaMask
    </PrimaryButton>
  )
}
