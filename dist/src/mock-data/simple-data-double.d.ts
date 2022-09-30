declare const _default: {
    upper: {
        id: number;
        name: string;
        nextMatchId: number;
        nextLooserMatchId: number;
        tournamentRoundText: string;
        startTime: any;
        state: string;
        participants: {
            id: string;
            resultText: any;
            isWinner: boolean;
            status: any;
        }[];
    }[];
    lower: {
        id: number;
        name: string;
        nextMatchId: number;
        nextLooserMatchId: any;
        tournamentRoundText: string;
        startTime: any;
        state: string;
        participants: {
            id: any;
            resultText: any;
            isWinner: boolean;
            status: string;
        }[];
    }[];
};
export default _default;
