import styled from "styled-components";
import { NftItem } from "./NftItem";
import { useMyNftsQuery } from "./useMyNftsQuery";

const Container = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, 300px);
  width: 100%;
`;

export const NftList = () => {
  const { data } = useMyNftsQuery();

  return (
    <Container>
      {data?.ownedNfts.map((nft, index) => (
        <NftItem
          key={index}
          address={nft.contract.address}
          tokenId={nft.tokenId}
          imageUrl={nft.media[0].gateway}
          title={nft.title}
        />
      ))}
    </Container>
  );
};
