module.exports = () => ({
    upload: {
        config: {
            // provider: 'local',
            // providerOptions: {
            //     sizeLimit: 100000,
            // },
            sizeLimit: 500 * 1024 * 1024, // 500mb in bytes
        },
    },
});
