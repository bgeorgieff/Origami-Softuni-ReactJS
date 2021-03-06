const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: process.env.DB_URL,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];