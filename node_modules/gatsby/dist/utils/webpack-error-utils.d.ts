import { Stats } from "webpack";
import { Stage as StageEnum } from "../commands/types";
interface ITransformedWebpackError {
    id: string;
    filePath?: string;
    location?: {
        start: string;
    };
    context: {
        stage: StageEnum;
        stageLabel: string;
        sourceMessage?: string;
        [key: string]: unknown;
    };
}
export declare const structureWebpackErrors: (stage: StageEnum, webpackError: any) => Array<ITransformedWebpackError> | ITransformedWebpackError;
export declare const reportWebpackWarnings: (stats: Stats) => void;
export {};
