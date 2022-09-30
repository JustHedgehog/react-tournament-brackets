declare function Match({ rowIndex, columnIndex, match, previousBottomMatch, teams, topText, bottomText, style, matchComponent: MatchComponent, onMatchClick, onPartyClick, ...rest }: {
    [x: string]: any;
    rowIndex: any;
    columnIndex: any;
    match: any;
    previousBottomMatch?: any;
    teams: any;
    topText: any;
    bottomText: any;
    style?: {
        width: number;
        boxHeight: number;
        canvasPadding: number;
        spaceBetweenColumns: number;
        spaceBetweenRows: number;
        connectorColor: string;
        connectorColorHighlight: string;
        roundHeader: {
            isShown: boolean;
            height: number;
            marginBottom: number;
            fontSize: number;
            fontColor: string;
            backgroundColor: string;
            fontFamily: string;
        };
        roundSeparatorWidth: number;
        lineInfo: {
            separation: number;
            homeVisitorSpread: number;
        };
        horizontalOffset: number;
        wonBywalkOverText: string;
        lostByNoShowText: string;
    };
    matchComponent: any;
    onMatchClick: any;
    onPartyClick: any;
}): JSX.Element;
export default Match;
