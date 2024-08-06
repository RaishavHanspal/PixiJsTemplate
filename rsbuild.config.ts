import { rspack } from '@rsbuild/core';
export default {
    tools: {
        rspack: {
            plugins: [new rspack.CopyRspackPlugin({
                patterns: [{
                    from: "./assets", to: "./assets"
                }]
            })]
        },
    },
}
