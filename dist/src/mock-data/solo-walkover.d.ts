declare const _default: ({
    id: number;
    name: string;
    nextMatchId: number;
    nextLooserMatchId: any;
    tournamentRoundText: string;
    startTime: string;
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
    nextMatchId: any;
    nextLooserMatchId: any;
    tournamentRoundText: string;
    startTime: string;
    state: string;
    participants: ({
        id: string;
        resultText: any;
        isWinner: boolean;
        status: any;
        name: string;
    } | {
        id: any;
        resultText: any;
        isWinner: boolean;
        status: string;
        name?: undefined;
    })[];
})[];
export default _default;
