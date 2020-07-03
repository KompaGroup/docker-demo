const config = {
    port: process.env.PORT || 8080,
    pgHost: process.env.PG_HOST || 'localhost',
    pgPort: process.env.PG_PORT || 5432,
    pgUser: process.env.PG_USER || 'postgres',
    pgPassword: process.env.PG_PASSWORD || 'postgres',
    pgDB: process.env.PG_DB || 'expense_management',
    nodeEnv: process.env.NODE_ENV || 'development',
    endpoint: process.env.END_POINT || 'http://localhost:3000',
    jwtSecretKey: process.env.JWT_SECRET_KEY || 'RCSaPADCSXEdp9YC'
};
export default config;
