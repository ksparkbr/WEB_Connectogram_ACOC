/**
 * Node Server 구동, Mysql 연결을 위한 기본 설정값 객체
 * @author 중사 박길선
 * @since 2022.09.23
 */

require('dotenv').config();

const globalConfig = {
    port: process.env.APP_PORT,
    mysql: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 20,
        //waitForConnections: false,
        keepAliveInitialDelay: 1000 * 60 * 60,  //1시간마다 만료된 세션 체크
        enableKeepAlive: true,     // 만료된 세션을 삭제하기 위한 옵션, 
                                // checkExpirationInterval에서 설정한 시간마다 체크하여 만료된 세션을 삭제한다.
    },
}

module.exports = globalConfig;