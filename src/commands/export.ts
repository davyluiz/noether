// Copyright 2021 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.

import { Argv } from "yargs";
import { loadWallet } from "../connection";

interface Args {
    wallet: string;
}

export const command = "export";
export const describe = "Export encrypted wallet file to mnemonic";

export const builder = (yargs: Argv) => {
    return yargs.option("wallet", {
        describe: "Filename of JSON wallet file",
        type: "string",
        default: "/root/.ethereum/key",
    });
};

export const handler = async (args: Args) => {
    const wallet = await loadWallet(args.wallet, false);
    console.log(`MNEMONIC="${wallet.mnemonic.phrase}"`);
};