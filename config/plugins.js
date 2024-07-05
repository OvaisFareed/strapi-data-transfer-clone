module.exports = () => ({
    upload: {
        config: {
            // provider: 'local',
            // providerOptions: {
            //     sizeLimit: 100000,
            // },
            sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
        },
    },
});
