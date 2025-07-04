import { type SupportLogLevel } from "../logger.js";

export interface NadleUserBaseOptions {
	readonly cache?: boolean;
	readonly cacheDir?: string;

	readonly parallel?: boolean;
	readonly showSummary?: boolean;
	readonly logLevel?: SupportLogLevel;
	readonly minWorkers?: number | string;
	readonly maxWorkers?: number | string;

	/** @internal */
	readonly isWorkerThread?: boolean;
}

export interface NadleCLIOptions extends NadleUserBaseOptions {
	readonly list: boolean;
	readonly dryRun: boolean;
	readonly configPath?: string;
	readonly showConfig: boolean;
	readonly stacktrace: boolean;

	readonly excludedTasks?: string[];
}

export interface NadleConfigFileOptions extends NadleUserBaseOptions {}

export interface NadleResolvedOptions extends Required<Omit<NadleCLIOptions, "maxWorkers" | "minWorkers">> {
	readonly projectDir: string;

	readonly minWorkers: number;
	readonly maxWorkers: number;
}

export interface NadlePackageJson {
	readonly nadle?: {
		root?: true;
	};
}
