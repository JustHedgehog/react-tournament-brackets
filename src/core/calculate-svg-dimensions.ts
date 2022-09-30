export function calculateSVGDimensions(
  numOfRows,
  numOfColumns,
  rowHeight: any,
  columnWidth: any,
  canvasPadding: any,
  roundHeader: any,
  currentRound: string = ''
) {
  const bracketHeight = numOfRows * rowHeight;

  const gameHeight =
    bracketHeight +
    canvasPadding * 2 +
    (roundHeader.isShown ? roundHeader.height + roundHeader.marginBottom : 0);
  const gameWidth = 1401 + canvasPadding * 2;
  const startPosition = [
    currentRound
      ? -(parseInt(currentRound, 10) * columnWidth - canvasPadding * 2)
      : 0,
    0,
  ];
  return { gameWidth, gameHeight, startPosition };
}
