declare const _default: {
    upper: {
        id: number;
        name: string;
        nextMatchId: number;
        nextLooserMatchId: number;
        startTime: string;
        tournamentRound: string;
        state: string;
        participants: {
            id: string;
            resultText: string;
            isWinner: boolean;
            status: string;
            name: string;
        }[];
    }[];
    lower: ({
        id: number;
        name: string;
        nextMatchId: number;
        nextLooserMatchId: any;
        startTime: string;
        tournamentRound: string;
        state: string;
        participants: {
            id: string;
            resultText: string;
            isWinner: boolean;
            status: string;
            name: string;
        }[];
    } | {
        id: number;
        name: string;
        nextMatchId: number;
        nextLooserMatchId: number;
        startTime: any;
        tournamentRound: string;
        state: string;
        participants: {
            id: string;
            resultText: string;
            isWinner: boolean;
            status: string;
            name: string;
        }[];
    })[];
};
export default _default;
