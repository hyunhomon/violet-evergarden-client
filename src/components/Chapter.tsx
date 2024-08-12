import styled from "styled-components/native";
import React, { useEffect } from "react";
import Chapter from "./Chapter.tsx";

interface ChapterProps {
  currentChapter: number;
}

const chapter = (props: ChapterProps) => {

  const [currentChapter, setCurrentChapter] = React.useState(1);

  useEffect(() => {
    setCurrentChapter(props.currentChapter);
  }, [currentChapter]);
  return (
    <ChapterContainer>
      {currentChapter === 1?<ChapterChip style={{backgroundColor:'#181818'}}/>:<ChapterChip style={{backgroundColor:'#D8D8D8'}}/>}
      {currentChapter === 2?<ChapterChip style={{backgroundColor:'#181818'}}/>:<ChapterChip style={{backgroundColor:'#D8D8D8'}}/>}
      {currentChapter === 3?<ChapterChip style={{backgroundColor:'#181818'}}/>:<ChapterChip style={{backgroundColor:'#D8D8D8'}}/>}
      {currentChapter === 4?<ChapterChip style={{backgroundColor:'#181818'}}/>:<ChapterChip style={{backgroundColor:'#D8D8D8'}}/>}
      {currentChapter === 5?<ChapterChip style={{backgroundColor:'#181818'}}/>:<ChapterChip style={{backgroundColor:'#D8D8D8'}}/>}
    </ChapterContainer>
  );
};

const ChapterContainer = styled.View`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;
const ChapterChip = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 100000px;
`;

export default chapter;
