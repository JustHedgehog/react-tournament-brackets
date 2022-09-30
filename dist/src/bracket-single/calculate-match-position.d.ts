export declare const calculateVerticalStartingPoint: (columnIndex: any, height: any) => number;
export declare const columnIncrement: (columnIndex: any, height: any) => number;
export declare const calculateHeightIncrease: (columnIndex: any, rowIndex: any, height: any) => number;
export declare const calculateVerticalPositioning: ({ rowIndex, columnIndex, rowHeight: height, }: {
    rowIndex: any;
    columnIndex: any;
    rowHeight: any;
}) => number;
export declare const calculatePositionOfMatch: (rowIndex: any, columnIndex: any, { canvasPadding, rowHeight, columnWidth, offsetX, offsetY }: {
    canvasPadding: any;
    rowHeight: any;
    columnWidth: any;
    offsetX?: number;
    offsetY?: number;
}) => {
    x: any;
    y: any;
};
