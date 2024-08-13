import styled from "styled-components/native";
import React, { useEffect } from "react";
import Colors from "../../consts/Colors.tsx";

interface ChapterProps {
  index: number;
};

const Chapter = ({ index }: ChapterProps) => {
  return (
    <ChapterContainer>
      <ChapterChip $disabled={index !== 1} />
      <ChapterChip $disabled={index !== 2} />
      <ChapterChip $disabled={index !== 3} />
      <ChapterChip $disabled={index !== 4} />
      <ChapterChip $disabled={index !== 5} />
    </ChapterContainer>
  );
};

const ChapterContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;
const ChapterChip = styled.View<{$disabled: boolean}>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.$disabled ? Colors.Gray100 : Colors.Gray900};
`;

export default Chapter;
