const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
    mode: 'development',
    entry: [
        require.resolve('./polyfills'),
        require.resolve('webpack/hot/dev-server'),
        paths.appIndexJs,
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: (info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: [
            '.web.js',
            '.mjs',
            '.js',
            '.json',
            '.web.jsx',
            '.jsx',
            '.less',
        ],
        alias: {
            '@actions': path.resolve(__dirname, '../src/redux/actions'),
            '@constants': path.resolve(__dirname, '../src/redux/constants'),
            '@reducers': path.resolve(__dirname, '../src/redux/reducers'),
            '@middlewares': path.resolve(__dirname, '../src/redux/middlewares'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@helpers': path.resolve(__dirname, '../src/helpers'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@themes': path.resolve(__dirname, '../src/themes'),
            '@layouts': path.resolve(__dirname, '../src/layouts'),
            '@routes': path.resolve(__dirname, '../src/routes'),
            '@locales': path.resolve(__dirname, '../src/locales'),
            '@images': path.resolve(__dirname, '../src/static/images'),
            '@svg': path.resolve(__dirname, '../src/static/svg'),
            '@hooks': path.resolve(__dirname, '../src/hooks'),
        },
        plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.json$/,
                loader: '@lingui/loader',
                type: 'javascript/auto',
            },
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [
                            /\.bmp$/,
                            /\.gif$/,
                            /\.jpe?g$/,
                            /\.png$/,
                            /\.svg/,
                        ],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 1000,
                            name: 'static/images/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: paths.appSrc,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.(css)$/,
                        loader: [
                            'style-loader',
                            'css-loader',
                            'postcss-loader',
                        ],
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // Creates `style` nodes from JS strings
                            'style-loader',
                            // Translates CSS into CommonJS
                            'css-loader',
                            // Compiles Sass to CSS
                            'sass-loader',
                        ],
                    },
                    {
                        test: /\.less$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'less-loader',
                                options: {
                                    modifyVars: {},
                                    javascriptEnabled: true,
                                },
                            },
                        ],
                    },
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/css/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: paths.appHtml,
        }),
        new ProgressBarPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    performance: {
        hints: false,
    },
};
